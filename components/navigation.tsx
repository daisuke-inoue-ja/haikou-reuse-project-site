'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  School,
  Menu,
  Phone,
  ChevronRight,
  Building2,
  Users2,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Palette,
  Calendar,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const menuSections = [
  {
    id: 'about',
    title: 'プロジェクト概要',
    icon: Sparkles,
    items: [
      { id: 'mission', title: 'プロジェクト概要', href: '/about#mission', description: '私たちのミッションとビジョン', icon: Sparkles },
      { id: 'philosophy', title: '活動理念', href: '/about#philosophy', description: '大切にしている価値観と目指す未来', icon: Palette },
      { id: 'ceo-message', title: 'CEOメッセージ', href: '/about#ceo-message', description: '代表取締役からのメッセージ', icon: Users2 },
      { id: 'core-values', title: 'ビジョン', href: '/about#core-values', description: '私たちのコアバリューと持続可能性', icon: Sparkles },
      { id: 'company-info', title: 'プロジェクト情報', href: '/about#company-info', description: 'プロジェクトの基本情報', icon: Calendar },
    ],
  },
  {
    id: 'services',
    title: 'サービス',
    icon: Building2,
    items: [
      { id: 'service-hero', title: 'サービス内容', href: '/services#hero', description: '廃校を地域の価値創造拠点に再生', icon: Sparkles },
      { id: 'renovation', title: '施設リノベーション', href: '/services#services', description: '地域のニーズに合わせた施設の再生と活用プラン', icon: Building2 },
      { id: 'features', title: '特徴', href: '/services#features', description: 'プロジェクトの主な特徴', icon: BookOpen },
      { id: 'cta', title: 'お問い合わせ', href: '/services#cta', description: 'プロジェクトのご相談はこちら', icon: Phone },
    ],
  },
  {
    id: 'additional',
    title: 'その他',
    icon: Users2,
    items: [
      { id: 'team', title: 'チームメンバー', href: '/team', icon: Users2 },
      { id: 'blog', title: 'ブログ', href: '/blog', icon: BookOpen },
      { id: 'news', title: 'ニュース', href: '/news', icon: MessageCircle },
      { id: 'faq', title: 'FAQ', href: '/faq', icon: HelpCircle },
      { id: 'contact', title: 'お問い合わせ', href: '/contact', icon: Phone, isButton: true },
    ],
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [expandedSections, setExpandedSections] = React.useState({});

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeSheet = () => setSheetOpen(false);

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-lg backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo and Project Name */}
        <Link href="/" className="flex items-center space-x-2 mr-8 transition-transform hover:scale-105">
          <School className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline-block">廃校利活用プロジェクト</span>
          <span className="font-bold sm:hidden">廃校活用</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <NavigationMenu className="hidden md:flex flex-1">
            <NavigationMenuList className="space-x-2">
              {menuSections.map(({ id, title, items }) => (
                <NavigationMenuItem key={id}>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 transition-colors">
                    {title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="animate-in fade-in-50 duration-200">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {items.map((item) => (
                        <ListItem key={item.id} title={item.title} href={item.href} icon={item.icon}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Right-aligned Contact Button (Desktop) */}
        <div className="ml-auto flex items-center space-x-4">
          {!isMobile && menuSections[2].items.filter((item) => item.isButton).map((item) => (
            <Button key={item.id} asChild size="sm" className="bg-primary/90 hover:bg-primary transition-colors duration-200">
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="メニューを開く">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 px-0">
              <SheetHeader className="px-6 border-b pb-6">
                <SheetTitle className="flex items-center gap-2">
                  <School className="h-5 w-5 text-primary" /> 廃校利活用プロジェクト
                </SheetTitle>
              </SheetHeader>
              <div className="px-6 py-4 space-y-6">
                {menuSections.map(({ id, title, items, icon: Icon }) => (
                  <div key={id}>
                    {/* Toggle Button for each section */}
                    <button
                      onClick={() => toggleSection(id)}
                      className="flex items-center justify-between w-full text-left font-medium text-muted-foreground hover:text-foreground"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <span>{title}</span>
                      </div>
                      {expandedSections[id] ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {expandedSections[id] && (
                      <nav className="mt-2 ml-4 border-l pl-4 space-y-2">
                        {items.map((item) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            className={cn(
                              "flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors",
                              pathname === item.href ? "bg-primary/10" : ""
                            )}
                            onClick={closeSheet}
                          >
                            <item.icon className="h-5 w-5 text-primary" />
                            <span className="flex-1">{item.title}</span>
                          </Link>
                        ))}
                      </nav>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        )}

        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<HTMLAnchorElement, { 
  title: string; 
  href: string; 
  icon: React.ComponentType<any>; 
  children?: React.ReactNode; 
}>(({ title, href, icon: Icon, children }, ref) => (
  <li>
    <NavigationMenuLink asChild href={href}>
      <a
        ref={ref}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 focus:bg-primary/10"
      >
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">{title}</span>
        </div>
        {children && (
          <p className="line-clamp-2 text-sm text-muted-foreground mt-2">
            {children}
          </p>
        )}
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = 'ListItem';

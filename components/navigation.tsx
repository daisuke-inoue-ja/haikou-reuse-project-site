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
} from 'lucide-react';

const menuSections = {
  about: [
    { title: 'プロジェクト概要', href: '/about#mission', description: '私たちのミッションとビジョン', icon: Sparkles },
    { title: '活動理念', href: '/about#philosophy', description: '大切にしている価値観と目指す未来', icon: Palette },
    { title: 'CEOメッセージ', href: '/about#ceo-message', description: '代表取締役からのメッセージ', icon: Users2 },
    { title: 'ビジョン', href: '/about#core-values', description: '私たちのコアバリューと持続可能性', icon: Sparkles },
    { title: 'プロジェクト情報', href: '/about#company-info', description: 'プロジェクトの基本情報', icon: Calendar },
  ],
  services: [
    { title: '施設リノベーション', href: '/services#renovation', description: '地域のニーズに合わせた施設の再生と活用プラン', icon: Building2 },
    { title: 'コミュニティ形成', href: '/services#community', description: '地域住民との対話を通じたコミュニティづくり', icon: Users2 },
    { title: 'イベント企画', href: '/services#events', description: '地域の特色を活かしたイベントの企画・運営', icon: Calendar },
  ],
  mainNav: [
    { title: 'チームメンバー', href: '/team', icon: Users2 },
    { title: 'ブログ', href: '/blog', icon: BookOpen },
    { title: 'ニュース', href: '/news', icon: MessageCircle },
    { title: 'FAQ', href: '/faq', icon: HelpCircle },
    { title: 'お問い合わせ', href: '/contact', icon: Phone, isButton: true },
  ],
};

export function Navigation() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeSheet = () => setSheetOpen(false);

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
              {['about', 'services'].map((section) => (
                <NavigationMenuItem key={section}>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 transition-colors">
                    {section === 'about' ? 'プロジェクト概要' : 'サービス'}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="animate-in fade-in-50 duration-200">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {menuSections[section].map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              {menuSections.mainNav.filter((item) => !item.isButton).map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn("px-4 py-2 rounded-md transition-colors hover:bg-primary/10", pathname === item.href ? "bg-primary/10" : "")}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Right-aligned FAQ and Contact (Desktop) */}
        <div className="ml-auto flex items-center space-x-4">
          {!isMobile && menuSections.mainNav.filter((item) => item.isButton).map((item) => (
            <Button key={item.title} asChild size="sm" className="bg-primary/90 hover:bg-primary transition-colors duration-200">
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
                  {Object.keys(menuSections).map((section) => (
                    <div key={section}>
                      <h3 className="text-sm font-medium text-muted-foreground mb-3">
                        {section === 'about' ? 'プロジェクト概要' : section === 'services' ? 'サービス' : 'メニュー'}
                      </h3>
                      <nav className="space-y-2">
                        {menuSections[section].map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className={cn("flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors", pathname === item.href ? "bg-primary/10" : "")}
                            onClick={closeSheet}
                          >
                            <item.icon className="h-5 w-5 text-primary" />
                            <span className="flex-1">{item.title}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </Link>
                        ))}
                      </nav>
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

// ListItem Component
const ListItem = React.forwardRef(({ title, href, icon: Icon, children }, ref) => (
  <li>
    <NavigationMenuLink asChild href={href}>
      <a
        ref={ref}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-primary/10 focus:text-accent-foreground"
      >
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium leading-none">{title}</span>
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = 'ListItem';

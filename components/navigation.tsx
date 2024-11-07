'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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

const services = [
  {
    title: '施設リノベーション',
    href: '/services#renovation',
    description: '地域のニーズに合わせた施設の再生と活用プラン',
    icon: Building2,
  },
  {
    title: 'コミュニティ形成',
    href: '/services#community',
    description: '地域住民との対話を通じたコミュニティづくり',
    icon: Users2,
  },
  {
    title: 'イベント企画',
    href: '/services#events',
    description: '地域の特色を活かしたイベントの企画・運営',
    icon: Calendar,
  },
];

const about = [
  {
    title: 'プロジェクト概要',
    href: '/about',
    description: '私たちのミッションとビジョン',
    icon: Sparkles,
  },
  {
    title: 'チームメンバー',
    href: '/about#team',
    description: 'プロジェクトを推進するメンバー紹介',
    icon: Users2,
  },
  {
    title: '活動理念',
    href: '/about#philosophy',
    description: '大切にしている価値観と目指す未来',
    icon: Palette,
  },
];

const mainNav = [
  { title: 'ブログ', href: '/blog', icon: BookOpen },
  { title: 'ニュース', href: '/news', icon: MessageCircle },
  { title: 'FAQ', href: '/faq', icon: HelpCircle },
  { title: 'お問い合わせ', href: '/contact', icon: Phone },
];

export function Navigation() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-lg backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link 
          href="/" 
          className="flex items-center space-x-2 mr-8 transition-transform hover:scale-105"
        >
          <School className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline-block">
            廃校利活用プロジェクト
          </span>
          <span className="font-bold sm:hidden">廃校活用</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="bg-transparent hover:bg-primary/10 data-[state=open]:bg-primary/10 transition-colors"
                onMouseEnter={() => setActiveItem('about')}
              >
                プロジェクト概要
              </NavigationMenuTrigger>
              <NavigationMenuContent 
                className="animate-in fade-in-50 data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:slide-in-from-right-52 duration-200"
                onMouseLeave={() => setActiveItem(null)}
              >
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {about.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="bg-transparent hover:bg-primary/10 data-[state=open]:bg-primary/10 transition-colors"
                onMouseEnter={() => setActiveItem('services')}
              >
                サービス
              </NavigationMenuTrigger>
              <NavigationMenuContent 
                className="animate-in fade-in-50 data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:slide-in-from-right-52 duration-200"
                onMouseLeave={() => setActiveItem(null)}
              >
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {['blog', 'news'].map((item) => (
              <NavigationMenuItem key={item}>
                <Link href={`/${item}`} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      "px-4 py-2 rounded-md transition-colors hover:bg-primary/10",
                      pathname === `/${item}` ? "bg-primary/10" : "bg-transparent"
                    )}
                  >
                    {item === 'blog' ? 'ブログ' : 'ニュース'}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Button 
            asChild 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex hover:bg-primary/10"
          >
            <Link href="/faq">FAQ</Link>
          </Button>
          <Button 
            asChild 
            size="sm" 
            className="hidden md:flex bg-primary/90 hover:bg-primary transition-colors duration-200"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              お問い合わせ
            </Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10"
                aria-label="メニューを開く"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 px-0">
              <SheetHeader className="px-6 border-b pb-6">
                <SheetTitle className="flex items-center gap-2">
                  <School className="h-5 w-5 text-primary" />
                  廃校利活用プロジェクト
                </SheetTitle>
              </SheetHeader>
              <div className="px-6 py-4">
                <div className="space-y-6">
                  {/* About Section */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">
                      プロジェクト概要
                    </h3>
                    <nav className="space-y-2">
                      {about.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={cn(
                            'flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors',
                            pathname === item.href ? 'bg-primary/10' : ''
                          )}
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                          <span className="flex-1">{item.title}</span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </nav>
                  </div>

                  {/* Services Section */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">
                      サービス
                    </h3>
                    <nav className="space-y-2">
                      {services.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={cn(
                            'flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors',
                            pathname === item.href ? 'bg-primary/10' : ''
                          )}
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                          <span className="flex-1">{item.title}</span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </nav>
                  </div>

                  {/* Main Navigation */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">
                      メニュー
                    </h3>
                    <nav className="space-y-2">
                      {mainNav.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={cn(
                            'flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors',
                            pathname === item.href ? 'bg-primary/10' : ''
                          )}
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                          <span className="flex-1">{item.title}</span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { 
    title: string;
    icon: React.ElementType;
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-primary/10 focus:text-accent-foreground',
            className
          )}
          {...props}
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
  );
});
ListItem.displayName = 'ListItem';
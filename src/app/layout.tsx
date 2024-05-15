import { SideBar } from '@/entities/side-bar/ui';
import { poppins } from '@/shared/config/env';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body
                className={`${poppins.className} flex h-full min-h-screen w-full flex-row bg-background`}
            >
                <SideBar className="bg-red-700">
                    <div></div>
                </SideBar>
                <main className="w-full">{children}</main>
            </body>
        </html>
    );
}

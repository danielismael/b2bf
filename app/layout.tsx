import {Metadata} from "next";
import './globals.css'

export const metadata: Metadata = {
    title: process.env.TITLE_APP,
    description: process.env.DESCRIPTION_APP,
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    )
}
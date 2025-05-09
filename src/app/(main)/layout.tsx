import Navbar from "@/app/(main)/Navbar";

export default function Layout({children}:{children: React.ReactNode}) {
    return (
        <div className="flex min-h-screen flex-col ">
            <Navbar/>
            {children}
        </div>
    )
}
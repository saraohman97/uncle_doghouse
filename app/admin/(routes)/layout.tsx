import AdminNav from "./components/admin-nav";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-lg mx-auto">
      <AdminNav />
      {children}
    </div>
  );
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen flex bg-green-200">
        <div className="w-1/2 bg-green-300">portada</div>
        <div className="flex-1 bg-green-100">{children}</div>
      </div>
    </>
  );
}

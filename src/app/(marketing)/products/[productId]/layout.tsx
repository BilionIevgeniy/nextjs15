export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid red", padding: "1rem" }}>
      <h2>Product Layout</h2>
      {children}
    </div>
  );
}

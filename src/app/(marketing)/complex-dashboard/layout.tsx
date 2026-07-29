export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {users}
          {revenue}
        </div>
        <div className="flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    <div>{login}</div>
  );
}

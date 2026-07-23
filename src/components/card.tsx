export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-[100px] m-2.5 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] border border-[#ddd] flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

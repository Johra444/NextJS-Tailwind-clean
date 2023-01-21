export default function Header() {


  return (
    <header className="flex z-50 w-full h-14 backdrop-blur  bg-white/25 dark:bg-gris/30 sticky top-0">
      <div className="container max-w-screen-md mx-auto px-5 flex items-center relative">
        <div className="flex items-end">
            <p className="font-bold text-2xl mr-5">Johra</p>
            <p className="hover:underline px-3">Works</p>
            <p className="hover:underline px-3">Github</p>
        </div>
      </div>
    </header>
  );
}

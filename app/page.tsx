import { getCurrentUser } from "./action/getCurrentUser";
import { getAllYears } from "./action/handleYears";
import { MainPageSec } from "./component/MainPageSec";

export default async function Home() {
  const currentUser = await getCurrentUser()
  const allYears = await getAllYears()

  return (
    <div className="w-full relative min-h-[100vh] z-20 flex flex-col items-center justify-start ">
      <h3 className="text-6xl px-[10vw] text-blue-100/75 font-bold z-40 pt-32">Your personal Budget Planner</h3>
      <div className='absolute top-0 left-0 w-full h-[60vh] z-0  bg-gradient-to-b from-orange-600/75 via-blue-600  to-blue-200/25 blur-sm'></div>

      <MainPageSec currentUser = {currentUser} allYears={allYears} />
    </div>
  );
}

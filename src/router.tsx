import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Landing } from './pages/Landing/Landing';
import { Onboarding } from './pages/OnBoarding/Onboarding';
import { Register } from './pages/Register/Register';
import { SelectCover } from './components/SelectCover/SelectCover';
import { CoverRegister } from './components/CoverRegister/CoverRegister';
import { Drawing } from './pages/Drawing/Drawing';
import { DetailDiary } from './pages/DetailDiary/DetailDiary';
import { UserDiaryBoard } from './pages/UserDiaryBoard/UserDiaryBoard';
import { TotalDiary } from './pages/TotalDiary/TotalDiary';
import { Redirection } from './pages/Redirection/Redirection';
import { ResultDiary } from './pages/ResultDiary/ResultDiary';
import { SelectUserDiaryBoard } from './pages/SelectUserDiary/SelectUserDiary';
import { MobileView } from './pages/MobileView/MobileView';
import { EditDiary } from './pages/EditDiary/EditDiary';
import { Exhibition } from './pages/Exhibition/Exhibition';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exhibition" element={<Exhibition />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/auth" element={<Redirection />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/register" element={<Register />}>
        <Route path="" element={<SelectCover />} />
        <Route path="write" element={<CoverRegister />} />
      </Route>
      <Route path="/drawing/:diarybookid" element={<Drawing />} />
      <Route path="/diary/:diarybookid/:diaryid/edit" element={<EditDiary />} />
      <Route path="/detail" element={<DetailDiary />} />
      <Route path="/my/:id" element={<UserDiaryBoard />} />
      <Route path="/my/select/:id" element={<SelectUserDiaryBoard />} />
      <Route path="/diary/:diarybookid/:diaryid" element={<ResultDiary />} />
      <Route path="/diary/:diarybookid" element={<TotalDiary />} />
      <Route path="/:diarybookid/:diaryid/share" element={<MobileView />} />
    </Routes>
  );
}

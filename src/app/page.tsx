import Header from './components/Header';
import TaskList from './components/TaskList';

export default function Home() {
  return (
    <main className="h-screen">
      <Header />
      <TaskList />
    </main>
  );
}

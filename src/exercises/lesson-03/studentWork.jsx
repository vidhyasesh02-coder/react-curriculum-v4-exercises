//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Impport components here

import BugEffectLoop from './BugEffectLoop.jsx';
import BugMutatedState from './BugMutatedState.jsx';
import BugProps from './BugProps.jsx';

export default function StudentWork() {
  return (
    <div>
      <h1> "Lesson 3 - React State and Effects"</h1>

      <BugEffectLoop />

      <BugMutatedState />

      <BugProps />
    </div>
  );
}

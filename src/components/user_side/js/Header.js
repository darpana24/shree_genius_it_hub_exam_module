export default function Header({ time }) {
const m = String(Math.floor(time / 60)).padStart(2, "0");
const s = String(time % 60).padStart(2, "0");


return (
<header>
<h2>ProExam</h2>
<div className={time < 60 ? "timer warning" : "timer"}>
{m}:{s}
</div>
</header>
);
}
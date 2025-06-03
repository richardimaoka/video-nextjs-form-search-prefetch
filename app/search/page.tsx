import styles from "./page.module.css";

export default function Page() {
  return (
    <div>
      <form action="/search">
        <input type="text" name="area" />
        <button type="submit">search</button>
      </form>
    </div>
  );
}

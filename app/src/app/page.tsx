import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <span className={styles.eyebrow}>Hello there</span>
        <h1 className={styles.title}>Hi 👋</h1>
        <p className={styles.copy}>
          This lightweight Next.js starter is ready for you to make it your own.
          Customize the content, add routes, and deploy to Vercel in minutes.
        </p>
        <div className={styles.actions}>
          <a
            className={styles.primary}
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
          <a
            className={styles.secondary}
            href="https://vercel.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel Guides
          </a>
        </div>
      </main>
    </div>
  );
}

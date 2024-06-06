import { Link } from "./_components/Link/Link";
import { Page } from "./_components/Page/Page";
import { routes } from "./_navigation/routes";
import styles from "./_page-styles.module.css";

export default function IndexPage() {
  return (
    <Page title="Home Page">
      <p>
        This page is a home page in this boilerplate. You can use the links
        below to visit other pages with their own functionality.
      </p>
      <ul className={styles.links}>
        {routes.map(
          ({ path, title, icon }) =>
            title && (
              <li className={styles.linkItem} key={path}>
                <Link className={styles.link} href={path}>
                  {icon && <i className={styles.linkIcon}>{icon}</i>}
                  {title}
                </Link>
              </li>
            ),
        )}
      </ul>
    </Page>
  );
}

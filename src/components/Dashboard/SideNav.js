import { Link } from 'react-router-dom';
import * as ROUTES from '@constants/routes';
import {
  MdAnalytics,
  MdHome,
  MdPayment,
  MdQuestionAnswer,
} from 'react-icons/md';

export default function SideNav() {
  return (
    <div className="py-5 px-6 lg:pb-3 lg:pt-10">
      <ul className="flex flex-col gap-y-5">
        <li>
          <Link to={ROUTES.DASHBOARD}>
            <div className="flex gap-x-3">
              <MdHome className="self-center fill-current dark:text-white" />
              <span className="text flex-grow">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.DASHBOARD_PAYMENTS}>
            <div className="flex gap-x-3">
              <MdPayment className="self-center fill-current dark:text-white" />
              <span className="text flex-grow">Payment</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.DASHBOARD_REPORTS}>
            <div className="flex gap-x-3">
              <MdAnalytics className="self-center fill-current dark:text-white" />
              <span className="text flex-grow">Reports</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.DASHBOARD_FAQ}>
            <div className="flex gap-x-3">
              <MdQuestionAnswer className="self-center fill-current dark:text-white" />
              <span className="text flex-grow">FAQS</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

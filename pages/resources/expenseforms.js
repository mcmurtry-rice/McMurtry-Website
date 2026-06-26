import Header from '../../components/general/header';
import SiteNavbar from '../../components/general/siteNavbar';

import SiteFooter from '../../components/general/siteFooter';
import ExpenseForms from '../../components/resources/expenseforms/expenseforms';
import '../../components/general/page.css'

const ExpenseFormsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        
        <ExpenseForms />
        <SiteFooter />
    </div>
)

export default ExpenseFormsPage;

import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Header from "./../header//Header"


export { NavLink };

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, exact, children, setNavbar, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' active';
    }

    return (
        <>
            {
                !setNavbar ?         
                    <Link href={href}>
                        <a {...props}>
                        <Header fontSize={24} fontWeight="medium">
                            {children}
                        </Header>
                        </a>
                    </Link> :
                    <div className="slider-list-item">
                        <Link href={href}>
                        <a {...props}>
                            <Header onClick={() => setNavbar(false)} fontWeight="medium" fontSize={24}>
                                {children}
                            </Header>
                        </a>
                        </Link>
                    </div>
            }
        </>

    )
}
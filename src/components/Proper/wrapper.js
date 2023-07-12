import styles from './Propper.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default wrapper;

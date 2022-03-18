import PropTypes from 'prop-types'

const Section = ({ title = '', children }) => (
  <section className="pb-16">
    {title && <h3 className="mb-4 ml-4 text-base tracking-wide">{title}</h3>}
    {children}
  </section>
)

Section.propTypes = { title: PropTypes.string }

export default Section

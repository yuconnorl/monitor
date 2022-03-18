import PropTypes from 'prop-types'

const OverviewCard = ({ status, number, description }) => (
  <>
    <div className="flex flex-col justify-between w-40 h-40 py-5 pl-6 bg-white dark:bg-dark-medium rounded-3xl">
      <div className="text-lg">{status}</div>
      <div className="flex flex-col">
        <div className="text-5xl font-RobotoMedium">{number}</div>
        <div className="text-sm tracking-wide font-RobotoLight">{description}</div>
      </div>
    </div>
  </>
)

OverviewCard.propTypes = {
  status: PropTypes.string,
  number: PropTypes.number,
  description: PropTypes.string,
}

export default OverviewCard

const Footer = () => (
  <footer className="relative flex items-center w-full py-6 border-t border-Platinum dark:border-dark-light">
    <div className="text-sm tracking-widest font-RobotoLight">
      <p>
        2021 Version monitor version:
        {process.env.REACT_APP_TAG_VERSION || 'DEV MODE'}
      </p>
    </div>
  </footer>
)

export default Footer

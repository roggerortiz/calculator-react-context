const Icon = ({ icon }) => {
   if (!icon) return null

   return <i className={ `fa fa-${icon}` }></i>
}

export default Icon
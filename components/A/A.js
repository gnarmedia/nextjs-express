import Link from 'next/link'

const A = ({ href, children }) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
)

export default A
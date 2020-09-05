import CodepenIcon from 'components/Icons/CodepenIcon'
import GithubIcon from 'components/Icons/GithubIcon'
import LinkedinIcon from 'components/Icons/LinkedinIcon'
import TwitterIcon from 'components/Icons/TwitterIcon'
import { colors, breakpoints } from 'styles/theme'
import useIconSize from 'hooks/useIconSize'

export default function SocialNetworks() {
  const size = useIconSize({ initialSize: 18 })
  return (
    <>
      <section>
        <a
          href="https://codepen.io/cterrasid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodepenIcon fill={colors.greyEggplant} height={size} width={size} />
        </a>
        <a
          href="https://github.com/cterrasid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon fill={colors.greyEggplant} height={size} width={size} />
        </a>
        <a
          href="https://www.linkedin.com/in/clarette-terrasi-diaz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon fill={colors.greyEggplant} height={size} width={size} />
        </a>
        <a
          href="https://twitter.com/clarettetedi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fill={colors.greyEggplant} height={size} width={size} />
        </a>
      </section>
      <style jsx>{`
        section {
          align-self: center;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 10px;
          width: 55%;
        }

        a {
          cursor: pointer;
        }

        @media all and (min-width: ${breakpoints.tablet}px) {
          section {
            width: 35%;
          }
        }

        @media all and (min-width: ${breakpoints.tablet}px) {
          section {
            align-self: flex-end;
            width: 30%;
          }
        }
      `}</style>
    </>
  )
}

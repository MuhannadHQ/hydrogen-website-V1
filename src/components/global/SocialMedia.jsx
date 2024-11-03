import { Andriod } from "assets/icons/Andriod"
import { Apple } from "assets/icons/Apple"
import { Instagram } from "assets/icons/Instagram"
import { Twitter } from "assets/icons/Twitter"
import { Whattsapp } from "assets/icons/Whattsapp"

export const SocialMedia = ({onlySocial, onlyApps}) =>
{
  return (
    <ul className="flex gap-3 items-center justify-center flex-row-reverse">
{!onlyApps && <>
      <li><a target="_blank" rel="noopener noreferrer"
             href="https://twitter.com/hydrojeen_mena"><Twitter/></a></li>
      <li><a target="_blank" rel="noopener noreferrer"
             href="https://www.instagram.com/hydrojeen_mena/"><Instagram/></a>
      </li>
      {!onlySocial && <li><a
        target="_blank" rel="noopener noreferrer"
        href="https://api.whatsapp.com/send/?phone=%2B966504281941&text&app_absent=0"><Whattsapp
        color={ "#000" }/></a>
      </li> }

      </>
}
      {onlySocial && <>
        <li><a target="_blank" rel="noopener noreferrer"
               href="https://apps.apple.com/sa/app/%D9%87%D9%8A%D8%AF%D8%B1%D9%88%D8%AC%D9%8A%D9%86/id1546619911"><Apple/></a>
        </li>
        <li><a
          target="_blank" rel="noopener noreferrer"
          href="https://play.google.com/store/apps/details?id=com.iot.hydrojeen"><Andriod/></a>
        </li>

      </> }
    </ul>
  )
}
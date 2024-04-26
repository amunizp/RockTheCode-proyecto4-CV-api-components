import './socials.css'
import * as MastodonTimeline from '@idotj/mastodon-embed-timeline'

export const socials = (nodoParent, url, userID, profile, numPosts) => {
  const socialContainer = document.createElement('div')
  socialContainer.classList.add('flex-container', 'row', 'mt-container')
  socialContainer.id = 'mt-container'
  nodoParent.appendChild(socialContainer)
  const feedElement = document.createElement('div')
  feedElement.classList.add('flex-container', 'row', 'mt-body', 'align-start')
  feedElement.setAttribute('root', 'feed')
  feedElement.innerHTML = `  
  <div class="mt-loading-spinner"></div>
`
  socialContainer.appendChild(feedElement)
  window.addEventListener('load', () => {
    const myTimeline = new MastodonTimeline.Init({
      instanceUrl: url,
      timelineType: 'profile',
      userId: userID,
      profileName: profile,
      insistSearchContainer: true,
      // Maximum number of posts to request to the server
      // Default: "20"
      maxNbPostFetch: numPosts,
      // Maximum number of posts to show in the timeline
      // Default: "20"
      maxNbPostShow: numPosts,
      // Hide unlisted posts
      // Default: false (don't hide)
      hideUnlisted: false,
      // Hide boosted posts
      // Default: false (don't hide)
      hideReblog: true
    })
  })
}

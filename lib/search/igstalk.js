const ig = require("instatouch");
const Axios = require("axios");
const cheerio = require("cheerio");
const cfg = require("./config");

const sesid = "14657018766%3AMeGdfyO2zxSD8Q%3A4"

function getUser(username) {
    return new Promise((resolve, reject) => {
        try {
            Axios.get('https://www.instagram.com/' + username + '/?__a=1', {
                headers: {
                    Cookie: `sessionid=${sesid}`
                }
            }).then(({ data }) => {
                const user = data.graphql.user
                console.log(data)
                console.log(user.biography)
                resolve({
                    // link: URL.replace('/?__a=1', ''),
                    id: user.id,
                    biography: user.biography,
                    subscribersCount: user.edge_followed_by.count,
                    subscribtions: user.edge_follow.count,
                    fullName: user.full_name,
                    highlightCount: user.highlight_reel_count,
                    isBusinessAccount: user.is_business_account,
                    isRecentUser: user.is_joined_recently,
                    accountCategory: user.business_category_name,
                    linkedFacebookPage: user.connected_fb_page,
                    isPrivate: user.is_private,
                    isVerified: user.is_verified,
                    profilePic: user.profile_pic_url,
                    profilePicHD: user.profile_pic_url_hd,
                    username: user.username,
                    postsCount: user.edge_owner_to_timeline_media.count,
                    posts: user.edge_owner_to_timeline_media.edges.map(edge => {
                        let hasCaption = edge.node.edge_media_to_caption.edges[0];
                        return {
                        id: edge.node.id,
                        shortCode: edge.node.shortcode,
                        url: `https://www.instagram.com/p/${edge.node.shortcode}/`,
                        dimensions: edge.node.dimensions,
                        imageUrl: edge.node.display_url,
                        isVideo: edge.node.is_video,
                        caption: hasCaption ? hasCaption.node.text : '',
                        commentsCount: edge.node.edge_media_to_comment.count,
                        commentsDisabled: edge.node.comments_disabled,
                        timestamp: edge.node.taken_at_timestamp,
                        likesCount: edge.node.edge_liked_by.count,
                        location: edge.node.location,
                        children: edge.node.edge_sidecar_to_children ? edge.node.edge_sidecar_to_children.edges.map(edge => {
                            return {
                            id: edge.node.id,
                            shortCode: edge.node.shortcode,
                            dimensions: edge.node.dimensions,
                            imageUrl: edge.node.display_url,
                            isVideo: edge.node.is_video,
                                }
                            }) : []
                        }
                    }) || []
                });
            }).catch(() => resolve({ status: 404 }))
        } catch (e) {
            console.log(e)
        }
    })
}

module.exports = getUser.bind();
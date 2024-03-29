// ==UserScript==
// @name         HLTV dark theme
// @version      0.4
// @description  Apply a real dark theme for HLTV.org instead of the ugly blue theme.
// @run-at         document-start
// @match        https://www.hltv.org/*
// @icon         https://www.hltv.org/img/static/favicon/favicon-32x32.png
// @grant        none
// ==/UserScript==
function addGlobalStyle() {
 var head, style,test;
    head = document.getElementsByTagName('head')[0];
   test= document.querySelector('.hltv-logo-container');
    if (!test) { setTimeout(addGlobalStyle, 10)}
     if (test) {
    style = document.createElement('style');
    style.type = 'text/css';
    var customStyles = `
    /* Your custom styles go here */
  .bg{display: none !important;}

  .kgN8P9bvyb2EqDJR{display: none !important;}
  .a-reset.thunderpick-firstcol-box.layout-1{display: none !important;}
 .horizontal-widget.melbet{display: none !important;}
 .group-name.table-header{background-color: #313131 !important;}
 .text-ellipsis.team{background-color: #313131 !important;}
  .matchover.star2-filter.match.teambox{background-color: #313131 !important;}
.no-week{background-color: #313131 !important;}
.text-ellipsis.past-matches-team{background-color: #313131 !important;}
.past-matches-map{background-color: #313131 !important;}
.map-stats-infobox-header{background-color: #313131 !important;}
.active.navItem{background-color: #313131 !important;}
.ranking-open-region-selector.inactive.navItem{background-color: #313131 !important;}
.open.region-selector{background-color: #313131 !important;}
.ranking-header{background-color: #313131 !important;}
a.sidebar-single-line-item:nth-of-type(n){background-color: #313131 !important;}
.tabs-left{background-color: #313131 !important;}
.stats-sub-navigation-simple-filter-map{background-color: #313131 !important;}
.stats-sub-navigation-simple-filter-matchtype{background-color: #313131 !important;}
.stats-sub-navigation-simple-filter-time{background-color: #313131 !important;}
.stats-quick-navigation-container{background-color: #313131 !important;}
.stats-table-row{background-color: #313131 !important;}
.factor-team{background-color: #313131 !important;}
.gtSmartphone-only.statsDetail{background-color: #313131 !important;}
.gtSmartphone-only.center{background-color: #313131 !important;}
.stats-table{background-color: #313131 !important;}
.empty-box{background-color: #313131 !important;}
a.stats-quick-navigation:nth-of-type(n){background-color: #313131 !important;}
.playerColSmall{background-color: #313131 !important;}
.gtSmartphone-only.mapsCol{background-color: #313131 !important;}
.tbody {background-color: #313131 !important;}
.clearfix.padded-content{background-color: #313131 !important;}
.playerCol{background-color: #313131 !important;}
.teamCol{background-color: #313131 !important;}
.bgPadding .bg-enabler-child.right {
    right: 0 !important;
}
.guide-section{background-color: #313131 !important;}
.scroll-container {background-image: none !important;}
.live .matches-container .active{background-image: none !important;}
.live .matches-container .match{background-image: none !important;padding:0px 0px !important;}
td.no-matches.event_7527.guide-day:nth-of-type(n){background-color: #313131 !important;}
.match-filter-popup-description{background-color: #313131 !important;}
.match-filter-popup-block{background-color: #313131 !important;}
.search-typeahead.padded-content{background-color: #313131 !important;}
.tt-input.filter-player-input{background-color: #313131 !important;}
.filter-column-map-count-con{background-color: #313131 !important;}
.filter-column-min-map-count-con-con{background-color: #313131 !important;}
.padded-content{background-color: #313131 !important;}
input.filter-date:nth-of-type(n){background-color: #313131 !important;}
.filter-age-input{background-color: #313131 !important;}
.filter-column-min-map-count-input{background-color: #313131 !important;}
.bNav{background-color: #313131 !important;}
.statsDetail{background-color: #313131 !important;}
div.map-stats-infobox-maps:nth-of-type(n){background-color: #313131 !important;}
  .past-matches-headline{background-color: #313131 !important;}
    .settings-row{background-color: #313131 !important;}
 .navbar .user-wrap .navsearchicon  {background-color: #292929 !important;}
  .navbar .desktop-mode-con .toggleDesktopMode {background-color: #313131 !important;}
  .match-sidebar .small-event-box-con {background-color: #313131 !important;}
 .match-sidebar .otherMatch {background-color: #313131 !important;}
.dropdown-menu{background-color: #313131 !important;}
.nav-item:hover{background-color: #C7162D !important;}
.tt-input.navsearchinput{background-color: #313131 !important;}
.main-sidebar-container {display: none !important;}
.narrow.right.bg-sidebar {display: none !important;}
.a-reset.ggbe-firstcol-box{display: none !important;}
.dropdown-arrow{display: none !important;}
.dropdown-arrow2{display: none !important;}
.uSrGQNfoxo{display: none !important;}
.a-reset.bitskins-col-box.bitskins{display: none !important;}
.column-euvSWYMDm4JzUCnc-box{display: none !important;}
.middle-container{display: none !important;}
.button.last-comment-button.forum-action-button{background-color: #313131;}
.bgPadding{max-width: 100%;}
.promode-disabled{background-color: #313131!important;}
.standard-box {box-shadow: 0 1px 1px 0 rgba(0,0,0,0.5);background-color: #353535;}
.forum .forum-middle {color: #d0d0d0;font-family: arial;}
.index .newsline:hover {background-color: #525252;}
.index .newsline+.newsline {border-top: 1px solid #3c3b3b;}
.index .newsline {background: #2f2f2f;}
.teambox .middleExtra {font-size: 12px;font-family: 'verdana';}
.activitylist .activity:hover {background-color: #C7162D;}
.navbar .navmatches{border-right: 1px solid #424242;}
.rightCol .hotmatch-box {display: block;box-shadow: 0 1px 1px 0 rgba(0,0,0,.5);background-color: #353535 ;}
.right2Col .col-box-con, .rightCol .col-box-con { background-color: #333333;}
.index .newstext {color: #bbbbbb;}
.reply-box{background-color: #404142 !important;}
.textarea.width100{background-color: #404142;color: #bebebe;}
.width100{background-color: #404142 !important;color: #bebebe  !important;}
.other-user.conversation-message.padding{background-color: #333333;}
.this-user.conversation-message.padding{background-color: #333333;}
.selected.show-spoilers.toggleSpoilers{background-color: #333333!important;}
.toggle-off.toggleSetting{background-color: #333333!important;}
.main-content-box{background-color: #333333!important;}
.toggle-on.toggleSetting{background-color: #333333!important;}
.selected.toggle-off.toggleSetting{background-color: #333333!important;}
.hide-spoilers.toggleSpoilers{background-color: #333333!important;}
.userTheme-day.toggleUserTheme{background-color: #333333!important;}
.selected.userTheme-night.toggleUserTheme{background-color: #333333!important;}
.userTheme-auto.toggleUserTheme{background-color: #333333!important;}
.navbar .navresults{border-right: 1px solid #3c3c3c;}
.navbar .navgalleries {border-right: 1px solid #3c3c3c;}
.navbar .navnews {  border-right: 1px solid #3e3e3e;}
.navbar { background-color: #292929;}
.navbar .navstats {border-right: 1px solid #3c3c3c;}
.index .newsline+.newsline { border-top: 1px solid #3c3c3c;}
.activitylist .activity { padding: 0 5px;height: 21px;}
.col-box {display: block;border-top: 1px solid rgba(66, 66, 66, 0.32);}
.bgPadding {background-color: #252525;}
.leftCol .col-box-con {background-color: rgb(51, 51, 51);}
.button {background-color: #525252;}
.rightCol .streamer {padding: 3px 5px;height: 18px;}
.navbar .navsearchinput {height: 27px;box-sizing: border-box;width: 100%;padding-right: 27px;border: 1px solid #535454;padding-left: 5px;background-color: #444444;color: #929a9e;}
.navbar .navpopup {background-color: #333333;border: 1px solid #5a5a5a;}
.navbar .nav-popup-elm {border-top: 1px solid #3c3c3c;padding: 5px 10px;background-color: #333333;}
.button-more {background-color: #333333;}
.navbar .navborder:before {border-left: 1px solid #3c3c3c;}
.navbar .navsearchborder {border-left: 1px solid #3c3c3c;}
.navbar .navevents {    border-right: 1px solid #3e3e3e;}


.error-message-box.standard-box .thread-message{background-color: #313131;}
.button.sub-button.forum-action-button{background-color: #313131;}
.forumthread .forum-middle {padding: 10px;white-space: pre-line;font-size: 13px;color: #c2c2c2;background-color: #383838;}
.post .standard-box {box-shadow: 0 1px 1px 0 rgba(0,0,0,.5);background-color: #383838;}
.forumthread .forum-topbar {margin-top: 5px;border-bottom: 1px solid #575757;}
.forum .forum-topbar {background-color: #313131;}
.forumthread .forum-bottombar {height: 25px!important;border-top: 1px solid #575757;background-color: #383838;}
.forum .forum-bottombar {border-top: 1px solid #464646;}
.report-button:hover {background-color: #6f6f70;}
.forum .report-button {color: #808080;}
.footer-shop.footer-section .footer-section-header{background-color: #2e2e2e;}
.footer-shop.footer-section .footer-section-subtext{background-color: #2e2e2e;}
.footer-app.footer-section .footer-section-header{background-color: #2e2e2e;}
.footer-app.footer-section .footer-section-subtext{background-color: #2e2e2e;}
.button.signup-button{background-color: #808080!important;}
.forum .report-button {border-left: 1px solid #5f5e5e;}
.forum .reply-button {border-left: 1px solid #5f5e5e;color: #848484!important;}
.forum .forum-topbar {border-bottom: 1px solid #5f5f5f;}
.forum .threading:before {border-bottom: 1px solid #535353;border-left: 1px solid #535353;}
.forum .threading {border-left: 1px solid #535353;}
.forum .forum-middle {color: #c2c2c2;}
.forum .newreply-textarea {background-color: #404142;color: #bebebe;}
.forum .newreply-topbar { border-bottom: 1px solid #575757;background-color: #323232;}
.button:hover {color: #b9bdbf!important;background-color: #5f5f5f;}
.button {background-color: #424242;}
.footer {background-color: #2e2e2e;border-top: 1px solid #5b5b5b;}
.forumthread .report-button {border-left: 1px solid #4b4b4b;}
.forumthread .report-button {color: #707070;}
.forumthread .reply-button:hover, .forumthread .report-button:hover {background-color: #616263;}
.forumthread .forum-topbar {background-color: #313131;}
.standard-box {box-shadow: 0 1px 1px 0 rgba(0,0,0,.5);background-color: #4a4a4a;}
.forumthread .edit-button, .forumthread .report-button, .forumthread .reply-button {border-left: 1px solid #5b5e61;}
.reply-button .a-default {color:#848484;}
.forum .forum-topbar {border-bottom: 1px solid #292929;}
.notification-popup-elm:nth-of-type(2n){background-color: #333333;}
.notification-popup-elm:nth-of-type(odd){background-color: #333333;}
.standard-box.small-event.a-reset:nth-of-type(2n){background-color: #333333;}
.standard-box.small-event.a-reset:nth-of-type(odd){background-color: #333333;}
.content.standard-box{background-color: #333333!important;}
.text-ellipsis.tab:nth-of-type(2n){background-color: #333333;}
.text-ellipsis.tab:nth-of-type(odd){background-color: #333333;}
.big-event-info{background-color: #333333;}
.inbox-popup-elm:nth-of-type(2n){background-color: #333333;}
.inbox-popup-elm:nth-of-type(odd){background-color: #333333;}
.no-promode.forum .thread-message{background-color: #333333;}
/* SMALL STUFF*/


.playerProfile .moreButton:hover, .teamProfile .moreButton:hover {background-color: #696969;}
.playerProfile .moreButton, .teamProfile .moreButton {background-color: #4c4c4c;}
.teamProfile .upcoming-matches-holder .standard-box:hover {background-color: #656565!important;}
.playerProfile .cell:nth-child(even), .teamProfile .cell:nth-child(even) {background-color: #424242;}
.playerProfile .cell, .teamProfile .cell { border-left: 1px solid #565656;}
.playerProfile .cell, .teamProfile .cell {border-top: 1px solid #57595a;}
.col-box:hover {background-color: #4a4a4a;}
.rightCol .streamer:hover {background-color: #4a4a4a;}
.rightCol .result-box:hover {background-color: #4a4a4a;}
.matches .upcoming-matches .upcoming-match:nth-child(odd) { background-color: #333333;}
.matches .upcoming-matches .upcoming-match:hover { background-color: #71777d!important;}
.stats-section .top-x-box {background: #404040;}
.forumlist .sectionheader {background-color: #383838;}
.forumlist .forumContainer {border-top: 1px solid #404040;}
.event-page .teams-attending .team-box:hover {background-color: #292929;}
.event-page .news .item:not(:last-child) {border-bottom: 1px solid #383838;}
.event-page .news {background-color: #4e4e4e;}
.event-page .placements .placement {background-color: #2b2b2b;}
.event-page .news .item:hover {background-color: #717171;}
.sidebar-con .sidebar-second-level {background: #4a4a4a;}
.sidebar-con .sidebar-single-line-item:not(.selected) {border-top: 1px dotted #383838;}

/* SMALL STUFF*/

.match-page .streams .stream-box {background-color: #4a4a4a;}
.match-page .highlights .highlight {background-color: #4a4a4a;}
.match-page .matchstats tr:nth-child(odd) {background-color: #3c3c3c;}
.match-page .matchstats tr:nth-child(2n) {background-color: #4e4e4e;}
.match-page .box-headline {background-color: #3a3a3a;}
.match-page .player-of-the-match .facts tr:nth-child(2n) {background-color: #333333;}
.match-page .past-matches .matches tr:nth-child(2n) {background-color: #333333;}
.match-sidebar .notify-button-con {background-color: #424242;}

.match-page .maps .results {background-color: #4a4a4a;}
.sidebar-con .sidebar-third-level {background: #3c3c3c;}
.sidebar-con .sidebar-single-line-item:not(.selected) {border-top: 1px dotted #525252;}
.navbar .navforums {border-right: 1px solid #3c3c3c;}
.navbar .navnews { border-left: 1px solid #3c3c3c;}
.pro-cmnt-hidden {color: #c38989;}
.sidebar-con .sidebar-first-level {background: #333333;}
.filter-column-con .filter-column-header {background-color: #4a4a4a;}
.filter-column-con .filter-column-header.open {border-bottom: 1px solid #565656!important;}
.results .result-con:nth-child(even) {background-color: #414141;}
.results .result-con:nth-child(odd) {background-color: #414141;}
.results-all.results-holder	{background-color: #414141;}
.tab-content-holder{background-color: #414141!important;}
.active.text-ellipsis.tab{background-color: #414141!important;}
.sidebar-headline{background-color: #414141!important;}
.results .result-con {background-color: #353535!important;}
.pagination-component .pagination-prev, .pagination-component .pagination-next {background-color: #484848;}
.sidebar-con .sidebar-fifth-level {background: #3c3c3c;border-top: 1px solid #565656;}
.forumthreads .tablerow {border-top: 1px solid #3e3e3e;}
.forumthreads .tableheader {background-color: #3c3c3c;}
.forum .time {font-size: 11px;font-family: arial;}
.forum .threading::before {border-bottom: 1px solid #535353;border-left: 1px solid #535353;}
.match-page .player-of-the-match .facts tr:nth-child(2n) {background-color: #333333;}
.match-page .player-of-the-match .facts tr:nth-child(even) {border-top: 1px solid #313131;border-bottom: 1px solid #2b2b2b;}
.match-page .box-headline {border-bottom: 1px solid #525252;}
.match-page .head-to-head-listing .alt {background-color: #4a4a4a;}
.userprofile .posts .post {border-bottom: 1px solid #3a3a3a;}
.userprofile .stats tr:not(:last-child) {border-bottom: 1px solid #3a3a3a;}
.forumthread .topic {color:#2b6fa4;}
.forumthreads .tablerow:hover {background-color: #6d6d6d;}
.ranking .ranked-team .header {background-color: rgba(14, 14, 14, 0.8);}
.ranking .ranked-team .lineup-con {border-top: 1px solid #353535;}
.ranking .ranked-team .lineup {border-bottom: 1px solid #353535;}
.ranking .ranked-team .bg-holder {background-color: rgba(31, 31, 31, 0.8);}
.ranking .ranked-team .header:hover {background-color: #3a3a3a;}
.match-page .teamsBox .team .team1-gradient {background: linear-gradient(90deg,rgba(45,56,68,0) 50%,#232323 100%);}
.match-page .teamsBox .team .team2-gradient {background: linear-gradient(-90deg,rgba(45,56,68,0) 50%,#232323 100%);}
.navbar .nav-popup-elm:hover {background-color: #484848;}
.navbar .nav-popup-elm .timezoneSelector {background-color: #404040;}
.match-sidebar a:hover {background: #585858;}
.navbell{z-index: 99 !important;}
`;
    style.innerHTML = customStyles;
    head.appendChild(style);
var profileLink = document.querySelector('#popupsettings .nav-popup-header .right');
var newLink = profileLink.cloneNode(true);
newLink.className = "nav-link";
var nav = document.querySelector('.user-wrap');
                    var signout = document.createElement("a");
         signout.href = "https://www.hltv.org/logout"
        signout.className = "fa fa-sign-out";
         signout.title="Sign Out";
         if(profileLink.textContent != "Expand"){
         nav.appendChild(newLink);}
        nav.appendChild(signout);
         }
}
addGlobalStyle();

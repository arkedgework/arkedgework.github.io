(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-about.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>About ARKEDGE</h1>\n                    <h6>We value loyalty, creativity and productivity with results...</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"about-tab inner-nav-tab\">\n    <div class=\"tab-navigation\">\n        <div class=\"col-sm-12\">\n            <div class=\"container\">\n                <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n                    <li [ngbNavItem]=\"1\">\n                        <a ngbNavLink>About Us</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"note-desc\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text\">\n                                                ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\n\n\n                                            </p>\n                                            <p>\n                                                Over the years we have built up a solid team of software professionals that come from different backgrounds and enlarge the creative potential of ARKEDGE. The competence that they offer contains a wide range of custom programming skills including the latest and most effective development in Microsoft technologies.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                            <section class=\"about-key-diff\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                                            <h1>Key Differentiators</h1>\n                                            <ul>\n                                                <li *ngFor=\"let key of keydiff\">\n                                                    {{key.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-md-4 col-lg-4 col-sm-12\">\n                                            <img src=\"assets/images/about-support.png\">\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </section>\n\n\n                            <section class=\"about-info\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-8 col-md-8 col-sm-12 v-align\">\n                                            <p>Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions and technology progress. To streamline your business, we address those issues with our Internet and Intranet solutions. In addition we also provide you web / animation design services.<br><br>\n                                                In addition ARKEDGE specializes in a bunch of IT training services for corporate, institutions and individuals. We do organize corporate training programs for industry officials who find it difficult to mingle their expertise with latest IT tools and IT based technology. We do impart IT training for graduates in multiple discipline including computer application, hard core technology, business administration, and individuals who are in the mid of their management education.\n\n\n                                            </p>\n\n                                        </div>\n                                        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                                            <img src=\"assets/images/about-info.jpg\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n\n                            <section class=\"section-info\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p>\n                                                Along with the engineering solution and services ARKEDGE is specialized\n                                                in helpings client\n                                                organizations identify, evaluate, and recruit executives at various\n                                                levels. It comprises of\n                                                well-qualified group of people having faith in camaraderie and serving\n                                                the industry to find the\n                                                solutions to various key areas as Staffing, Executive Search and IT\n                                                training.\n                                                <br><br>\n                                                In addition ARKEDGE specializes in a bunch of IT training services for\n                                                corporate, institutions and\n                                                individuals. We do organize corporate training programs for industry\n                                                officials who find it difficult\n                                                to mingle their expertise with latest IT tools and IT based technology.\n                                                We do impart IT training for\n                                                graduates in multiple discipline including computer application, hard\n                                                core technology, business\n                                                administration, and individuals who are in the mid of their management\n                                                education.\n                                            </p>\n                                        </div>\n                                        <div *ngFor=\"let item of solution\"\n                                            class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\n                                            <div class=\"panel\" (click)=\"getUrl(1, item.titlelink);\">\n                                                <div class=\"panel-front {{item.color}}\">\n                                                    <div class=\"panel-heading\">\n                                                        <div class=\"icon-circle circle-bg\">\n                                                            <i class=\"icon icon-medium\">\n                                                                <svg focusable=\"false\">\n                                                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                                                </svg>\n                                                            </i>\n                                                        </div>\n                                                        <h5>{{item.title}}</h5>\n                                                    </div>\n                                                    <div class=\"panel-body\">\n\n                                                        <p *ngFor=\"let data of item.list\">{{data.name}}</p>\n                                                    </div>\n                                                </div>\n                                                <div class=\"panel-back {{item.color}}\">\n                                                    <h5>{{item.title}}</h5>\n                                                    <p>{{item.description}}</p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"2\">\n                        <a ngbNavLink>Why ARKEDGE?</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <p class=\"running-text\">\n                                            ARKEDGE is a rapidly growing professionally managed organization with competent and\n                                            qualified brass at the helm of the affairs.\n                                        </p>\n                                        <p>\n                                            from different backgrounds\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                           \n                        <section class=\"why-us\">\n                                <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <ul>\n                                            <li *ngFor=\"let list of bulletPoint; index as i\">\n                                                    {{list.list}}\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                        <div class=\"wa-info\">\n                                        <h2>Vision</h2>\n                                        <p>\n                                            ARKEDGE was founded with a philosophy that every organization has its own unique set of people, processes, technology, culture, values, skills & vision. We are committed to understand these unique parameters of organizations & customizing our solutions to suit them.\n                                            <br><br>\n                                            We aim for long term relationship that brings in immense satisfaction and prosperity to both ends. We value loyalty, creativity and productivity with results.\n                                        </p>\n                                    </div>\n                                    </div>\n                                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                        <div class=\"wa-info\">\n                                        <h2>Mission</h2>\n                                        <p>\n                                            Our endeavor is to achieve total customer satisfaction, by providing quality products and services, using simplifying technologies and continually improving processes, through competent employees and business partners.\n                                            <br><br>\n                                            To be the preferred choice of our customers, employees and partners\n                                        </p>\n                                    </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                    <h1>\n                                        Centers of Excellence\n                                    </h1>\n                                    <p>\n                                        We have structured our business operations into six dedicated practice areas. Each practice area operates as a Center of Excellence (CoE).\n                                    </p>\n                                    <h6>\n                                        Key Differentiators\n                                    </h6>\n                                    \n\n                                        <ul>\n                                            <li *ngFor=\"let list of bulletPoint_2; index as i\">\n                                                    {{list.list}}\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                    <h1>\n                                        Value Initiative\n                                    </h1>\n                                    <p>\n                                        A commitment to quality, learning from the previous successes and mistakes, setting higher benchmarks and generate productive results.\n                                    </p>\n\n                                    <h6>\n                                        Exceeding customer expectation\n                                    </h6>\n                                    <p>\n                                        Treating customers as lifetime assets and striving to integrate and partner with customers in creating value.\n                                     </p>\n\n                                     <h6>\n                                        Employee Empowerment\n                                    </h6>\n                                    <p>\n                                        Empowering employees at all levels and motivating them to challenge the status quo, to set and achieve ambitious goals for themselves and the company.\n                                     </p>\n\n                                     <h6>\n                                        Joy at Work\n                                    </h6>\n                                    <p>\n                                        Providing employees a conducive, challenging environment where creativity is valued, teamwork is encouraged, performances are rewarded and success celebrated.\n                                     </p>\n\n                                     <h6>\n                                        Integrity\n                                    </h6>\n                                    <p>\n                                        A commitment to be open, frank, loyal and ethical in our interactions with all our stakeholders.\n                                     </p>\n                                </div>\n                            </div>\n                            </div>\n                            </section>\n\n                        </ng-template>\n                    </li>\n\n                   <li [ngbNavItem]=\"3\">\n                        <a ngbNavLink>Partner</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <p class=\"running-text\">\n                                            ARKEDGE is a rapidly growing professionally managed organization with competent and\n                                            qualified brass at the helm of the affairs.\n                                        </p>\n                                        <p>\n                                            from different backgrounds\n                                        </p>\n                                    </div>\n                                </div>\n\n                                <section class=\"partner-info\">\n                                    <div class=\"container\">\n                                        <div class=\"row\">\n                                            <div *ngFor=\"let data of partnerInfo; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                                                <div class=\"panel\" (click)=\"open(content)\">\n                                                   <div class=\"panel-body\">\n                                                       <a><img src=\"assets/images/logo{{i+1}}.png\"></a>\n                                                    </div>\n                                                 </div>\n                                                 <ng-template #content let-modal>\n                                                    <div class=\"modal-header\">\n                                                        <h4 class=\"modal-title\">{{data.title}}</h4>\n                                                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                                                        <span aria-hidden=\"true\">&times;</span>\n                                                    </button>\n                                                    </div>\n                                                <div class=\"modal-body\">\n                                                    \n                                                    <div class=\"panel\">\n                                                        <div class=\"panel-header\">\n                                                            <img src=\"assets/images/logo{{i+1}}.png\">\n                                                         </div>\n                                                        <div class=\"panel-body\">\n                                                            <p>{{data.desc}}</p>\n                                                            <a href=\"{{data.url}}\" target=\"_blank\">{{data.url}}</a>\n                                                         </div>\n                                                    </div>\n                                                </div>\n                                              </ng-template>\n                                             </div>\n                                        </div>\n                                    </div>\n                                </section>\n                             </div>\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"4\">\n                        <a ngbNavLink>Leadership</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12 col-sm-12 col-md-10 div-center center\">\n                                        <p class=\"running-text\">\n                                            A great leader's courage to fulfill his vision comes from passion, not position.\n                                        </p>\n                                        <p>\n                                            At ARKEDGE, we all aspire to be tomorrow's leader. Individually we are pathfinders and collectively we are a doer (achiever).\n                                            <br>\n                                            We are passionate about everything that we do and so do it the best way.\n                                        </p>\n                                        <p>\n                                            We are quite an experienced and energetic team of enthusiastic people covering Generation X to Generation Z who are determined to design, manage, build and maintain high-quality solutions for a wide range of businesses and individuals.\n                                            <br>\nOur highly qualified and trained team comprises of an energetic bunch covering all age groups with a common determination: to provide our clients with world-class advanced solutions and products\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <section class=\"leader-ship first-child\">\n                                <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12\">\n                                        <!-- <span class=\"img-container\">\n                                            <img src=\"assets/images/leadership/leader-{{i+1}}.jpg\" align=\"left\">\n                                        </span> -->\n                                        <p>\n                                            <img class=\"div-3\" src=\"assets/images/leadership/person3.png\" align=\"left\">\n                                           <span class=\"title-name\">Same Martinez</span><br>\n                                            <span class=\"title-info\">Chief Executive Officer & Co-Founder</span><br><br>\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'\n                                           \n                                          </p>\n                                          <button class=\"btn btn-primary\" (click)=\"open(content)\">Read More</button>\n                                          <ng-template #content let-modal>\n                                            <div class=\"modal-header\">\n                                            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                                                <span aria-hidden=\"true\">&times;</span>\n                                            </button>\n                                            </div>\n                                        <div class=\"modal-body\">\n                                            <p>\n                                                <!-- <img class=\"div-3\" src=\"assets/images/leadership/person3.png\" align=\"left\"> -->\n                                               <span class=\"title-name\">Same Martinez</span><br>\n                                                <span class=\"title-info\">Chief Executive Officer & Co-Founder</span><br><br>\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'\n                                               \n                                              </p>\n                                        </div>\n                                      </ng-template>\n                                        </div>\n                                </div>\n                                </div>\n                            </section>\n                                <section class=\"leader-ship\"> \n                                <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-12 col-lg-4 col-md-4 div-center center\" *ngFor=\"let leaderlist of leaders; index as i\">\n                                        <p>\n                                            <img class=\"div-{{i+1}}\" src=\"assets/images/leadership/person{{i+1}}.png\">\n                                           <span class=\"title-name\">{{leaderlist.name}}</span><br>\n                                            <span class=\"title-info\">{{leaderlist.info}}</span><br><br>\n                                            {{leaderlist.desc}}\n                                            \n                                        </p>\n                                        <button class=\"btn btn-primary\" (click)=\"open(content)\">Read More</button>\n\n                                        <ng-template #content let-modal>\n                                            <div class=\"modal-header\">\n                                             <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                                                <span aria-hidden=\"true\">&times;</span>\n                                            </button>\n                                            </div>\n                                        <div class=\"modal-body\">\n                                            <p>\n                                                <!-- <img class=\"div-{{i+1}}\" src=\"assets/images/leadership/person{{i+1}}.png\"> -->\n                                               <span class=\"title-name\">{{leaderlist.name}}</span><br>\n                                                <span class=\"title-info\">{{leaderlist.info}}</span><br><br>\n                                                {{leaderlist.desc}}\n                                                \n                                            </p>\n                                        </div>\n                                      </ng-template>\n                                    </div>\n                                </div>\n                            </div>\n                            </section>\n                        </ng-template>\n                    </li>  \n                </ul>\n            </div>\n        </div>\n    </div>\n\n\n     <div [ngbNavOutlet]=\"nav\"></div>\n   \n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-advance-solution.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Advance solutions</h1>\n                    <h6>Technical solution for all industries</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-advance-solution\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-lg-9 col-md-9 col-sm-12 div-center center\">\n                <p class=\"running-text\">\n                    ARKEDGE technologies approaches each business as an individual so\n                    that we can provide you with IT solutions that suit your needs.\n                    We offer holistic solutions, consisting of different offerings.\n                </p>\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                    cillum dolore eu fugiat nulla pariatur.\n                </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 div-center\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <h2>Merchant Matching Model</h2>\n                        <p>\n                            A leading payment network to build rich merchant matching model algorithm to refresh various entity attributes capture through discrete sources. It utilizes huge set of entities (more than 5 million), design with scalable data refresh pipeline to load entity datasets and bulk update indexes to accurately search when the new data ingested to system.\n                            <br><br>\n                            The system utilizes AI powered searching algorithm to do combination of exact matching, fuzzy matching and semantic matching to provide suited ranked result set to the service consumer. System provides a real time search when the repository gets refreshed and updated with the new indexes and provide multi-lingual support to search localized text. \n                        </p>\n\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <img src=\"assets/images/advancesoluton/advance-solution-1.png\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section>\n    <div class=\"container\">\n\n        <div class=\"col-lg-12 div-center\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <img src=\"assets/images/advancesoluton/advance-solution-2.png\">\n                </div>\n\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <h2>Staff Scheduling & Optimization</h2>\n                    <p>\n                        An advanced solution for healthcare providers that can be curated for various industry and reduce their cost for staffing management and optimization. The solution is built on top of some of the cutting-edge analytics model and allow business users to do demand forecasting, intelligent scheduling and optimal staffing for their departments.\n                        <br><br>\n                        The system offers a modern user interface which includes core modules such as scheduling manager, calendar view for monthly staffing assignment and detailed intelligent insight reports to indicate slackness in scheduling of current allotment in staffing. It provides compliance monitoring by stating differences with actual schedules and available measures for cost saving impact. \n                    </p>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n</section>\n\n<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 div-center\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <h2>CMS for Document Publishing</h2>\n                        <p>\n                            A content management system for a global enterprise organization to manage all various brochures and product artifacts published for their businesses. It provides the complete end-to-end documentation lifecycle, starting from document creation, additional review cycles from various stakeholders, proof-reading and then finally publish onto their content delivery network system where it can be distributed and downloaded by business users.\n                            <br><br>\n                            Content management system offers complete version controlling system where author can draft first version, and thereafter keep a version control for every review change from various contributors at various hierarchy and then put for the final approver before publishing into document repository.\n                        </p>\n\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <img src=\"assets/images/advancesoluton/advance-solution-1.png\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section>\n    <div class=\"container\">\n        <div class=\"row info\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"panel\">\n                    <div class=\"panel-heading\">\n                        <h6>Enterprise Solution</h6>\n                    </div>\n                    <div class=\"panel-body\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua.\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua.\n                            <i class=\"icon icon-large\">\n                                <svg focusable=\"false\">\n                                    <use xlink:href=\"#icon_EnterpriseSol\"></use>\n                                </svg>\n                            </i>\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"panel\">\n                    <div class=\"panel-heading\">\n                        <h6>Intelligent Process Automation</h6>\n                    </div>\n                    <div class=\"panel-body\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua.\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                            labore et dolore magna aliqua.\n                            <i class=\"icon icon-large\">\n                                <svg focusable=\"false\">\n                                    <use xlink:href=\"#icon_Idea\"></use>\n                                </svg>\n                            </i>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ai/ai.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ai/ai.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n  <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n  <div class=\"page-title\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 center\">\n          <h1>Artificial Intelligence</h1>\n          <h6>Creating Business Impact by enabling Advanced analytics and Intelligent Automation</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-10 div-center\">\n        <h6 class=\"center career\">\n          Today, most incumbent organizations across industries are grappling with the risks of digital disruption on\n          one hand, even as they reach for its opportunities on the other. Most are responding by committing to the idea\n          of digital transformation The winners in this race are going to be the ones who are able to achieve scale,\n          recognize and respond to market disruptions, while also dealing with real-world constrictions.\n        </h6>\n\n        <p class=\"center\">\n          Our recent research on digital disruption shows that these organizations are powering this transformation with\n          Artificial Intelligence (AI) and by leveraging Analytics, Machine Learning, Robotic Process Automation (RPA)\n          and AI to transform themselves into a data driven intelligent enterprise.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"our-capability\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 center\">\n        <h2><span class=\"heading-highlight\">Our Core </span> Capability</h2>\n        <h5>Developing and implementing advanced AI-enabled automation</h5>\n        <p class=\"running-text center mb-4\">\n          We bring together the catalytic forces of advanced machine learning and technology, along with subject matter\n          expertise and executional capabilities, to progressively transform organizations and unlock enormous financial\n          and business value.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"our-capability-key\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-lg-6 col-md-6\">\n\n      </div>\n      <div class=\"col-sm-12 col-lg-6 col-md-6\">\n        <ul class=\"info-bar\">\n          <li>\n            <b>AI and automation consulting</b> across evaluation and AI maturity assessment, CoE setup, use case\n            discovery, creating a business case and facilitating change management\n          </li>\n          <li>\n            Delivering <b>value at scale</b> by setting up an automation ecosystem, bringing in operational excellence,\n            RPA and chatbot factory models, to implementing use cases\n          </li>\n          <li>Custom <b>AI platform build </b>for clients to enable democratization of AI and scale adoption</li>\n          <li>Bringing pre-built <b>cognitive solutions</b> like Image Detection, Sentiment Analysis, Image Analytics,\n            Chatbot frameworks, a comprehensive HR solution and other apps to work for you</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 div-center a-b-p\">\n        <p class=\"center\">\n          <i class=\"icon icon-medium\">\n            <svg focusable=\"false\">\n              <use xlink:href=\"#icon_ds\"></use>\n            </svg>\n          </i>\n          Automation of business processes through technology, allowing businesses to optimize operations, reduce costs,\n          and improve productivity.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"our-approch\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 center\">\n        <h2>OUR<span class=\"heading-highlight\"> APPROACH</span></h2>\n        <p>4-step technology agnostic approach to automation focuses on ensuring <br>\n          metrics improvement, savings, and ROI.</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"row approch-steps\">\n          <div class=\"col col-lg-6 col-md-6 col-sm-12\">\n            <div class=\"panel\">\n              1. Identify Repetitive Tasks\n              <ul class=\"info-bar\">\n                <li>Understand business workflow and identify repetitive tasks.</li>\n                <li>Consult key stakeholders and actual process users</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col col-lg-6 col-md-6 col-sm-12\">\n            <div class=\"panel\">\n              2. Define Business Goals\n              <ul class=\"info-bar\">\n                <li>Define business goals using the current process as the benchmark.</li>\n                <li>Target to improve the throughput, reduce cycle time and optimize resource utilization.</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col col-lg-6 col-md-6 col-sm-12\">\n            <div class=\"panel\">\n              3. Develop Automation Solution\n              <ul class=\"info-bar\">\n                <li>Choose the right software that is an ideal fit for the organization.</li>\n                <li>Develop, test, and deploy the solution.</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col col-lg-6 col-md-6 col-sm-12\">\n            <div class=\"panel\">\n              4. Feedback Loop\n              <ul class=\"info-bar\">\n                <li>Continuous monitoring and measurement of automated workflow.</li>\n                <li>Continuous assessment and upgradation</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"cutting-edge-sol\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 center\">\n        <h2><span class=\"heading-highlight\">Niche Capabilities & </span> Cutting-Edge Solutions</h2>\n        <p>ArkEdge’s Automation Suite has delivered significant impact to customers across all major <br>\n          industries & geographies.</p>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n<section class=\"cutting-edge-sol-row\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3 col-lg-3 col-sm-12\"></div>\n         <div class=\"col-md-9 col-lg-9 col-sm-12\">\n           <ul class=\"info-bar\">\n             <li><span class=\"title-highlighter\">Workflow Management:</span> End to end process execution just by one single click\n               execution mechanism, reducing manual operations by 35-40%.</li>\n             <li><span class=\"title-highlighter\">DevOps: </span> 40 - 50% faster releases and deployments via our agile approach,\n               maintaining consistency across multiple deployments and release cycles.</li>\n             <li><span class=\"title-highlighter\">Web Crawling Bots: </span>\n               Our generic scrapping engine crawls multiple sources, leading to significant rise in data fill rate and\n               model accuracy.</li>\n             <li><span class=\"title-highlighter\">Robotics Process Automation: </span>Automated labor-intensive and error-prone\n               back tasks which are highly rule based in nature, achieving 15-20% time savings.</li>\n           </ul>\n         </div>\n       </div>\n     </div>\n</section>\n\n<section class=\"design-principal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 center\">\n        <h2><span class=\"heading-highlight\">Design</span> Principles</h2>\n        <p>Artificial intelligence (AI) is capable of augmenting and automating decisions or tasks currently performed\n          by humans, <br>\n          which makes it an indispensable tool for digital business transformation. </p>\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col-md-4 col-lg-4 col-sm-12\">\n        <div class=\"panel\">\n          <h5>FUTURE PROOF DELIVERY</h5>\n          <ul class=\"info-bar\">\n            <li>Technology independence: best-in-class via open source or industry platforms\n            </li>\n            <li>Agility across tech value chain: accelerated emerging tech adoption\n            </li>\n            <li>Flexible delivery model: Serverless, cloud or on-prem\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col col-md-4 col-lg-4 col-sm-12 divider\">\n        <div class=\"panel\">\n          <h5>SCALABLE & RAPID DEPLOYMENT</h5>\n          <ul class=\"info-bar\">\n            <li>Efficient development: Agile approach focused upon code reusability\n            </li>\n            <li>Plug-n-play design: Modularized components for easy utilization across use cases\n            </li>\n            <li>Pre-built connectors: Quick and seamless integration across systems and analytics solutions\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-lg-4 col-sm-12\">\n        <div class=\"panel\">\n          <h5>AI ENABLED & SECURE</h5>\n          <ul class=\"info-bar\">\n            <li>Adaptive real time intelligence: AI models infused with real-time data\n            </li>\n            <li>Visualizations: Responsive user interface, supported by multiple devices\n            </li>\n            <li>Enterprise grade security: Credential vaults with audit trail for user management\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n    \n<section class=\"automation-level\">\n  <div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-sm-12 center\">\n      <h2>Our Use Cases <span class=\"heading-highlight\">with Automation Levels</span></h2>\n    </div>\n  </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <table class=\"table\">\n          <colgroup>\n            <col style=width:30%;>\n            <col style=width:70%;>\n          </colgroup>\n          <tbody>\n            <tr *ngFor=\"let level of automationLevel; index as i\">\n              <td class=\"bg-{{ i + 1 }}\">\n               <div class=\"wrap-div\">\n                <div class=\"bullet-no\">\n                  {{ i + 1 }}.\n                </div>\n                <div class=\"list-no\">\n                  <h5> {{ level.title }}</h5>\n                  <p>{{ level.despcription }}</p>\n                </div>\n               </div>\n              </td>\n              <td>\n                <span class=\"bg-tringle bg-{{ i + 1 }}\"></span>\n                <ul class=\"info-bar auto-level\">\n                  <li *ngFor=\"let infokey of level.infokeys\">\n                    {{infokey.infokey}}\n                  </li>\n                </ul>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"biz-process\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 div-center a-b-p\">\n        <p class=\"center\">\n         <span class=\"running-text\">SCALE PROCESSES, NOT TASKS</span>\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12 center\">\n        <h2>RPA TYPICAL <span class=\"heading-highlight\">BUSINESS PROCESSES</span></h2>\n        <p>RPA can learn from people, eventually taking over the processes that humans once completed, at a<br> much faster pace.</p>\n      </div>\n   </div>\n   <div class=\"row\">\n    <div *ngFor=\"let item of bizProcess; index as i\" class=\"col-lg-4 col-md-4 col-sm-12\">\n      <div class=\"panel\">\n          <div class=\"panel-heading\">\n              <div class=\"icon-circle color_{{i + 1}}\">\n                  <i class=\"icon icon-medium\">\n                      <svg focusable=\"false\">\n                          <use attr.xlink:href=\"{{item.icon}}\"></use>\n                      </svg>\n                  </i>\n              </div>\n              <h5 class=\"center\">{{item.title}}</h5>\n          </div>\n          <div class=\"panel-body\">\n              <p class=\"center\">{{item.description}}</p>\n          </div>\n      </div>\n  </div>\n   </div>\n  </div>\n</section>\n\n<section class=\"p-0\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 center\">\n        <h2>Our experience <span class=\"heading-highlight\">with enterprise automation</span></h2>\n        <p>\n          To unlock this new intelligence, organizations must embrace a different approach and focus on automation across  domains—business operations, enterprise IT operations and application engineering—to avoid implementation failure through one-size-fits-all planning.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"tab-section\">\n  <div class=\"main-tabber-nav\">\n    <a href=\"javascript:void(0)\" (click)=\"onClick(1)\" [ngClass]=\"{'active': tab==='tab1'}\">BY FUNCTION</a>\n    <a href=\"javascript:void(0)\" (click)=\"onClick(2)\" [ngClass]=\"{'active': tab==='tab2'}\">BY INDUSTRY</a>\n  </div>\n</section>\n\n<section class=\"section-ai inner-nav-tab\" [ngClass]=\"{'active': tab==='tab1'}\">  \n<div class=\"tab-navigation\">\n  <div class=\"center-div\">\n    <div class=\"col-sm-12\">\n      <div class=\"container\">\n        <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n          <li [ngbNavItem]=\"1\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_Functionfinace\"></use>\n                </svg>\n              </i>\n              Finance</a>\n            <ng-template ngbNavContent>\n\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of finance\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"2\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionit\"></use>\n                </svg>\n              </i>\n              Technology</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of it\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"3\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionsales\"></use>\n                </svg>\n              </i>\n              Sales & Marketing</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of sm\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"4\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionoperation\"></use>\n                </svg>\n              </i>\n              Operations</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of operation\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"5\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionsc\"></use>\n                </svg>\n              </i>\n              Supply Chain</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of sc\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"6\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_Functionadmin\"></use>\n                </svg>\n              </i>\n              Administrative</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of admin\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n\n          <!-- <li [ngbNavItem]=\"7\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_Functioncenter\"></use>\n                </svg>\n              </i>\n              Contact Center</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of cc\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li> -->\n\n          <li [ngbNavItem]=\"8\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_Functioncs\"></use>\n                </svg>\n              </i>\n              Customer Success</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of cs\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"9\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionhr\"></use>\n                </svg>\n              </i>\n              Human Resources</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of hr\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n\n          <!-- <li [ngbNavItem]=\"10\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_Functionlegal\"></use>\n                </svg>\n              </i>\n              Vendor Management, Compliance and Legal</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of vmcl\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel tab-data\"> \n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li> -->\n        </ul>\n      </div>\n    </div>\n  </div>\n  </div>\n  <div [ngbNavOutlet]=\"nav\" class=\"mt-4\"></div>\n</section>\n\n<section class=\"section-ai inner-nav-tab\" [ngClass]=\"{'active': tab==='tab2'}\">  \n<div class=\"tab-navigation\">\n  <div class=\"center-div\">\n    <div class=\"col-sm-12\">\n      <div class=\"container\">\n        <ul ngbNav #navIn=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n          <li [ngbNavItem]=\"1\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionbank\"></use>\n                </svg>\n              </i>\n              Banking</a>\n            <ng-template ngbNavContent>\n\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of bfs\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"2\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionhealth\"></use>\n                </svg>\n              </i>\n              Healthcare</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of hp\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n          <!-- <li [ngbNavItem]=\"3\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionlogistic\"></use>\n                </svg>\n              </i>\n              Transportation & Logistics</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of tl\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li> -->\n          <li [ngbNavItem]=\"4\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionmanufactring\"></use>\n                </svg>\n              </i>\n              Manufacturing</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of mfg\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"5\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functioninsurance\"></use>\n                </svg>\n              </i>\n              Insurance</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of insurance\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"6\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functiongov\"></use>\n                </svg>\n              </i>\n              Government</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of government\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"7\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionoutsourcing\"></use>\n                </svg>\n              </i>\n              Outsourcing</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of outsourcing\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"8\">\n            <a ngbNavLink>\n              <i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionretail\"></use>\n                </svg>\n              </i>\n              Retail</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of retail\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"9\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionenergy\"></use>\n                </svg>\n              </i>\n              Energy</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of eu\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"10\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functiontelecom\"></use>\n                </svg>\n              </i>\n              Telecom</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of telecom\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"11\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionedu\"></use>\n                </svg>\n              </i>\n              Education</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of education\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"12\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionindustry\"></use>\n                </svg>\n              </i>\n             Hospitality</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of th\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n          <li [ngbNavItem]=\"13\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionoutrealestate\"></use>\n                </svg>\n              </i>\n              Real Estate</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of re\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n          <!-- <li [ngbNavItem]=\"14\">\n            <a ngbNavLink><i class=\"icon icon-ex-small center\">\n                <svg focusable=\"false\">\n                  <use xlink:href=\"#icon_functionfood\"></use>\n                </svg>\n              </i>\n              Food and Beverage</a>\n            <ng-template ngbNavContent>\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of fb\" class=\"col-lg-3 col-md-3 col-sm-12 panel-container\">\n                      <div class=\"panel\">\n                        <div class=\"panel-heading\">\n                          <h5>{{item.title}}</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li> -->\n        </ul>\n      </div>\n    </div>\n  </div>\n  </div>\n  <div [ngbNavOutlet]=\"navIn\" class=\"mt-4\"></div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n<a class=\"scroll-top\" *ngIf=\"isShow\" (click)=\"gotoTop()\">\n    <i class=\"icon icon-ex-small\">\n        <svg focusable=\"false\">\n            <use xlink:href=\"#icon_scrollTop\"></use>\n        </svg>\n    </i>\n</a> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-inner-page-header></app-inner-page-header> -->\n<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-career.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n        <h1>Career @ Arkedge</h1>\n        <h6>come and join us our family...</h6>\n    </div></div></div>\n    </div>\n</div>\n<section class=\"section-career\">\n    <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-10 div-center\">\n        <h6 class=\"center career\">Arkedge Technologies has a very ambitious plan for future and we are looking for energetic, motivated, ambitious team players who relish the challenge of joining a growing business in the field of IT, Resourcing and Training. You will have the opportunity to grow professionally and financially.\n        </h6>\n        </div>\n       <div class=\"col-lg-6 col-md-6 col-sm-12 career-info\">\n            <div class=\"panel\">\n                    <div class=\"panel-heading\">\n                       <h6>How We Hire</h6>\n                    </div>\n                    <div class=\"panel-body\">\n                        <p>\n                            <b>Internal sources</b> <br>\n                            Transfer, Promotion\n                            <br><br>\n                            <b>External sources</b> <br>\n                            Employment agencies,<br> Management- Education institutions, <br>Job posting\n                        </p>\n                    </div>\n             </div>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12 career-info\">\n            <div class=\"panel\">\n                    <div class=\"panel-heading\">\n                       <h6>Employee Benefits</h6>\n                    </div>\n                    <div class=\"panel-body\">\n                        <p>\n                            Retirement savings funds (provident and pension funds)<br>\n                            Group life insurance benefits<br>\n                            Disability insurance <br>\n                            Health benefits<br>\n                            *Flexi work hours/Work from Home <br>\n                            *Paid and unpaid parental leave\n                        </p>\n                    </div>\n             </div>\n        </div>\n\n        <div class=\"col-sm-12\">\n            <h6 class=\"text-wrap\">If you are interested in working in a fast-paced, challenging environment, Below are the Current Openings for open positions.</h6>\n\n            <table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Job Code</th>\n                    <th>Job Title</th>\n                    <th>Location</th>\n                    <th>Target Date</th>\n                    <th>Details</th>\n                   </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let data of career\">\n                    <td>{{data.jobcode}}</td>\n                    <td>{{data.jobtitle}}</td>\n                    <td>{{data.location}}</td>\n                    <td>{{data.targetDate}}</td>\n                    <td><a href=\"assets/arkege.pdf\" download>View Details</a></td>\n                  </tr>\n                </tbody>\n                </table>\n\n            </div>\n\n\n        <div class=\"col-sm-12 col-md-10 div-center\">\n           <form>\n            <h2 class=\"center\">Post your profile here...</h2>\n                <div class=\"row form-group\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\n                    </div>\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" id=\"yourMail\" placeholder=\"Your Mail\" name=\"yourMail\">\n                    </div>\n                </div>\n                <div class=\"row form-group\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\n                    </div>\n                    <div class=\"col custom-file mb-3\">\n                        <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" name=\"filename\">\n                        <label class=\"custom-file-label\" for=\"customFile\">Attachment</label>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\n                </div>\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Message\" rows=\"5\"></textarea>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\n                <button type=\"submit\" class=\"btn btn-warning\">RESET</button>\n            </form>\n        </div>\n    </div>\n</div>    \n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-client.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>CLIENT TELE</h1>\n                    <h6>We value loyalty, creativity and productivity with results</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"client-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngFor=\"let data of clientInfo; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                <div class=\"panel\" (click)=\"open(content)\">\n                   <div class=\"panel-body\">\n                       <a><img src=\"assets/images/clientlogo/logo{{i+1}}.png\"></a>\n                    </div>\n                 </div>\n                 <ng-template #content let-modal>\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">{{data.title}}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    </div>\n                <div class=\"modal-body\">\n                    \n                    <div class=\"panel\">\n                        <div class=\"panel-header\">\n                            <img src=\"assets/images/clientlogo/logo{{i+1}}.png\">\n                         </div>\n                        <div class=\"panel-body\">\n                            <p>{{data.desc}}</p>\n                            <a href=\"{{data.url}}\" target=\"_blank\">{{data.url}}</a>\n                         </div>\n                    </div>\n                </div>\n              </ng-template>\n             </div>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"client-speak\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n                <h1>Client Speaks</h1>\n                <p>Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions and\n                    technology progress. To streamline your business, we address those issues with our Internet and\n                    Intranet solutions. In addition we also provide you web / animation design services.</p>\n\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                 <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n        </div>\n    </div>\n</section>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>company works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-inner-page-header></app-inner-page-header> -->\n<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-contact.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>We Are Here For You</h1>\n                    <h6>Hello. What can we help you with?</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-contact\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngFor=\"let data of contactInfo\" class=\"col-lg-4 col-md-4 col-sm-12 contact-emails\">\n                <div class=\"panel\">\n                    <div class=\"panel-heading\">\n                        <h5>{{data.title}}</h5>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div>\n                            <i class=\"icon icon-medium\">\n                                <svg focusable=\"false\">\n                                    <use attr.xlink:href=\"{{data.icon}}\"></use>\n                                </svg>\n                            </i>\n                        </div>\n                        <div>\n                            <p>{{data.subtitle}}</p>\n                        <a href=\"mailto:{{data.id}}\">{{data.id}}</a>\n                        <p>{{data.phone}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-12 col-md-10 div-center\">\n                <form>\n                    <h1 class=\"center\">Feel free to contact...</h1>\n                    <div class=\"row form-group\">\n                        <div class=\"col\">\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\n                        </div>\n                        <div class=\"col\">\n                            <input type=\"text\" class=\"form-control\" id=\"yourMail\" placeholder=\"Your Mail\"\n                                name=\"yourMail\">\n                        </div>\n                    </div>\n                    <div class=\"row form-group\">\n                        <div class=\"col\">\n                            <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\n                        </div>\n                        <div class=\"col\">\n                            <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country\" name=\"country\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\n                    </div>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Message\"\n                            rows=\"5\"></textarea>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\n                    <button type=\"submit\" class=\"btn btn-warning\">RESET</button>\n                </form>\n            </div>\n\n\n            <div *ngFor=\"let data of getTouch; index as i\" class=\"col-lg-4 col-md-4 col-sm-12 contact-address\">\n                <div class=\"panel\" (click)=\"changeMap(data.subtitle)\" \n                [ngClass]=\"{'active' : activMap === 'data.subtitle'}\">\n                    <div class=\"panel-heading\">\n                        <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\n                    </div>\n                    <div class=\"panel-body\">\n                        <h5>{{data.subtitle}}</h5>\n                        <p>{{data.street_1}}</p>\n                        <p>{{data.street_2}}</p>\n                        <p>{{data.state}}</p>\n                        <p>{{data.contact}}</p>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n   <div class=\"mapouter\">\n        <div class=\"gmap_canvas\">\n            <iframe *ngIf=\"mumbai\"\n                src=\"https://maps.google.com/maps?q=Arkedge%20Technologies%20Pvt.%20Ltd%20Msthal%20Height%2C%20Next%20to%20Marwah%20Estate%2C%20Saki%20Naka%2C%20Andheri%20(E)%2C%20Mumbai%2C%20Maharashtra%20400072&t=&z=13&ie=UTF8&iwloc=&output=embed\"\n                frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\n            </iframe>\n            <iframe *ngIf=\"corporate\"\n                src=\"https://maps.google.com/maps?q=Arkedge%20Technologies%20Pvt%20Ltd.%20Ambarnath%20(W)&t=&z=13&ie=UTF8&iwloc=&output=embed\"\n                frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\n            </iframe>\n            <iframe *ngIf=\"thane\"\n                src=\"https://maps.google.com/maps?q=Arkedge%20Technologies%20Pvt%20Ltd.%20Shangvi%20Complex%2C%20Mira%20Road%2C%20Thane%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed\"\n                frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\n            </iframe>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datamgmt/datamgmt.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datamgmt/datamgmt.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n  <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n  <div class=\"page-title\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 center\">\n          <h1>DATA SERVICES</h1>\n          <h6> {{tabName}}</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- <section class=\"manage-service-tab inner-nav-tab\">\n    <div class=\"tab-navigation\">\n        <div class=\"col-sm-12\">\n            <div class=\"container\">\n                <ul ngbNav #nav=\"ngbNav\" [activeId]=\"tabIndex\" class=\"nav-tabs\">\n                    <li [ngbNavItem]=\"1\">\n                        <a ngbNavLink (click)=\"title(1)\">Cleanse Dataset</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"datamgmt\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text\">\n                                                The data cleansing is a process of correcting the errors lies in the\n                                                records of a dataset. This error in the records of the dataset may occur\n                                                due to a deliberate attempt or an inadvertent occurrence including\n                                                incorrect data entry, inaccurate transfer of data from one system to\n                                                another, and inappropriate file handling, in structuring the data and\n                                                deleting the corrupted data. These errors in the records make the data\n                                                inaccurate and inappropriate for any further use.\n                                            </p>\n                                            <p>\n                                                The data cleansing process attempts to bring the data back to its\n                                                original form, or a form where the data can be processed, analyzed and\n                                                used by managers in decision making processes. The cleansing of data not\n                                                only includes the rectification of errors but also includes\n                                                normalization and standardization of the data.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n                    <li [ngbNavItem]=\"2\">\n                        <a ngbNavLink (click)=\"title(2)\">Data Mapping & Conversion</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"datamgmt\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text v-flex\">\n\n                                                Ensuring your data is correct and accurate is an important task in\n                                                preparing to go live with a new database and Enterprise application. We\n                                                understand the effort involved in data entry. You do not have to\n                                                re-enter all the information into the new application. We provide data\n                                                mapping and conversion services in order to simplify the process of\n                                                moving your current data from any legacy system into the new database. A\n                                                script is used to convert the historical or static data. Once the data\n                                                is converted, it is tested for completion and integrity.\n                                                <img src=\"assets/images/managservice/app-dev-met.jpg\" align=\"right\">\n                                            </p>\n                                            <p>\n                                                The data cleansing process attempts to bring the data back to its\n                                                original form, or a form where the data can be processed, analyzed and\n                                                used by managers in decision making processes. The cleansing of data not\n                                                only includes the rectification of errors but also includes\n                                                normalization and standardization of the data.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"3\">\n                        <a ngbNavLink (click)=\"title(3)\">Data Migration & Consolidation</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"datamgmt\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text v-flex\">\n\n                                                Data Migration and consolidation are often the most understood and\n                                                underestimated process in any implementation. ARKEDGE migration services\n                                                is a combination of packaged migration frameworks combined with custom\n                                                developed utilities (custom extractors, filters, translators, reports,\n                                                etc) that allow the accurate and efficient migration of data from third\n                                                party systems. This service is aimed at heterogeneous system\n                                                environments.\n                                                <img src=\"assets/images/managservice/app-dev-met.jpg\" align=\"right\">\n                                            </p>\n                                            <p>\n                                                ARKEDGE approaches a project with a mix of manual and tool based\n                                                techniques for migration, based on various factors. Wherever technically\n                                                feasible, a direct approach is utilized, using the standard spreadsheet\n                                                templates and the up-loader, thereby eliminating the converter process.\n                                                The migration methodology consists of phases including Requirements,\n                                                Planning, Designing, Deployment, Testing, and Migration.\n                                                <br><br>\n                                                We have built specific expertise in Data Migration in ARKEDGE. We have\n                                                innovatively designed and created templates, tools, processes and\n                                                methodologies to support various kinds of consolidation and migration\n                                                activities in these technologies.\n                                                <br><br>\n                                                ETL (Extract Transform Load) techniques are used to merge, purge,\n                                                cleanse, match and de-dupe the data.\n                                            </p>\n                                        </div>\n                                        <div class=\"col-sm-12\">\n                                            <h6>We carry great experience and expertise in below practice areas:</h6>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of dataMigration\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"4\">\n                        <a ngbNavLink (click)=\"title(4)\">Spend Analysis</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"datamgmt\">\n                                <div class=\"container\">\n                                    <div class=\"row\"> \n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text v-flex\">\n\n                                                Spend data management has emerged as a lead strategy that enterprises\n                                                will use to drive continuous improvements in supply chain management.\n                                                Despite the immense value that well managed spend has been proven to\n                                                deliver, very few organizations have a structured methodology for\n                                                analyzing spend data and using it as an effective decision support tool.\n                                               </p>\n                                            <p>\n                                                <img src=\"assets/images/managservice/app-dev-met.jpg\" align=\"right\">\n                                                Most companies have multiple enterprise transaction systems and lack the\n                                                tools and processes to properly aggregate, cleanse, normalize and\n                                                monitor their spend with multiple vendors at the line item level.\n                                                <br><br>\n                                                Though some companies have analytical abilities built into enterprise\n                                                software systems, they fail to generate the intelligence that is sought\n                                                by executive management due to tools being limited in their\n                                                intelligence, as compared to an actual Analyst.\n                                                <br><br>\n                                                The services assist customers in getting insights on their direct and\n                                                indirect spending, monitor the performance of suppliers and identify\n                                                opportunities to consolidate spending or reduce costs of procurement.\n                                                <br><br>\n                                                Arkedge offers a solution that helps clients attain full visibility into\n                                                their spend; better understanding where savings opportunities exist, and\n                                                how to achieve the best savings.\n                                               \n                                            \n                                            </p>\n                                        </div>\n                                        \n                                    </div>\n                                        <div class=\"row spend-analysis\"> \n                                        <div class=\"col-sm-12\">\n                                            <h2>Arkedge eSpend Solution</h2>\n                                            <p>\n                                                Arkedge's spend analysis solution provides a total solution to companies\n                                                that are looking to consolidate spend data from multiple systems,\n                                                transform data quality and analyze transactions, to provide actionable\n                                                results. Our spend analysis offering combines our commodity expertise\n                                                with automated technology and provides a comprehensive view of your\n                                                organization's spend. This \"bottom-up\" approach includes:</p>\n                                            <h6>Requirement review and finalization</h6>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of espendRequirement\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <h2>Data Collection and Consolidation</h2>\n                                           <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of dataCollection\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <h2>Data Cleansing, Normalization and Clustering</h2>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of dataCleansing\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <h2>Classification, Enrichment and Review</h2>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of classification\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <h2>Advanced Data Analytics Reports</h2>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of advancedData\">\n                                                    {{item.list}}\n                                                </li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <p>\n                                                Arkedge eSpend can accept data from various file type, i.e., Text, MS Excel, XML, MS Access etc. Our analyst's upload, review, accept, reject, validate, normalize, cleanse, cluster classify, and analyze the data through eSpend analysis tool.\n                                                <br><br>\n                                                Reports such as spend by business unit, geography, reporting period, category, vendor, UNSPSC code, language, price variance, etc. are available within the tool. A detailed opportunity assessment is also performed to provide insights to clients on where and how to achieve cost savings across their entire spend.</p>\n                                            </div>\n\n                                            <div class=\"col-sm-12\">\n                                                <h2>Benefits of Spend Analytics</h2>\n                                                <ul class=\"info-bar\">\n                                                    <li *ngFor=\"let item of spendAnalytics\">\n                                                        {{item.list}}\n                                                    </li>\n                                                </ul>\n                                                <ul class=\"info-bar obtain-visibility\">\n                                                    <li *ngFor=\"let item of obtainvisibility\">\n                                                        {{item.list}}\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div [ngbNavOutlet]=\"nav\"></div>\n</section> -->\n\n<section class=\"manage-service-tab inner-nav-tab\">\n  <div class=\"tab-navigation\">\n    <div class=\"col-sm-12\">\n      <div class=\"container\">\n        <ul ngbNav #nav=\"ngbNav\" [activeId]=\"tabIndex\" class=\"nav-tabs\">\n          <li [ngbNavItem]=\"1\">\n            <a ngbNavLink (click)=\"title(1)\">Data Engineering</a>\n            <ng-template ngbNavContent>\n              <section class=\"datamgmt\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 center\">\n                      <h2><span class=\"heading-highlight\">Data Engineering</span> </h2>\n                      <p class=\"running-text\">\n                        Data engineering services enabled the organization to solve their data challenges, analyse data trends, predict pattern for forecasting and help them through business strategies based on intelligent insights. Our data engineering team analyses structured, semi-structured and unstructured data with cutting edge technology, leveraging industry standard cloud enabled data services and process them to transform data for business consumption.\n                      </p>\n                      <p>\n                        With our engineering expertise, we provide data engineering solutions for complete data lifecycle management, including designing automation data pipelines, data acquisition and ingestion, building single source of truth for unified storage, build analytical models, data migration from legacy system, integration with 3rd part data services and build dashboard visualization for business users.\n                      </p>\n\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <section class=\"section-sevices atf\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of sevices\" class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use attr.xlink:href=\"{{item.icon}}\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>{{item.title}}</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>{{item.description}}</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <section class=\"section-sevices\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 center\">\n                      <h2 class=\"artf-head div-center col-sm-12 col-md-10 col-lg-10 center\">Data Science & Artificial\n                        Intelligence Consulting</h2>\n                      <p>\n                        SFL Scientific is a data science consulting firm focused on strategy, technology, and solving\n                        business <br>& operational challenges with Artificial Intelligence.\n                      </p>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use xlink:href=\"#icon_dsa\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>Data Science & Analytics</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>Use state-of-the-art machine learning techniques to cut through the noise in the rapidly\n                            changing information landscape and find patterns in the data to monitor trends, predict, and\n                            gain insights.</p>\n                          <a href=\"javascript:void(0)\" (click)=\"open(dsa)\">Read more</a>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use xlink:href=\"#icon_ds\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>Data Strategy</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>From data ingestion, processing, and the architecture & data engineering requirements to\n                            enable big data solutions. SFL Scientific can evaluate and provide the technology roadmap to\n                            achieve business goals.</p>\n                          <a href=\"javascript:void(0)\" (click)=\"open(ds)\">Read more</a>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use xlink:href=\"#icon_bi\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>Business Intelligence</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>Ingest, extract, and create powerful predictive visualizations for end users. Transform\n                            complex and unstructured data to derive pertinent insights required for growth from text,\n                            time-series, customer</p>\n                          <a href=\"javascript:void(0)\" (click)=\"open(bi)\">Read more</a>\n                        </div>\n                      </div>\n                    </div>\n\n\n                    <ng-template #dsa let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Data Science & Analytics</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"panel\">\n                          <div class=\"panel-body center dsa-popup\">\n                            <p> We use specific domain knowledge to help solve complex and novel business problems by\n                              deploying data-driven and AI systems into production. By working with stakeholders from\n                              initial data strategy & employing a holistic approach to our services, we combine the\n                              latest technical advances, real-world expertise, AI engineering, and an understanding of\n                              business and data requirements to generate operational value.</p>\n                            <h2>What is Data Science Consulting?</h2>\n                            <div class=\"row\">\n                              <div *ngFor=\"let item of sevicesInfo\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                                <div class=\"panel servic-info\">\n                                  <div class=\"panel-heading\">\n                                    <div class=\"icon-circle {{item.color}}\">\n                                      <i class=\"icon icon-medium\">\n                                        <svg focusable=\"false\">\n                                          <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                        </svg>\n                                      </i>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                    <ng-template #ds let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Data Strategy</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body ds-popup\">\n                        <div class=\"panel\">\n                          <div class=\"panel-body\">\n                            <h4 class=\"center\">Put our elite resources in conversation with your top decision makers to\n                              collaboratively discover the optimal path to your analytics goals. We make the important\n                              data insights operational in your firm.</h4>\n                            <p>SFL takes an integrative approach where we look both holistically at your entire business\n                              and all its important individual components. There are many examples of unstructured data\n                              in businesses, and we can analyze and interpret it, to help identify sets that you can\n                              then monetize. We leverage our expertise to better use that data to streamline existing\n                              pipelines and generate revenue. We use the best practices approach and offer a customized\n                              diagnostic and decision service to implement the resultant analysis for each venture.</p>\n                            <h4>Data Strategy</h4>\n                            <ul class=\"info-bar\">\n                              <li>Data Strategy starts with the understanding of your business objectives and goals.\n                              </li>\n                              <li>From here SFL will work within your current framework and use data based methods to\n                                identify current and potential business capabilities.</li>\n                              <li>Our goal is to determine a custom prioritized roadmap, make recommendations driven by\n                                business value, and implement them for your organization.</li>\n                            </ul>\n\n                            <h4>Enterprise Strategy</h4>\n                            <ul class=\"info-bar\">\n                              <li>Identify the specific types of information that need to be managed</li>\n                              <li>Determine the organizational ownership, implementation, and promotion of data systems\n                              </li>\n                              <li>Demonstrate and champion the cause of using such data assets to drive business growth\n                              </li>\n                              <li>Initialize the collection, characterization, and predictive analytics to make growth\n                                sustained</li>\n                              <li>Identify key enterprise challenges and work with executives to overcame possible pain\n                                points</li>\n                              <li>Iterate and implement, providing guidance on future development and growth\n                                opportunities</li>\n\n                            </ul>\n\n                            <p>\n                              SFL champions the use of data and analytics to realize strategic insights to help drive\n                              cross-business unit initiatives focused primarily on revenues generation, effectiveness,\n                              and efficiencies.\n                            </p>\n\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                    <ng-template #bi let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Business Intelligence</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"panel\">\n                          <div class=\"panel-body bi-info\">\n                            <h2 class=\"center\">Business Intelligence</h2>\n                            <div class=\"row\">\n                              <div *ngFor=\"let item of businessIntel\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                                <div class=\"panel servic-info\">\n                                  <div class=\"panel-heading center\">\n                                    <div class=\"icon-circle\">\n                                      <i class=\"icon icon-medium\">\n                                        <svg focusable=\"false\">\n                                          <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                        </svg>\n                                      </i>\n                                    </div>\n                                    <p>{{item.title}}</p>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <p> SFL's consultants help businesses make better decisions. We provide the agility of an\n                              individualized business intelligence tools with enterprise-level monitoring and\n                              governance. As top authorities in business intelligence and data warehousing, we structure\n                              solutions to optimize your ability to leverage data.</p>\n\n\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"2\">\n            <a ngbNavLink (click)=\"title(2)\">Data Management</a>\n            <ng-template ngbNavContent>\n              <section class=\"datamgmt\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 center\">\n                      <h2><span class=\"heading-highlight\">Data Management</span></h2>\n                      <p class=\"running-text\">\n                        Under Data Management program, we help enterprise organization to manage their data throughout its lifecycle to design data architecture, process for data quality management, tools for data governance, data storage, master data management, data security, data migration including backup and replication, and building the enterprise data warehouse and data lake for analytics and reporting applications.\n                      </p>\n                      <p>\n                        Our services offerings work on the pay as you go model and can work with your organization objectives to plan and phase-wise rollout to build data management capabilities, starting from defining & refining objectives, assessing and evaluation existing data ecosystem maturity, drawing and laydown data governance policies for access controls, designing data architecture, developing technology solution and deploy onto production.\n                      </p>\n\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <section class=\"section-sevices atf\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of sevices\" class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use attr.xlink:href=\"{{item.icon}}\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>{{item.title}}</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>{{item.description}}</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n             \n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"3\">\n            <a ngbNavLink (click)=\"title(3)\">Data Science</a>\n            <ng-template ngbNavContent>\n              <section class=\"datamgmt\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 center\">\n                      <h2><span class=\"heading-highlight\">Data Science</span></h2>\n                      <p class=\"running-text\">\n                        The data is growing exponential with enterprise organization, and they are looking to leverage business value out of those enormous structure, semi-structure and unstructured datasets sitting in their ecosystem. We help organization to meet their objective extracting value using various data science services, including descriptive & predictive analytics services using advanced machine learning models.\n                      </p>\n                      <p>\n                        Our data science offerings include content analysis for data patterns, forecasting the trends for future demand, designing real-time scoring capabilities for both descriptive & predictive modelling, data mining, statistical analysis and benchmarking. With the extensive experience on data science, we also offer consulting services to understand your data, laydown the strategy and milestone driven rollout plan to meet your business goals.\n                      </p>\n\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <section class=\"section-sevices atf\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of sevices\" class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use attr.xlink:href=\"{{item.icon}}\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>{{item.title}}</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>{{item.description}}</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <section class=\"section-sevices\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 center\">\n                      <h2 class=\"artf-head div-center col-sm-12 col-md-10 col-lg-10 center\">Data Science & Artificial\n                        Intelligence Consulting</h2>\n                      <p>\n                        SFL Scientific is a data science consulting firm focused on strategy, technology, and solving\n                        business <br>& operational challenges with Artificial Intelligence.\n                      </p>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use xlink:href=\"#icon_dsa\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>Data Science & Analytics</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>Use state-of-the-art machine learning techniques to cut through the noise in the rapidly\n                            changing information landscape and find patterns in the data to monitor trends, predict, and\n                            gain insights.</p>\n                          <a href=\"javascript:void(0)\" (click)=\"open(dsa)\">Read more</a>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use xlink:href=\"#icon_ds\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>Data Strategy</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>From data ingestion, processing, and the architecture & data engineering requirements to\n                            enable big data solutions. SFL Scientific can evaluate and provide the technology roadmap to\n                            achieve business goals.</p>\n                          <a href=\"javascript:void(0)\" (click)=\"open(ds)\">Read more</a>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use xlink:href=\"#icon_bi\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>Business Intelligence</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>Ingest, extract, and create powerful predictive visualizations for end users. Transform\n                            complex and unstructured data to derive pertinent insights required for growth from text,\n                            time-series, customer</p>\n                          <a href=\"javascript:void(0)\" (click)=\"open(bi)\">Read more</a>\n                        </div>\n                      </div>\n                    </div>\n\n\n                    <ng-template #dsa let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Data Science & Analytics</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"panel\">\n                          <div class=\"panel-body center dsa-popup\">\n                            <p> We use specific domain knowledge to help solve complex and novel business problems by\n                              deploying data-driven and AI systems into production. By working with stakeholders from\n                              initial data strategy & employing a holistic approach to our services, we combine the\n                              latest technical advances, real-world expertise, AI engineering, and an understanding of\n                              business and data requirements to generate operational value.</p>\n                            <h2>What is Data Science Consulting?</h2>\n                            <div class=\"row\">\n                              <div *ngFor=\"let item of sevicesInfo\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                                <div class=\"panel servic-info\">\n                                  <div class=\"panel-heading\">\n                                    <div class=\"icon-circle {{item.color}}\">\n                                      <i class=\"icon icon-medium\">\n                                        <svg focusable=\"false\">\n                                          <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                        </svg>\n                                      </i>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                    <ng-template #ds let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Data Strategy</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body ds-popup\">\n                        <div class=\"panel\">\n                          <div class=\"panel-body\">\n                            <h4 class=\"center\">Put our elite resources in conversation with your top decision makers to\n                              collaboratively discover the optimal path to your analytics goals. We make the important\n                              data insights operational in your firm.</h4>\n                            <p>SFL takes an integrative approach where we look both holistically at your entire business\n                              and all its important individual components. There are many examples of unstructured data\n                              in businesses, and we can analyze and interpret it, to help identify sets that you can\n                              then monetize. We leverage our expertise to better use that data to streamline existing\n                              pipelines and generate revenue. We use the best practices approach and offer a customized\n                              diagnostic and decision service to implement the resultant analysis for each venture.</p>\n                            <h4>Data Strategy</h4>\n                            <ul class=\"info-bar\">\n                              <li>Data Strategy starts with the understanding of your business objectives and goals.\n                              </li>\n                              <li>From here SFL will work within your current framework and use data based methods to\n                                identify current and potential business capabilities.</li>\n                              <li>Our goal is to determine a custom prioritized roadmap, make recommendations driven by\n                                business value, and implement them for your organization.</li>\n                            </ul>\n\n                            <h4>Enterprise Strategy</h4>\n                            <ul class=\"info-bar\">\n                              <li>Identify the specific types of information that need to be managed</li>\n                              <li>Determine the organizational ownership, implementation, and promotion of data systems\n                              </li>\n                              <li>Demonstrate and champion the cause of using such data assets to drive business growth\n                              </li>\n                              <li>Initialize the collection, characterization, and predictive analytics to make growth\n                                sustained</li>\n                              <li>Identify key enterprise challenges and work with executives to overcame possible pain\n                                points</li>\n                              <li>Iterate and implement, providing guidance on future development and growth\n                                opportunities</li>\n\n                            </ul>\n\n                            <p>\n                              SFL champions the use of data and analytics to realize strategic insights to help drive\n                              cross-business unit initiatives focused primarily on revenues generation, effectiveness,\n                              and efficiencies.\n                            </p>\n\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                    <ng-template #bi let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Business Intelligence</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"panel\">\n                          <div class=\"panel-body bi-info\">\n                            <h2 class=\"center\">Business Intelligence</h2>\n                            <div class=\"row\">\n                              <div *ngFor=\"let item of businessIntel\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                                <div class=\"panel servic-info\">\n                                  <div class=\"panel-heading center\">\n                                    <div class=\"icon-circle\">\n                                      <i class=\"icon icon-medium\">\n                                        <svg focusable=\"false\">\n                                          <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                        </svg>\n                                      </i>\n                                    </div>\n                                    <p>{{item.title}}</p>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <p> SFL's consultants help businesses make better decisions. We provide the agility of an\n                              individualized business intelligence tools with enterprise-level monitoring and\n                              governance. As top authorities in business intelligence and data warehousing, we structure\n                              solutions to optimize your ability to leverage data.</p>\n\n\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n        \n          <li [ngbNavItem]=\"4\">\n            <a ngbNavLink (click)=\"title(4)\">Cloud Computing</a>\n            <ng-template ngbNavContent>\n              <section class=\"datamgmt\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 center\">\n                      <h2><span class=\"heading-highlight\">Cloud Computing</span></h2>\n                      <p class=\"running-text\">\n                        We have expertise in building scalable solutions powered as Platform as a Service (PaaS) and Software as a Service (SaaS). PaaS offering provide out of the box platform that can be extended by development team to build more custom feature suited for your requirements. We also offer productivity tools to accelerate development path and roll out features in quick time.\n                      </p>\n                      <p>\n                        For the SaaS offering, we provide rich solutions to cater to industry domains including customer relationship management (CRM), marketing automation, lead management system (LMS), business analytics, content management system (CMS) which can be directly fit into your organizational objectives.\n                      </p>\n\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <section class=\"section-sevices atf\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of sevices\" class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use attr.xlink:href=\"{{item.icon}}\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>{{item.title}}</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>{{item.description}}</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <section class=\"section-sevices\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 center\">\n                      <h2 class=\"artf-head div-center col-sm-12 col-md-10 col-lg-10 center\">Data Science & Artificial\n                        Intelligence Consulting</h2>\n                      <p>\n                        SFL Scientific is a data science consulting firm focused on strategy, technology, and solving\n                        business <br>& operational challenges with Artificial Intelligence.\n                      </p>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use xlink:href=\"#icon_dsa\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>Data Science & Analytics</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>Use state-of-the-art machine learning techniques to cut through the noise in the rapidly\n                            changing information landscape and find patterns in the data to monitor trends, predict, and\n                            gain insights.</p>\n                          <a href=\"javascript:void(0)\" (click)=\"open(dsa)\">Read more</a>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use xlink:href=\"#icon_ds\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>Data Strategy</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>From data ingestion, processing, and the architecture & data engineering requirements to\n                            enable big data solutions. SFL Scientific can evaluate and provide the technology roadmap to\n                            achieve business goals.</p>\n                          <a href=\"javascript:void(0)\" (click)=\"open(ds)\">Read more</a>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-lg-4 col-md-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use xlink:href=\"#icon_bi\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>Business Intelligence</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>Ingest, extract, and create powerful predictive visualizations for end users. Transform\n                            complex and unstructured data to derive pertinent insights required for growth from text,\n                            time-series, customer</p>\n                          <a href=\"javascript:void(0)\" (click)=\"open(bi)\">Read more</a>\n                        </div>\n                      </div>\n                    </div>\n\n\n                    <ng-template #dsa let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Data Science & Analytics</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"panel\">\n                          <div class=\"panel-body center dsa-popup\">\n                            <p> We use specific domain knowledge to help solve complex and novel business problems by\n                              deploying data-driven and AI systems into production. By working with stakeholders from\n                              initial data strategy & employing a holistic approach to our services, we combine the\n                              latest technical advances, real-world expertise, AI engineering, and an understanding of\n                              business and data requirements to generate operational value.</p>\n                            <h2>What is Data Science Consulting?</h2>\n                            <div class=\"row\">\n                              <div *ngFor=\"let item of sevicesInfo\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                                <div class=\"panel servic-info\">\n                                  <div class=\"panel-heading\">\n                                    <div class=\"icon-circle {{item.color}}\">\n                                      <i class=\"icon icon-medium\">\n                                        <svg focusable=\"false\">\n                                          <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                        </svg>\n                                      </i>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                    <ng-template #ds let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Data Strategy</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body ds-popup\">\n                        <div class=\"panel\">\n                          <div class=\"panel-body\">\n                            <h4 class=\"center\">Put our elite resources in conversation with your top decision makers to\n                              collaboratively discover the optimal path to your analytics goals. We make the important\n                              data insights operational in your firm.</h4>\n                            <p>SFL takes an integrative approach where we look both holistically at your entire business\n                              and all its important individual components. There are many examples of unstructured data\n                              in businesses, and we can analyze and interpret it, to help identify sets that you can\n                              then monetize. We leverage our expertise to better use that data to streamline existing\n                              pipelines and generate revenue. We use the best practices approach and offer a customized\n                              diagnostic and decision service to implement the resultant analysis for each venture.</p>\n                            <h4>Data Strategy</h4>\n                            <ul class=\"info-bar\">\n                              <li>Data Strategy starts with the understanding of your business objectives and goals.\n                              </li>\n                              <li>From here SFL will work within your current framework and use data based methods to\n                                identify current and potential business capabilities.</li>\n                              <li>Our goal is to determine a custom prioritized roadmap, make recommendations driven by\n                                business value, and implement them for your organization.</li>\n                            </ul>\n\n                            <h4>Enterprise Strategy</h4>\n                            <ul class=\"info-bar\">\n                              <li>Identify the specific types of information that need to be managed</li>\n                              <li>Determine the organizational ownership, implementation, and promotion of data systems\n                              </li>\n                              <li>Demonstrate and champion the cause of using such data assets to drive business growth\n                              </li>\n                              <li>Initialize the collection, characterization, and predictive analytics to make growth\n                                sustained</li>\n                              <li>Identify key enterprise challenges and work with executives to overcame possible pain\n                                points</li>\n                              <li>Iterate and implement, providing guidance on future development and growth\n                                opportunities</li>\n\n                            </ul>\n\n                            <p>\n                              SFL champions the use of data and analytics to realize strategic insights to help drive\n                              cross-business unit initiatives focused primarily on revenues generation, effectiveness,\n                              and efficiencies.\n                            </p>\n\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                    <ng-template #bi let-modal>\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Business Intelligence</h4>\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"panel\">\n                          <div class=\"panel-body bi-info\">\n                            <h2 class=\"center\">Business Intelligence</h2>\n                            <div class=\"row\">\n                              <div *ngFor=\"let item of businessIntel\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                                <div class=\"panel servic-info\">\n                                  <div class=\"panel-heading center\">\n                                    <div class=\"icon-circle\">\n                                      <i class=\"icon icon-medium\">\n                                        <svg focusable=\"false\">\n                                          <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                        </svg>\n                                      </i>\n                                    </div>\n                                    <p>{{item.title}}</p>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <p> SFL's consultants help businesses make better decisions. We provide the agility of an\n                              individualized business intelligence tools with enterprise-level monitoring and\n                              governance. As top authorities in business intelligence and data warehousing, we structure\n                              solutions to optimize your ability to leverage data.</p>\n\n\n                          </div>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li>\n\n         \n\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div [ngbNavOutlet]=\"nav\"></div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-5 col-md-6 col-sm-12 copyright-note\">\n                <div class=\"logo\">\n                    <i class=\"icon icon-small\">\n                        <svg focusable=\"false\">\n                            <use xlink:href=\"#icon_logoFlat\"></use>\n                        </svg>\n                      </i>\n                </div>\n                <p>\n                    ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\n                </p>\n            </div>\n\n            <div class=\"col-lg-2 col-md-3 col-sm-12\">\n                <h5>Quick Links</h5>\n                <ul class=\"footer-li\">\n                    <li>\n                        <a routerLink=\"OurProduct\" routerLinkActive=\"active\" skipLocationChange=true>Our\n                            Product</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Advance\n                            Solutions</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"ManagedServices\" routerLinkActive=\"active\" skipLocationChange=true>Managed Services</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"Company\" routerLinkActive=\"active\" skipLocationChange=true>COMPANY</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"Career\" routerLinkActive=\"active\" skipLocationChange=true>CAREER</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"Contactus\" routerLinkActive=\"active\" skipLocationChange=true>CONTACT US</a>\n                    </li>\n                </ul>\n                <div class=\"social-net\">\n\n                    <ul>\n                        <li><a href=\"https://www.facebook.com\" target=\"_blank\">\n                                <i class=\"icon icon-ex-small\">\n                                    <svg focusable=\"false\">\n                                        <use xlink:href=\"#icon_facebook\"></use>\n                                    </svg>\n                                </i>\n                            </a>\n                        </li>\n                        <li><a href=\"https://www.instagram.com\" target=\"_blank\">\n                                <i class=\"icon icon-ex-small\">\n                                    <svg focusable=\"false\">\n                                        <use xlink:href=\"#icon_instagram\"></use>\n                                    </svg>\n                                </i>\n                            </a>\n                        </li>\n                        <li><a href=\"https://www.twitter.com\" target=\"_blank\">\n                                <i class=\"icon icon-ex-small\">\n                                    <svg focusable=\"false\">\n                                        <use xlink:href=\"#icon_twitter\"></use>\n                                    </svg>\n                                </i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n\n            <div class=\"col-lg-5 col-md-3 col-sm-12 map\">\n                    <img src=\"assets/images/map.png\" alt=\"Map\">\n             </div>\n        </div>\n    </div>\n    <!-- /.container -->\n    <div class=\"copyright\">\n        <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <p>\n                    <span>All rights reserved by Arkedge Technologies Pvt. Ltd.</span>\n                </p>\n            </div>\n            </div>\n            </div>\n    </div>\n</footer>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n<div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"home\" skipLocationChange=true>\n      <i class=\"icon icon-small\">\n        <svg focusable=\"false\">\n          <use xlink:href=\"#icon_logoFlat\"></use>\n        </svg>\n      </i>\n      <div class=\"company-info\">\n        <span class=\"company-name\">ARKEDGE</span>\n        <span class=\"company-type\">TECHNOLOGIES</span>\n      </div>\n    </a>\n    <ul class=\"navbar-nav-list\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"OurProduct\" routerLinkActive=\"active\" skipLocationChange=true>Product</a>\n      </li>\n\n     \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"Advancesolution\" routerLinkActive=\"active\" skipLocationChange=true>Advance\n          Solutions</a>\n      </li>\n      <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"ai\" routerLinkActive=\"active\" skipLocationChange=true>AI & AUTOMATION</a>\n    </li>\n    \n      <li class=\"nav-item nav-dropdown-list\">\n        <a class=\"nav-link\" (mouseover)=\"changeStyle()\">Managed Services</a>\n        <ul class=\"sub-nav\" #dropDown>\n          <li class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-8 col-md-8 col-sm-12\">\n                <div class=\"row\">\n                  <div class=\"col-lg-4 col-md-4 col-sm-12\" *ngFor=\"let list of managedService\">\n                     <h6> {{list.name | createSpace}}</h6>\n                      <li class=\"inner-list\" *ngFor=\"let inlist of list.managedServiceList; index as i\">\n                        <a routerLink=\"{{list.name}}\" routerLinkActive=\"active\" skipLocationChange=true (click)=\"getUrl(i+1, inlist.name);\">{{inlist.name | createSpace}}</a>\n                      </li>\n              </div>\n  </div>\n  </div>\n  <div class=\"col-lg-4 col-md-4 col-sm-12\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n         <a class=\"nav-link\" routerLink=\"Technology\" routerLinkActive=\"active\" skipLocationChange=true>\n          <img src=\"assets/images/inner-banner-technology.png\">\n            Technology\n          </a>\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n          <a class=\"nav-link\" routerLink=\"Industries\" routerLinkActive=\"active\" skipLocationChange=true>\n          <img src=\"assets/images/inner-banner-industries.png\">\n            Industries\n          </a>\n      </div>\n    </div>\n  </div>\n\n  </div>\n  </li>\n  </ul>\n  </li>\n\n  <!-- <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"Company\" routerLinkActive=\"active\" skipLocationChange=true>COMPANY</a>\n  </li> -->\n  <li class=\"nav-item\">\n    <a class=\"nav-link contactUs\" routerLink=\"Contactus\" routerLinkActive=\"active\" skipLocationChange=true>\n      <i class=\"icon icon-small\">\n        <svg focusable=\"false\">\n          <use xlink:href=\"#icon_contactUs\"></use>\n        </svg>\n      </i>\n    </a>\n  </li>\n  <li class=\"nav-item tele-no email\">\n    <a class=\"nav-link\" href=\"mailto:info@arkedge.com\">\n      <i class=\"icon icon-small\">\n        <svg focusable=\"false\">\n          <use xlink:href=\"#icon_Email\"></use>\n        </svg>\n      </i>\n    </a>\n  </li>\n  <li class=\"nav-item tele-no\">\n    <a class=\"nav-link\">\n      <i class=\"icon icon-small\">\n        <svg focusable=\"false\">\n          <use xlink:href=\"#icon_phone\"></use>\n        </svg>\n      </i>\n      +91 9029290808\n    </a>\n  </li>\n  <li class=\"nav-item quick-link\">\n    <a class=\"nav-link\" (click)=\"slideToggel()\">\n      <i class=\"icon icon-ex-small\">\n        <svg focusable=\"false\">\n          <use xlink:href=\"#icon_menu\"></use>\n        </svg>\n      </i>\n    </a>\n  </li>\n  </ul>\n</div>\n</nav>\n\n<div class=\"slider-menu\" [ngClass]=\"isOpen ? '' : 'active'\">\n  <div class=\"slider-menu-header\">\n  <a class=\"close-slide\" (click)=\"slideToggel()\">\n    <i class=\"icon icon-ex-small\">\n      <svg focusable=\"false\">\n        <use xlink:href=\"#icon_close\"></use>\n      </svg>\n    </i>\n  </a>\n\n  <a class=\"navbar-brand\">\n    <i class=\"icon icon-small\">\n      <svg focusable=\"false\">\n        <use xlink:href=\"#icon_logo_color\"></use>\n      </svg>\n    </i>\n    <div>\n      <span class=\"company-name\">ARKEDGE</span>\n      <span class=\"company-type\">TECHNOLOGIES</span>\n    </div>\n  </a>\n</div>\n  <ul>\n    <li *ngFor=\"let item of list; index as i\" class=\"menu-list\">\n      <a (click)=\"slideToggel()\" routerLink=\"{{item.name}}\" routerLinkActive=\"active\" skipLocationChange=true>{{item.name | createSpace}}</a>\n    </li>\n  </ul>\n  <div class=\"slider-footer-contact\">\n    <a class=\"nav-link\" href=\"mailto:info@arkedge.com\">\n      <i class=\"icon icon-ex-small\">\n        <svg focusable=\"false\">\n          <use xlink:href=\"#icon_Email\"></use>\n        </svg>\n      </i>\n      info@arkedge.com\n    </a>\n  \n    <a class=\"nav-link\">\n      <i class=\"icon icon-ex-small\">\n        <svg focusable=\"false\">\n          <use xlink:href=\"#icon_phone\"></use>\n        </svg>\n      </i>\n      +91 9029290808\n    </a>\n    </div>\n</div>\n\n<div class=\"overlay\" [ngClass]=\"isOpen ? '' : 'active'\" (click)=\"slideToggel()\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-banner\">\n    <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\" [pauseOnHover]=\"pauseOnHover\"\n        (slide)=\"onSlide($event)\">\n        <ng-template ngbSlide *ngFor=\"let info of banner; index as i\">\n            <div class=\"container\">\n                <div class=\"carousel-caption\">\n                    <h1>{{info.title}}</h1>\n                    <h1>{{info.title_2}}</h1>\n                    <h3>{{info.description}}</h3>\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"lernmore();\">LEARN MORE</button>\n                    <button type=\"submit\" class=\"btn btn-warning\" (click)=\"btnClick();\">CONTACT US</button>\n                </div>\n                <div class=\"info-img\">\n                    <img src=\"assets/images/Home_banner_0{{i+1}}.png\" alt=\"My image {{i + 1}} description\">\n                    <!-- <i class=\"icon icon-big\">\n                        <svg focusable=\"false\">\n                            <use attr.xlink:href=\"{{info.icon}}\"></use>\n                        </svg>\n                    </i>\n                    -->\n                </div>\n            </div>\n            <div class=\"picsum-img-wrapper\">\n                <img src=\"assets/images/banner-1.jpg\" alt=\"My image {{i + 1}} description\">\n            </div>\n\n        </ng-template>\n    </ngb-carousel>\n</div>\n\n<section class=\"section-short-info\">\n    <div class=\"container\">\n    <div class=\"row\">\n        <div *ngFor=\"let item of shortInfo; index as i\" class=\"col col-lg-3 col-md-3 col-sm-12 panel-container\">\n            <div class=\"panel\">\n                <div class=\"panel-body\">\n                    <p>{{item.description}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</section>\n\n<section class=\"section-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 center\">\n                <h1>Expand Your Business Through a <span class=\"heading-highlight\">Strong Virtual Presence</span></h1>\n                <h6>\n                    <b>The ultimate objective behind our every move is to give our customers utmost satisfaction with\n                        our\n                        quality services and support.</b><br>\n                    We try the best possible way out to provide our customers with top-notch services and at affordable\n                    rates. <br>So, give us a Oppurtunity to serve you !\n                </h6>\n            </div>\n            <div *ngFor=\"let item of solution; index as i\" class=\"col-lg-4 col-md-4 col-sm-12 panel-container\">\n                <div class=\"panel\" (click)=\"getUrl(1, item.titlelink);\">\n                    <div class=\"panel-front {{item.color}}\">\n                        <div class=\"panel-heading\">\n                            <div class=\"icon-circle circle-bg\">\n                                <i class=\"icon icon-medium\">\n                                    <svg focusable=\"false\">\n                                        <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                    </svg>\n                                </i>\n                            </div>\n                            <h5>{{item.title}}</h5>\n                        </div>\n                        <div class=\"panel-body\">\n\n                            <p *ngFor=\"let data of item.list\">{{data.name}}</p>\n                        </div>\n                    </div>\n                    <div class=\"panel-back {{item.color}}\">\n                        <h5>{{item.title}}</h5>\n                        <p>{{item.description}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"section-our-products\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 center\">\n                <h1>OUR <span class=\"heading-highlight\">PRODUCTS</span></h1>\n            </div>\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig2\">\n                <div ngxSlickItem class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <div class=\"panel\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\n                                <img src=\"assets/images/products/revenuemaximizer.png\">\n                            </div>\n                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                <h5>RevenueMaximizer</h5>\n                                <p>\n                                    Cloud based SaaS platform that enables healthcare organization to maximize their revenue potential by finding anomalies in billing charges with right amalgamation of advanced AI models and traditional rule-based engine. \n                                </p>\n                                <ul>\n                                    <li>\n                                        Flexible package offerings\n                                    </li>\n                                    <li>\n                                        Rich & extensible feature\n                                    </li>\n                                    <li>\n                                        Powerful & Responsive design\n                                    </li>\n                                </ul>\n                                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"btnOurProduct();\">KNOW MORE</button>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div ngxSlickItem class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <div class=\"panel\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\n                                <img src=\"assets/images/products/studioedge.png\">\n                            </div>\n                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                <h5>StudioEdge </h5>\n                                <p>\n                                    End to end Big Data Analytics platform designed to ingest huge data volume comprising varying format including structure, semi-structure and unstructured datasets and transform them into meaningful and predictive insights:\n                                </p>\n                                <ul>\n                                    <li>\n                                        StudioW for developers\n                                    </li>\n                                    <li>\n                                        StudioM for administrator \n                                    </li>\n                                    <li>\n                                        StudioK for business user\n                                    </li>\n                                </ul>\n                                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"btnOurProduct();\">KNOW MORE</button>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div ngxSlickItem class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <div class=\"panel\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6 col-md-6 col-sm-12 v-flex\">\n                                <img src=\"assets/images/products/dataflow.png\">\n                            </div>\n                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                <h5>DataFlow</h5>\n                                <p>\n                                    Powerful cloud-based solution for creating the data pipeline, setting and managing data transformation at various stages and automating the entire ETL workflow end to end through a modern web-based user interface:\n                                </p>\n                                <ul>\n                                    <li>\n                                        Rich set of connectors\n                                    </li>\n                                    <li>\n                                        Configurable feature options \n                                    </li>\n                                    <li>\n                                        Offers flexible AI capability\n                                    </li>\n                                </ul>\n                                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"btnOurProduct();\">KNOW MORE</button>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ngx-slick-carousel>\n        </div>\n    </div>\n</section>\n\n<section class=\"section-sevices\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 center\">\n                <h1>INDUSTRIES <span class=\"heading-highlight\">WE SERVE</span></h1>\n                <h6>\n                    <b>We ensure excellence in service through understanding of our client's business and their unique\n                        requirements.</b><br>\n\n                    Due to our close relationships and constant interactions with clients,<br>\n\n                    we have developed solid understanding and insight in our focus industries that include:\n                </h6>\n            </div>\n\n            <div *ngFor=\"let item of sevices\" class=\"col-lg-4 col-md-4 col-sm-12\">\n                <div class=\"panel\">\n                    <div class=\"panel-heading\">\n                        <div class=\"icon-circle {{item.color}}\">\n                            <i class=\"icon icon-medium\">\n                                <svg focusable=\"false\">\n                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                </svg>\n                            </i>\n                        </div>\n                        <h5>{{item.title}}</h5>\n                    </div>\n                    <div class=\"panel-body\">\n                        <p>{{item.description}}</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-12 center\">\n                <button type=\"submit\" class=\"btn btn-warning\" (click)=\"viewMore();\">View More</button>  \n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- <section class=\"section-projects\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 center\">\n                <h1>OUR RECENT<span class=\"heading-highlight\"> SOLUTIONS</span></h1>\n                <h6>\n                    <b>We bring powerful TOOLS for enhance your productivity.</b><br>\n\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.<br> Proin\n                    gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.\n                </h6>\n            </div>\n        </div>\n        <div class=\"project-grid\">\n            <li *ngFor=\"let info of projects; index as i\" class=\"p2\">\n                <a>\n                    <figure>\n                        <img src=\"assets/images/project/project-{{i + 1}}.jpg\" alt=\"Experience\">\n                        <div class=\"show-more-overlay\"></div>  \n                        <figcaption>\n                            <h2 class=\"show_more-title\">{{info.title}}</h2>\n                            <p class=\"show_more-desc\">\n                                {{info.description}}\n                            </p>\n                            <button *ngIf=\"i === 0\" type=\"submit\" class=\"btn btn-primary\">LEARN MORE</button>\n                        </figcaption>\n                    </figure>\n                </a>\n            </li>\n        </div>\n    </div>\n</section> -->\n\n<div class=\"clear-float\"></div>\n<section class=\"clients\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 center\">\n                <h1>HAPPY <span class=\"heading-highlight\">CLIENTS</span></h1>\n                <h6>\n                    consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus\n                    accumsan et viverra justo commodo. <br>Proin sodales pulvinar tempor.lacus accumsan et viverra justo\n                    commodo. Proin sodales pulvinar tempor.</h6>\n            </div>\n\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n                <div ngxSlickItem *ngFor=\"let client of client; index as i\" class=\"slide col-lg-3 col-md-3 col-sm-12\">\n                    <img src=\"assets/images/clientlogo/logo{{i+1}}.png\" alt=\"\" width=\"100%\">\n                </div>\n            </ngx-slick-carousel>\n\n            <!-- <div *ngFor=\"let client of client; index as i\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                <img src=\"{{client.img}}-{{i+1}}.jpg\" alt=\"client\">\n            </div> -->\n\n        </div>\n    </div>\n</section>\n\n<section class=\"testimonials\">\n    <img src=\"assets/images/testimonials.jpg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 center\">\n                <h1>TESTIMONIALS</h1>\n                <ngb-carousel #carousel interval=\"5000\" [showNavigationArrows]=\"showNavigationArrows\"\n                    [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\n                    <ng-template ngbSlide *ngFor=\"let info of testimonials; index as i\">\n                        <p>\n                            {{info.clientView_1}}\n                        </p>\n                        <p>\n                            {{info.clientView_2}}\n                        </p>\n                        <p>\n                            {{info.clientView_3}}\n                        </p>\n                        <p>\n                            - {{info.clientName}}\n                        </p>\n\n                    </ng-template>\n                </ngb-carousel>\n\n            </div>\n\n        </div>\n    </div>\n</section>\n<section class=\"contact-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <h1>WHAT SET US <span class=\"heading-highlight\">APART</span></h1>\n                <p class=\"set-part\">\n                    We ensure excellence in service through understanding of our client's business and their unique\n                    requirements.\n\n                    Due to our close relationships and constant interactions with clients,\n\n                    we have developed solid understanding and insight in our focus industries that include:\n                </p>\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <div>\n                            <h6>Address</h6>\n                            <p>703, Wing \"B\", Galaxy L.X.APT.<br>\n\n                                Navre Park, Ambarnath (W),<br>\n\n                                Thane-421501, Maharashtra,<br>\n\n                                INDIA</p>\n\n                            <h6>Contact</h6>\n                            <p>\n                                <a class=\"email-link\" href=\"mailto:info@arkedge.com\">info@arkedge.com</a><br>\n                                Calling : +91 9029290808\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <div>\n                            <h6>Working Hours</h6>\n                            <p>Monday To Friday: 11AM - 8PM<br>\n\n                                Week-End: 11 AM - 2PM</p>\n\n\n                            <h6>Socials</h6>\n                            <div class=\"social-net\">\n\n                                <ul>\n                                    <li><a href=\"https://www.facebook.com\" target=\"_blank\">\n                                            <i class=\"icon icon-ex-small\">\n                                                <svg focusable=\"false\">\n                                                    <use xlink:href=\"#icon_facebook\"></use>\n                                                </svg>\n                                            </i>\n                                            <span>Facebook</span>\n                                        </a>\n                                    </li>\n                                    <li><a href=\"https://www.instagram.com\" target=\"_blank\">\n                                            <i class=\"icon icon-ex-small\">\n                                                <svg focusable=\"false\">\n                                                    <use xlink:href=\"#icon_instagram\"></use>\n                                                </svg>\n                                            </i>\n                                            <span>Tweeter</span>\n                                        </a>\n                                    </li>\n                                    <li><a href=\"https://www.twitter.com\" target=\"_blank\">\n                                            <i class=\"icon icon-ex-small\">\n                                                <svg focusable=\"false\">\n                                                    <use xlink:href=\"#icon_twitter\"></use>\n                                                </svg>\n                                            </i>\n                                            <span>Instragram</span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <h1>GET IN <span class=\"heading-highlight\">TOUCH</span></h1>\n                <form>\n                    <div class=\"form-group\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" name=\"name\">\n                        </div>\n\n                    </div>\n\n                    <div class=\"row form-group\">\n                        <div class=\"col\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Your Mail\" name=\"yourMail\">\n                        </div>\n                        <div class=\"col\">\n                            <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" name=\"phone\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\" name=\"subject\">\n                    </div>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\"></textarea>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\n                    <button type=\"submit\" class=\"btn btn-warning\">RESET</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"cookies-setting\" [ngClass]=\"isOpen ? '' : 'hide'\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col col-lg-9 col-md-3 col-sm-12\">\n                <p>This website uses cookies to enhance site navigation and improve functionality, analyze site usage,\n                    and assist in our marketing and advertising efforts. Please click \"I accept cookies\" to let us know\n                    you're okay with our use of all cookies. For more information please see the cookies section of our\n                    Privacy Policy.</p>\n            </div>\n            <div class=\"col col-lg-3 col-md-3 col-sm-12\">\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addCookies();\">I Accept Cookies</button>\n            </div>\n        </div>\n    </div>\n</section>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-industries.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Industries</h1>\n                    <h6>Transforming industries with smarter ways</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-advance-solution\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-9 col-md-9 col-sm-12 div-center center\">\n                <p class=\"running-text\">\n                    ARKEDGE technologies approaches each business as an individual so\n                    that we can provide you with IT solutions that suit your needs.\n                    We offer holistic solutions, consisting of different offerings.\n                </p>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"section-industy-info\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <!-- <div *ngFor=\"let data of industryInfo\" class=\"col-lg-4 col-md-4 col-sm-12 col\">\n                <div class=\"panel\">\n                    <div class=\"panel-heading\">\n                        <i class=\"icon icon-large\">\n                            <svg focusable=\"false\">\n                                <use attr.xlink:href=\"#{{data.icon}}\"></use>\n                            </svg>\n                        </i>\n                    </div>\n                    <div class=\"panel-body\">\n                        <p>{{data.title}}</p>\n                    </div>\n                </div>\n            </div> -->\n\n            <div *ngFor=\"let item of sevices\" class=\"col-lg-4 col-md-4 col-sm-12 section-sevices center\">\n                <div class=\"panel\">\n                    <div class=\"panel-heading\">\n                        <div class=\"icon-circle {{item.color}}\">\n                            <i class=\"icon icon-medium\">\n                                <svg focusable=\"false\">\n                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                </svg>\n                            </i>\n                        </div>\n                        <h5>{{item.title}}</h5>\n                    </div>\n                    <div class=\"panel-body\">\n                        <p>{{item.description}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/managedservice/managedservice.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/managedservice/managedservice.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-manage-service.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Managed Services</h1>\n                    <h6>Softwares : Data Life-cycle Management : IT Staffing & Training</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-manage-service\">\n    <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n        <h6 class=\"center career\">\n            ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.        </h6>\n        \n            <h5>\n                Arkedge Technologies provide following services\n            </h5>\n        \n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n         <ul>\n               <li>\n                Product Engineering\n               </li>\n               <li>\n                Application Development\n                </li>\n               <li>\n                UX/UI Development\n                </li>\n               <li>\n                Software Testing & QA\n                </li>\n               <li>\n                Cleanse Dataset\n               </li>\n               <li>\n                Data Mapping & Conversion\n                </li>\n               <li>\n                Staffing Servicesdevelopment.\n               </li>\n           </ul>\n        </div>\n        \n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <img src=\"assets/images/manage-service-1.png\">\n        </div>\n    </div>\n\n <div class=\"row\">\n\n        <div *ngFor=\"let item of solution; index as i\" class=\"col-lg-6 col-md-6 col-sm-12 panel-container\">\n            <div class=\"panel\">\n               <div class=\"panel-front\">\n                    <div class=\"panel-heading\">\n                       <img src=\"assets/images/managservice/ourServices-{{i+1}}.png\">\n                    </div>\n                    <div class=\"panel-body\">\n\n                        <p>{{item.description}}</p>\n                    </div>\n                </div>\n               <div class=\"panel-back {{item.color}}\">\n                    <h5>{{item.title}}</h5>\n                    <p>{{item.description_2}}</p>\n                </div> \n            </div>\n        </div>\n</div>\n</div>\n</section>    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-news.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>News Update</h1>\n                    <h6>News, Press release and Media reports</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<section class=\"section-news inner-nav-tab\">\n    <div class=\"tab-navigation\">\n        <div class=\"col-sm-12\">\n            <div class=\"container\">\n                <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n                    <li [ngbNavItem]=\"1\">\n                        <a ngbNavLink>News</a>\n                        <ng-template ngbNavContent>\n\n                            <section>\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                    <li *ngFor=\"let data of news; index as i\" class=\"p2 grid-li\">\n                        <div class=\"panel\">\n                            <div class=\"panel-heading\">\n                                <img src={{data.img}}-{{i+1}}.jpg alt=\"{{data.subtitle}}\">\n                            </div>\n                            <div class=\"panel-body\">\n                                <p><b>{{data.desc_1}}</b></p>\n                                <p>{{data.desc_2}}</p>\n                            </div>\n                        </div>\n                    </li>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"news-video\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n\n                <div class=\"video\">\n                    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\" frameborder=\"0\"\n                        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                        allowfullscreen></iframe>\n                </div>\n\n                <h6 class=\"center\">\n                    Arkedge Technologies has a very ambitious plan for future and we are looking for energetic,\n                    motivated, ambitious team players who relish the challenge of joining a growing business in the\n                    field of IT, Resourcing and Training. You will have the opportunity to grow professionally and\n                    financially.\n                </h6>\n            </div>\n        </div>\n    </div>\n</section>\n</ng-template>\n</li>\n<li [ngbNavItem]=\"2\">\n    <a ngbNavLink>Events</a>\n    <ng-template ngbNavContent>\n\n    </ng-template>\n</li>\n<li [ngbNavItem]=\"3\">\n    <a ngbNavLink>Webinars</a>\n    <ng-template ngbNavContent>\n\n    </ng-template>\n</li>\n<li [ngbNavItem]=\"4\">\n    <a ngbNavLink>Press Releases</a>\n    <ng-template ngbNavContent>\n        <div class=\"press-release-section\">\n            <section>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-sm-12 col-md-10 div-center center\">\n                            <p class=\"running-text\">\n                                A great leader's courage to fulfill his vision comes from passion, not position.\n                            </p>\n                            <p>\n                                At ARKEDGE, we all aspire to be tomorrow's leader. Individually we are pathfinders and\n                                collectively we are a doer (achiever).\n                                <br>\n                                We are passionate about everything that we do and so do it the best way.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            <section class=\"press-release-info\">\n\n                <div class=\"container\">\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-12\" *ngFor=\"let info of pressRelease; index as i\">\n                            <p>\n                                <span class=\"span\">\n                                    <img class=\"div-{{i+1}}\" src=\"assets/images/leadership/person{{i+1}}.png\"\n                                        align=\"{{info.align}}\">\n                                    <span class=\"title-name\">{{info.name}}</span>\n                                    <span class=\"title-info\">{{info.info}}</span>\n                                </span>\n\n                                <span class=\"v-text-align\">\n                                    <p>\n                                        {{info.desc}}\n                                    </p>\n                                </span>\n                            </p>\n\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n        </div>\n    </ng-template>\n</li>\n<li [ngbNavItem]=\"5\">\n    <a ngbNavLink>Video Gallery</a>\n    <ng-template ngbNavContent>\n        <section class=\"video-gallery\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"video\">\n                            <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\"\n                                frameborder=\"0\"\n                                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"video\">\n                            <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\"\n                                frameborder=\"0\"\n                                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"video\">\n                            <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\"\n                                frameborder=\"0\"\n                                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                allowfullscreen></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"video\"> \n                            <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/zmEG-5zEmPw\"\n                                frameborder=\"0\"\n                                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                allowfullscreen></iframe>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </ng-template>\n</li>\n</ul>\n\n</div>\n</div>\n</div>\n<div [ngbNavOutlet]=\"nav\" class=\"mt-4\"></div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-ourproduct.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Our Products</h1>\n                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-product\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-md-8 div-center\">\n                <h6 class=\"center career\">\n                    ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\n                </h6>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"section-product-detail\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <h2>Revenue Maximizer</h2>\n                <p>\n                    Cloud based SaaS platform that enables healthcare organization to maximize their revenue potential by finding anomalies in billing charges with right amalgamation of advanced AI models and traditional rule-based engine. Some of the salient features of platform:\n                </p>\n                <ul>\n                    <li>\n                        Flexible package offerings to design right plan for your organization\n                    </li>\n                    <li>\n                        Rich & extensible feature capability through configuration\n                    </li>\n                    <li>\n                        Powerful & Responsive Web UI design to access insights from anywhere\n                    </li>\n                    <li>\n                        Cloud enabled multi-tenancy support to keep your data secure\n                    </li>\n                    <li>\n                        Feature at scale with containerized microservices architecture \n                    </li>\n                </ul>\n               \n                <a class=\"btn btn-warning mr-3\" (click)=\"getUrl(1, 'RevenueMaximizer');\">View Details</a>\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"inquery();\">Ask an Expert</button>\n             \n\n            </div>\n\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <img src=\"assets/images/products/revenuemaximizer_big.png\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <img src=\"assets/images/products/studioedge_big.png\">\n            </div>\n\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <h2>Studio Edge</h2>\n                <p>\n                    End to end Big Data Analytics platform designed to ingest huge data volume comprising varying format including structure, semi-structure and unstructured datasets and transform them into meaningful and predictive insights using industry curated advanced AI models. It offers powerful product modules for developer, administrator and business users to build solution for your organization needs:\n                </p>\n                <ul>\n                    <li>\n                       <b> StudioW</b> with rich IDE capability for developers to build end to end AI-ML based solution using historical data or real-time data streams\n                    </li>\n                    <li>\n                       <b>StudioM</b> for supervisor and administrator to completely manage and control of solutions deployed with version control capability\n                    </li>\n                    <li>\n                        <b>StudioK</b> for business user to build powerful reporting dashboard using analytical insights generated for the solutions\n                    </li>\n                </ul>\n                <a class=\"btn btn-warning mr-3\" (click)=\"getUrl(2, 'StudioEdge');\">View Details</a>\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"inquery();\">Ask an Expert</button>\n                </div>\n\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <h2>Data Flow</h2>\n                <p>\n                    Powerful cloud-based solution for creating the data pipeline, setting and managing data transformation at various stages and automating the entire ETL workflow end to end through a modern web-based user interface. Some of the key feature of the product:\n                </p>\n                <ul>\n                    <li>\n                        Rich set of connectors to ingest and work on data from sources\n                    </li>\n                    <li>\n                        Configurable feature options to build custom data pipeline\n                    </li>\n                    <li>\n                        Offers flexible AI capability to turn on ML models as per need\n                    </li>\n                </ul>\n                <a class=\"btn btn-warning mr-3\" (click)=\"getUrl(3, 'DataFlow');\">View Details</a>\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"inquery();\">Ask an Expert</button>\n            </div>\n\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <img src=\"assets/images/products/dataflow_big.png\">\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- <section class=\"section-product\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 center\">\n                <h1>Product Features</h1>\n                <h6>Transforming industries with smarter ways</h6>\n            </div>\n            <div class=\"col-sm-12\">\n                <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n                    <div ngxSlickItem *ngFor=\"let product of products; index as i\" class=\"slide\">\n                        <img src=\"assets/images/0{{i+1}}.png\" alt=\"\" width=\"100%\">\n                        <p class=\"col-sm-12 center\">{{product.title}}</p>\n                    </div>\n                </ngx-slick-carousel>\n            </div>\n        </div>\n    </div>\n</section> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productDetail/productDetail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productDetail/productDetail.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Product Detail</h1>\n                    <h6>{{tabName}}</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"manage-service-tab inner-nav-tab\">\n    <div class=\"tab-navigation\">\n        <div class=\"col-sm-12\">\n            <div class=\"container\">\n                <ul ngbNav #nav=\"ngbNav\" [activeId]=\"tabIndex\" class=\"nav-tabs\">\n                    <li [ngbNavItem]=\"1\">\n                        <a ngbNavLink (click)=\"title(1)\">Revenue Maximizer</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"product-detail\">\n                                <div class=\"container\">\n                                   <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                                <h2>Revenue Maximizer</h2>\n                                                <p>\n                                                    A SaaS (software-as-a-service) platform that helps healthcare provider to maximize their revenue potential by finding billing charge anomalies early in revenue cycle. The platform amalgamates advanced AI models with powerful rule-based engine to detect hidden and complex coding relationships and find the missing charges in the patient billing system. Some of the key feature offering of the platform:\n                                                </p>\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-12\">\n                                                       <ul class=\"info-bar\">\n                                                               <li *ngFor=\"let item of revenueMaximizer\">\n                                                                  {{item.title}}\n                                                                </li>\n                                                           </ul>\n                                                       </div> \n\n                                                       <div class=\"col-sm-12\">\n                                                        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"inquery();\">Ask an Expert</button>   \n                                                     </div>\n                                              </div>\n                                             </div>\n                                             <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                                <img src=\"assets/images/products/revenuemaximizer_big.png\">\n                                            </div>\n                                        </div>\n                                        \n                                      <section class=\"section-product\">\n                                        <div class=\"container\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-12 center\">\n                                                    <h1>Product Features</h1>\n                                                    <h6>Transforming industries with smarter ways</h6>\n                                                </div>\n                                                <div class=\"col-sm-12\">\n                                                    <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n                                                        <div ngxSlickItem *ngFor=\"let product of revenuemaximizerProd; index as i\" class=\"slide\">\n                                                            <img src=\"assets/images/products/slickImg/revenuemaximizer_0{{i+1}}.png\" alt=\"\" width=\"100%\">\n                                                            <p class=\"col-sm-12 center\">{{product.title}}</p>\n                                                        </div>\n                                                    </ngx-slick-carousel>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </section> \n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n                    <li [ngbNavItem]=\"2\">\n                        <a ngbNavLink (click)=\"title(2)\">Studio Edge</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"product-detail\">\n                                <div class=\"container\">\n                                   \n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                                <h2>Studio Edge</h2>\n                                                <p>\n                                                    A cutting edge highly scalable Big-Data platform that can help your organization to utilize enormous volume of data and transform them into meaningful business insights in real-time. Platform ingests structured, unstructured and semi-structured data from multiple sources, prepares data with automated workflows, facilitates data discovery, aggregates, manipulates, and generate predictive and description insights through a wide range of complex AI models using massive parallel processing engine. Some of the key feature of platform:\n                                                </p>\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-12\">\n                                                       <ul class=\"info-bar\">\n                                                               <li *ngFor=\"let item of revenueMaximizer\">\n                                                                  {{item.title}}\n                                                                </li>\n                                                           </ul>\n                                                       </div> \n                                                       <div class=\"col-sm-12\">\n                                                        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"inquery();\">Ask an Expert</button>   \n                                                     </div>\n                                              </div>\n                                             </div>\n                                \n                                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                                <img src=\"assets/images/products/studioedge_big.png\">\n                                            </div>\n                                        </div>\n                                       \n                                      <section class=\"section-product\">\n                                        <div class=\"container\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-12 center\">\n                                                    <h1>Product Features</h1>\n                                                    <h6>Transforming industries with smarter ways</h6>\n                                                </div>\n                                                <div class=\"col-sm-12\">\n                                                    <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n                                                        <div ngxSlickItem *ngFor=\"let product of studioedgeProd; index as i\" class=\"slide\">\n                                                            <img src=\"assets/images/products/slickImg/studioedge_0{{i+1}}.png\" alt=\"\" width=\"100%\">\n                                                            <p class=\"col-sm-12 center\">{{product.title}}</p>\n                                                        </div>\n                                                    </ngx-slick-carousel>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </section> \n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"3\">\n                        <a ngbNavLink (click)=\"title(3)\">Data Flow</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"product-detail\">\n                                <div class=\"container\">\n                                   \n                                        <div class=\"row\">\n                                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                                <h2>Data Flow</h2>\n                                                <p>\n                                                    A cloud-based solution that offers flexible data pipeline, starting from sourcing heterogeneous data, to improve data richness index by apply various data transformation stages, including profiling, normalization, classification to generate holistic view of various business insights for downstream consumption including analytics reporting and integration with other systems. \n                                                    Some of the key features that DataFlow product offers are:\n                                                </p>\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-12\">\n                                                       <ul class=\"info-bar\">\n                                                               <li *ngFor=\"let item of revenueMaximizer\">\n                                                                  {{item.title}}\n                                                                </li>\n                                                           </ul>\n                                                       </div> \n                                                       <div class=\"col-sm-12\">\n                                                       <button type=\"submit\" class=\"btn btn-primary\" (click)=\"inquery();\">Ask an Expert</button> \n                                                    </div>\n                                                    </div>\n                                             </div>\n                                \n                                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                                <img src=\"assets/images/products/dataflow_big.png\">\n                                            </div>\n                                        </div>\n                                      \n                                      <section class=\"section-product\">\n                                        <div class=\"container\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-12 center\">\n                                                    <h1>Product Features</h1>\n                                                    <h6>Transforming industries with smarter ways</h6>\n                                                </div>\n                                                <div class=\"col-sm-12\">\n                                                    <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n                                                        <div ngxSlickItem *ngFor=\"let product of dataflowProd; index as i\" class=\"slide\">\n                                                            <img src=\"assets/images/products/slickImg/dataflow_0{{i+1}}.png\" alt=\"\" width=\"100%\">\n                                                            <p class=\"col-sm-12 center\">{{product.title}}</p>\n                                                        </div>\n                                                    </ngx-slick-carousel>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </section> \n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div [ngbNavOutlet]=\"nav\"></div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n  <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n  <div class=\"page-title\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 center\">\n          <h1>SOFTWARE ENGINEERING</h1>\n          <h6>{{tabName}}</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section class=\"manage-service-tab inner-nav-tab\">\n  <div class=\"tab-navigation\">\n    <div class=\"col-sm-12\">\n      <div class=\"container\">\n        <ul ngbNav #nav=\"ngbNav\" [activeId]=\"tabIndex\" class=\"nav-tabs\">\n          <li [ngbNavItem]=\"1\">\n            <a ngbNavLink (click)=\"title(1)\">Product Engineering</a>\n            <ng-template ngbNavContent>\n              <section class=\"section-project-engineering\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <p class=\"running-text\">\n                        Competitive pressures, reduced time-to-market, increased demands of\n                        customers, and globalization are\n                        driving global product companies to explore the offshore route. A\n                        reliable offshore partner can play\n                        a key role from concept to the launch of the product. Product companies\n                        have increased their\n                        competitive advantage by partnering with offshore players for product\n                        development.\n                      </p>\n                      <p>\n                        We have been involved in architecting and building .NET driven business\n                        solutions right from the\n                        inception. Our .NET CoE has proven expertise in building world class\n                        products using the latest\n                        Microsoft® technologies and standards. Our knowledge of Microsoft® .NET\n                        technologies and product\n                        development methodologies enables us to work with customers across\n                        domains and successfully address\n                        their functional, usability, performance and scalability requirements.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </section>\n\n              <section class=\"methodologies\">\n                <img src=\"assets/images/managservice/methodologies.jpg\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12 center\">\n                      <h1>Our Methodology</h1>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <ul class=\"panel-container\">\n\n                      <li *ngFor=\"let item of solution; index as i\">\n                        <div class=\"icon-circle\">\n                          <i class=\"icon icon-medium\">\n                            <svg focusable=\"false\">\n                              <use attr.xlink:href=\"{{item.icon}}\"></use>\n                            </svg>\n                          </i>\n                        </div>\n                        <h6>{{item.title}}</h6>\n                        <ul class=\"info-bar\">\n                          <li>\n                            {{item.info}}\n                          </li>\n                        </ul>\n\n                      </li>\n                    </ul>\n\n                  </div>\n                </div>\n              </section>\n\n              <section class=\"engeering-grap\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <p>\n                        <img src=\"assets/images/managservice/engeering-grap.jpg\" align=\"right\">\n                        <span class=\"running-text\">\n                          We practice agile development methodologies to help you take advantage\n                          of emerging market\n                          opportunities. We develop software in time-boxed iterations; each\n                          iteration is a discrete project\n                          encompassing all the PDLC stages. Our agile software project is capable\n                          of releasing standalone\n                          working software at the end of each iteration.\n                        </span>\n                        <br><br>\n                        Our solution architects also help you realize your vision of services\n                        based products through\n                        implementation of the Service Oriented Architecture (SOA) approach. They\n                        provide consulting,\n                        implementation, and re-engineering of existing product architectures\n                        using the SOA framework<br><br>\n\n                        The software products industry depends on bringing new concepts, new\n                        versions and new features to\n                        the market quickly. At the same time, development costs must be low,\n                        predictable, and flexible. We\n                        can help you address these daunting and seemingly conflicting\n                        requirements for software products.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </section>\n\n\n              <section class=\"our-services-section\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <div class=\"container our-services\">\n                        <div class=\"row\">\n                          <div class=\"col-md-4 col-lg-4 col-sm-12 triangle\">\n                            <div class=\"v-center\">\n                              <div class=\"logo-circle\">\n                                <i class=\"icon icon-large\">\n                                  <svg focusable=\"false\">\n                                    <use xlink:href=\"#icon_logoFlat\"></use>\n                                  </svg>\n                                </i>\n                              </div>\n                              <h5>\n                                Arkedge Technologies<br>\n                                Services\n                              </h5>\n                            </div>\n                          </div>\n\n                          <div class=\"col-md-8 col-lg-8 col-sm-12 v-flex\">\n                            <ul>\n                              <li>\n                                Robust version design\n                              </li>\n                              <li>\n                                Cross-platform architecture\n                              </li>\n                              <li>\n                                Wide variety of integration requirements\n                              </li>\n                              <li>\n                                Comprehensive packaging\n                              </li>\n                              <li>\n                                Support over a range of environments\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n\n\n              <section class=\"engeering-grap\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <p>\n                        Our solution architects also help you realize your vision of services\n                        based products through\n                        implementation of the Service Oriented Architecture (SOA) approach. They\n                        provide consulting,\n                        implementation, and re-engineering of existing product architectures\n                        using the SOA framework\n                        <br> <br>\n                        The software products industry depends on bringing new concepts, new\n                        versions and new features to\n                        the market quickly. At the same time, development costs must be low,\n                        predictable, and flexible. We\n                        can help you address these daunting and seemingly conflicting\n                        requirements for software products.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </section>\n\n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"2\">\n            <a ngbNavLink (click)=\"title(2)\">Application Development</a>\n            <ng-template ngbNavContent>\n              <div class=\"container app-development\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <p>\n                      <img src=\"assets/images/managservice/app-dev-met.jpg\" align=\"right\">\n                      <span class=\"running-text\">\n                        Arkedge has a well-defined and mature application development service\n                        offering. Arkedge application development model covers all phases of the\n                        Software Development Life Cycle (SDLC), beginning with transforming business\n                        requirements into project functional requirements, development, quality,\n                        testing, implementation, training and application support. Our distributed\n                        delivery methodology effectively leverages the onsite subject matter\n                        expertise and the offshore development teams, resulting in cost-effective\n                        solutions. Each of the development phases can be defined with metrics and\n                        subsequently tracked with the monitoring tools and well defined project\n                        management and execution processes.\n                      </span>\n                      <br>\n                      <br>\n                      Arkedge provides outsourced software development services for in-house\n                      applications, across the project lifecycle. We partner with you from\n                      internal proposals and budgeting, through project approvals, all the way to\n                      delivery, training, maintenance and support. Our flexible offshore software\n                      development model allows companies to maximize their ROI, while maintaining\n                      complete control over projects.\n                      <br>\n                      <br>\n\n                      At each stage of the application development cycle we bring people, process\n                      and technology expertise to pro-actively guide you through the challenges of\n                      meeting application requirements within budget, time and quality. A key\n                      aspect of Arkedge's application development methodology is the early and\n                      extensive use of screen mockups or wireframes. In our experience, mockups\n                      and wireframes speed up initial approvals, improve the reliability of\n                      requirements gathering and documentation, and greatly enhance user\n                      acceptance and utilization of the delivered application.\n\n                    </p>\n                  </div>\n                </div>\n              </div>\n\n              <section class=\"about-key-diff\">\n                <div class=\"container\">\n                  <div class=\"row\">\n\n                    <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                      <h1>Key Differentiators</h1>\n                      <ul>\n                        <li *ngFor=\"let key of keydiff\">\n                          {{key.list}}\n                        </li>\n                      </ul>\n                    </div>\n\n                    <div class=\"col-md-4 col-lg-4 col-sm-12 v-flex\">\n                      <img src=\"assets/images/managservice/key-difference.png\">\n                    </div>\n\n                  </div>\n                </div>\n              </section>\n\n              <section>\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <p>\n                        Systems modelling with analysis and design using UML tools Customers can\n                        be rest assured that Arkedge will provide technical follow-through\n                        during the planning, design, development and deployment of every\n                        project. It also offers on-going management, maintenance and monitoring\n                        of all developed applications and the systems they run on.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </section>\n\n            </ng-template>\n          </li>\n\n          <!-- <li [ngbNavItem]=\"3\">\n            <a ngbNavLink (click)=\"title(3)\">DATA ENGINEERING</a>\n            <ng-template ngbNavContent>\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 center\">\n                    <h2>Our Data Engineering Service Offerings</h2>\n                    <p>We enable our clients to unleash the power of data and maximize the outcomes\n                      through modern data architectures.</p>\n                  </div>\n                </div>\n              </div>\n\n              <section class=\"data-eng\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of dataEngi\" class=\"col-md-4 col-lg-4 col-sm-12\">\n                      <div class=\"panel center\">\n                        <div class=\"panel-heading\">\n                          <div class=\"icon-circle\">\n                            <i class=\"icon icon-large\">\n                              <svg focusable=\"false\">\n                                <use attr.xlink:href=\"{{item.icon}}\"></use>\n                              </svg>\n                            </i>\n                          </div>\n                          <h5>{{item.title}}</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>{{item.description}}</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </ng-template>\n          </li> -->\n\n          <li [ngbNavItem]=\"4\">\n            <a ngbNavLink (click)=\"title(4)\">UX/UI Development</a>\n            <ng-template ngbNavContent>\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 center\">\n                    <h1>WHAT IS USER <span class=\"heading-highlight\">EXPERIENCE DESIGN</span></h1>\n                    <p class=\"running-text center\">\n                      User Experience is the value that you provide to your user when he is using your product.\n                    </p>\n                    <p class=\"quotes\">\n                      “User Experience Design (UXD or UED) is the process of enhancing user satisfaction with a product\n                      by improving the usability, accessibility, and pleasure provided in the interaction with the\n                      product.” — Wikipedia\n                    </p>\n                    <h2>Our 5 Steps <span class=\"heading-highlight\">UI/UX Design process</span></h2>\n                    <p>User experience design process is an iterative method that helps you continuously improve and\n                      polish your designs.\n                      In the process, you go through different stages repeatedly while evaluating your designs on each\n                      stage.\n                      Each stage involves relevant stakeholders in your organization that take part in the process to\n                      make your products highly efficient and usable.\n                      The design process involves following six stages.\n                    </p>\n                  </div>\n                </div>\n              </div>\n\n              <section class=\"ui-ux-info\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div *ngFor=\"let item of uiUxInfo; index as i\" class=\"col\">\n                      <div class=\"panel {{item.color}}\">\n                        <div class=\"panel-heading\">\n                          <h5>0{{i+1}}. {{item.title}}</h5>\n                        </div>\n                        <div class=\"panel-body\">\n                          <p>{{item.description}}</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n\n              <section class=\"ui-ux-process\">\n                <div class=\"container\">\n                    <div class=\"col-sm-12 div-center\">\n                    <div class=\"row\" *ngFor=\"let item of uiUxProcess; index as i\">\n                        <div class=\"col-md-4 col-lg-4 col-sm-12 \">\n                        <div class=\"card {{item.color}}\">\n                          <img src=\"assets/images/managservice/softwareEng/ui-ux-{{i+1}}.jpg\" alt=\"\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                        <h3 class=\"{{item.color}}\">0{{i+1}}. {{item.title}}</h3>\n                        <p>\n                          {{item.description}}\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n\n            </ng-template>\n          </li>\n\n          <li [ngbNavItem]=\"5\">\n            <a ngbNavLink (click)=\"title(5)\">Software Testing & QA</a>\n            <ng-template ngbNavContent>\n              <div class=\"container qa-testing\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <p class=\"running-text\">\n                      Arkedge is committed to providing high-quality software solutions to its clients. Therefore we\n                      take a serious approach to the testing process and quality assurance of the solutions that are\n                      developed either by our development team or your existing or new applications. The current\n                      techniques and approaches applied to software testing help identify and prevent occurrence of the\n                      problems associated with the improper functionality, low reliability, productivity, scalability\n                      and other defects of the applications.\n                    </p>\n                    <p class=\"v-flex\">\n                      We have robust testing processes and frameworks that can seamlessly plug and play at any stage of\n                      the software and product development life cycle to provide you the flexible scale and\n                      repeatability in meeting demanding quality requirements and go-live schedules.<br><br>\n                      Our strong belief is to form a QA team in the initial stage of the development phase; this\n                      undoubtedly helps reduce the risks of fixing global bugs in later stages. The QA engineers are\n                      involved in the development process right off the mark: they are provided with the available\n                      documentation, acquainted with the business processes that are to be implemented in the project\n                      and technical specifications requested by the client. On the basis of the provided resources our\n                      engineers develop a testing plan that meets all the mentioned requirements. It defines the scope\n                      of testing and documents the process of quality assurance.\n                      <img src=\"assets/images/managservice/qa-testing.png\" align=\"right\">\n                    </p>\n                    <p class=\"running-text manage-space\">Arkedge helps with critical aspects of clients' systems, such\n                      as planning, process control, performance metrics, test automation, test execution, defect\n                      tracking, and reporting.\n                    </p>\n                  </div>\n                  <div *ngFor=\"let data of qaInfo\" class=\"col-lg-6 col-md-6 col-sm-12 qa-info\">\n                    <div class=\"panel\">\n                      <div class=\"panel-heading\">\n                        <h6>{{data.title}}</h6>\n                      </div>\n                      <div class=\"panel-body\">\n                        <p>{{data.info}}</p>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"row qa-testing-info\">\n                  <div class=\"col-md-4 col-lg-4 col-sm-12 v-flex\">\n                    <div class=\"icon-circle\">\n                      <i class=\"icon icon-large\">\n                        <svg focusable=\"false\">\n                          <use xlink:href=\"#icon_seeting3\"></use>\n                        </svg>\n                      </i>\n                    </div>\n                  </div>\n                  <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                    <h6>Functional Testing</h6>\n                    <p>Functional testing is done using the functional specifications provided by the client or by using\n                      the design specifications like use cases provided by the design team. Functional testing validates\n                      that an application conforms to its specifications and meets its expected functional requirements.\n                      During functionality testing, a range of inputs as test data is created and tests are performed to\n                      validate if whether each feature conforms to the requirements.\n                    </p>\n\n                    <div class=\"row\">\n                      <div class=\"col-sm-12\">\n                        <ul class=\"row qa-test-info\">\n                          <li *ngFor=\"let data of qafunctionTest\" class=\"col-md-6 col-lg-6 col-sm-12\">\n                            {{data.info}}\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n\n                  </div>\n\n                </div>\n\n                <div class=\"row qa-testing-info\">\n\n                  <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                    <h6>Non-Functional Testing</h6>\n                    <p>Testing the application against client's performance requirement; Non-Functioning testing is done\n                      based on the requirements and test scenarios defined by the client.\n                    </p>\n\n                    <div class=\"row\">\n                      <div class=\"col-sm-12\">\n                        <ul class=\"row qa-test-info\">\n                          <li *ngFor=\"let data of qanonfunctionTest\" class=\"col-md-6 col-lg-6 col-sm-12\">\n                            {{data.info}}\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n\n                  </div>\n\n                  <div class=\"col-md-4 col-lg-4 col-sm-12 v-flex\">\n                    <div class=\"icon-circle\">\n                      <i class=\"icon icon-large\">\n                        <svg focusable=\"false\">\n                          <use xlink:href=\"#icon_seeting1\"></use>\n                        </svg>\n                      </i>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"row qa-testing-info\">\n\n                  <div class=\"col-sm-12\">\n                    <h6>Automation Lab</h6>\n                    <p>Arkedge has a special focus on software test automation using market standard tools. Arkedge\n                      approaches automation design and development as a software development project in itself; to\n                      create an automated testing solution that is flexible enough to adapt to changes in your\n                      application and that will not need much rewriting for each new build. Arkedge test automation\n                      experts will ensure your tool investment is put to good use and will build automation skills into\n                      your organization for future re-usability and maintainability.\n                    </p>\n                  </div>\n\n\n                  <div class=\"col-md-4 col-lg-4 col-sm-12 v-flex\">\n                    <div class=\"icon-circle\">\n                      <i class=\"icon icon-large\">\n                        <svg focusable=\"false\">\n                          <use xlink:href=\"#icon_seeting2\"></use>\n                        </svg>\n                      </i>\n                    </div>\n                  </div>\n                  <div class=\"col-md-8 col-lg-8 col-sm-12\">\n\n\n                    <p>It is important to consider automation of the test environment as early as possible and design it\n                      into the system from the outset. It's also important to recognize that automation is not\n                      appropriate for every project or for all testing on any particular project.\n                      <br><br>\n                      Arkedge can help you achieve this balance so that the benefit from test automation at the right\n                      time and in the right way. Some of the automation focus areas' are:\n                    </p>\n\n                    <div class=\"row\">\n                      <div class=\"col-sm-12\">\n                        <ul class=\"row qa-test-info\">\n                          <li *ngFor=\"let data of qalabfunctionTest\n                                                      \" class=\"col-md-6 col-lg-6 col-sm-12\">\n                            {{data.info}}\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n\n                  </div>\n\n                </div>\n\n              </div>\n            </ng-template>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n\n  <div [ngbNavOutlet]=\"nav\"></div>\n\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sitemap/sitemap.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sitemap/sitemap.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Sitemap</h1>\n                    <h6>Under Construction</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <img src=\"assets/images/underconstruction.png\">\n        </div>\n    </div>\n</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staffing/staffing.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staffing/staffing.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-projectengineering.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>IT STAFFING & TRAINING</h1>\n                    <h6>{{tabName}}</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"manage-service-tab inner-nav-tab\">\n    <div class=\"tab-navigation\">\n        <div class=\"col-sm-12\">\n            <div class=\"container\">\n                <ul ngbNav #nav=\"ngbNav\" [activeId]=\"tabIndex\" class=\"nav-tabs\">\n                    <li [ngbNavItem]=\"1\">\n                        <a ngbNavLink (click)=\"title(1)\">STAFFING SERVICES</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"section-staffing\">\n                                <div class=\"col-sm-12 center section-header\">\n                                    <h3>People Process Technology</h3>\n                                    <h6>Proven methodology, profound impact & sustainable results</h6>\n                                    </div>\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <h2>Let’s start building your future with us.</h2>\n                                            <p class=\"running-text\">\n                                                We understand every organization has its Unique Staffing requirements and they need the right people to succeed. ARKEDGE supports short-term, seasonal, high-volume and niche contract requirements. We also provide contract-to-hire talent for project-based support with the option to hire our contractors as permanent employees or find the permanent top talent your company needs today. By listening to our clients’ business needs, we have gained a unique perspective into how we can help. </p>\n                                            </div>\n\n                                            <div class=\"col-sm-12\">\n                                               <ul class=\"info-bar\">\n                                                       <li *ngFor=\"let item of ourProcess\">\n                                                          {{item.title}}\n                                                           <p>\n                                                               {{item.desc}}\n                                                               <br>\n                                                               {{item.desc2}}\n                                                           </p>\n                                                       </li>\n                                                   </ul>\n                                               </div> \n                                               \n                                               <div class=\"col-sm-12 center\">\n                                               <h2 class=\"blue\">\n                                                Precision Recruiting<br>\n                                                <h5 class=\"blue small-text\">Going exceptional lengths, to hire the best</h5>\n                                               </h2>\n                                                <h2 class=\"green\">Searching for exceptional talent to scale new peaks?</h2>\n                                                <h1 class=\"red\">YOU NEED THE RIGHT PEOPLE TO SUCCEED</h1>\n                                               </div>\n\n                                        <div class=\"col-sm-12\">\n                                         <h6>Permanent Staffing</h6>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of staffingSolution\">\n                                                   {{item.title}}\n                                                    <p>\n                                                        {{item.desc}}\n                                                        <br>\n                                                        {{item.desc2}}\n                                                    </p>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"col-sm-12\"> \n                                            <h6>Temporary Staffing</h6>\n                                            <p>\n                                                In an increasingly competitive business world, manpower requirements pose a challenge that requires a careful allocation of resources to overcome. Recruitments come with a host of resource intensive issues such as Sourcing, Appointing, Compensation, Payroll Management, Statutory Compliances, Employee Benefits and Exit Management.\n                                                <br><br>\n                                                Temporary Staffing, or Temping, is an effective solution to these hassles. It basically defines a 3-way relationship between the Employer, Temping Consultant and Employee. Within this definition, we manage and administer projects on behalf of companies that require personnel for short term contracts of 6 months to a 2 year contract term. We cater to companies involved in major projects and organizations that may be facing increased workload or headcount. We assist such clients by recruiting staff for the project and overseeing the administrative and logistic requirements throughout the agreed term.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </section>\n\n                            <section class=\"services-provided\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12 center\">\n                                            <h1>Service <span class=\"heading-highlight\">we provide</span></h1>\n                                        </div>\n                                        <div *ngFor=\"let data of servicesProvided; index as i\" class=\"col-lg-4 col-md-4 col-sm-12\">\n                                            <div class=\"panel\" (click)=\"open(content)\">\n                                                <a><img src=\"assets/images/managservice/staffing/staffing-service-{{i+1}}.jpg\"></a>\n                                                <div class=\"panel-footer\">\n                                                    <button type=\"submit\" class=\"btn btn-primary\" >{{data.title}}</button>\n                                                </div>\n                                               \n                                            </div>\n                            \n                                            <ng-template #content let-modal>\n                                                <div class=\"modal-header\"> \n                                                    <h4 class=\"modal-title\">{{data.title}}</h4>\n                                                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                                                        <span aria-hidden=\"true\">&times;</span>\n                                                    </button>\n                                                </div>\n                                                <div class=\"modal-body fix-height\"> \n                            \n                                                    <div class=\"panel\">\n                                                      <div class=\"panel-body\">\n                                                            <p>{{data.desc}}</p>\n                                                         </div>\n                                                    </div>\n                                                </div>\n                                            </ng-template>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row best-staffing\">\n                                        <div class=\"col-sm-6\">\n                                            <img src=\"assets/images/managservice/staffing/staffing-service-7.jpg\">\n                                        </div>\n                                        <div class=\"col-sm-6\">\n                                            <img src=\"assets/images/managservice/staffing/staffing-service-8.jpg\">\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12 values\">\n                                            <img src=\"assets/images/managservice/staffing/staffing-service-9.jpg\">\n                                        </div>\n\n                                        <div class=\"col-sm-12 features\">\n                                            <h6 class=\"red\">Key Differentiators</h6>\n                                            <ul class=\"info-bar\">\n                                                <li> <span class=\"red\">Single Point of Contact</span> with dedicated recruiting team</li>\n                                                <li> <span class=\"red\">Tailored Client Engagement Strategy</span> with process standardization, resource optimization and SLA management</li>\n                                                <li> <span class=\"red\">Established Talent Retention Program</span> that outlines the candidate’s commitment, key deliverables and expectations to ensure continuous consultant engagement at all phases of project needs</li>\n                                                <li> <span class=\"red\">Extensive Technical Screenings in All Technical Platforms</span></li>\n                                                <li> <span class=\"red\">Large, Screened and Qualified Consultant Database that Goes Beyond Job Boards</span></li>\n                                                <li> <span class=\"red\">National Coverage with Presence in 25 cities across 10 States</span></li>\n                                            </ul>\n                                        </div>\n\n                                        <div class=\"col-sm-12 features\">\n                                            <h6>Our clients</h6>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of clients\">\n                                                    {{item.title}}\n                                                    <p>\n                                                        {{item.desc}}\n                                        \n                                                    </p>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    \n                                    </div>\n                                 \n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n                    <li [ngbNavItem]=\"2\">\n                        <a ngbNavLink (click)=\"title(2)\">STAFFING INDUSTRIES</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"section-staffing\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text\">\n                                                We ensure excellence in service through understanding of our client's business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:\n                                            </p>\n                                            </div>\n                                        <div class=\"col-sm-12\">\n                                         <h6>Staffing Services</h6>\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of industriesSolution\">\n                                                   {{item.list}}\n                                                </li> \n                                            </ul>\n                                        </div>\n                                      \n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"3\">\n                        <a ngbNavLink (click)=\"title(3)\">IT TRAINING</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"section-staffing\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text\">\n                                                Having been in the corporate training domain for almost two decades now, we understand each business' requirements with ease and develop customized training programs which will suit the client's needs. Arkedge offers all-inclusive corporate training services to cater to the IT training needs of your organization. Some of the key services we offer include -</p>\n                                            </div>\n\n                                            <div class=\"col-lg-11 col-md-11 col-sm-12 div-center\">\n                                                <!-- <h6>Proven methodology, profound impact & sustainable results</h6> -->\n                                                <div class=\"panel {{item.position}}\" *ngFor=\"let item of training\">\n                                                    <div class=\"panel-heading\">\n                                                        <div class=\"icon-circle\">\n                                                            <i class=\"icon icon-large\">\n                                                                <svg focusable=\"false\">\n                                                                    <use attr.xlink:href=\"{{item.icon}}\"></use>\n                                                                </svg>\n                                                            </i>\n                                                        </div>\n                                                        <h5>{{item.title}}</h5>\n                                                    </div>\n                                                    <div class=\"panel-body\">\n                                                        <p>{{item.desc}}</p>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                        <div class=\"col-sm-12 center\">\n                                            <h1>COURSES</h1>\n                                            <p>\n                                                Arkedge offers a range of corporate training programs and these programs can be customized to meet the requirements of your organization. <br>\n                                                We ensure excellence in service through understanding of our client's business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:\n                                            </p>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <!-- <table class=\"table table-striped table-bordered\">\n                                                <thead>\n                                                  <tr>\n                                                    <th>Course Type</th>\n                                                    <th>Course Description</th>\n                                                    <th>Duration</th>\n                                                    <th>Details</th>\n                                                   </tr>\n                                                </thead>\n                                                <tbody>\n                                                  <tr *ngFor=\"let data of courses\">\n                                                    <td>{{data.coursetype}}</td>\n                                                    <td>{{data.courseDescription}}</td>\n                                                    <td>{{data.courseDuration}}</td>\n                                                    <td><a href=\"assets/arkege.pdf\" download>View Details</a></td>\n                                                  </tr>\n                                                </tbody>\n                                                </table> -->\n\n                                                <table class=\"table table-striped table-bordered\">\n                                                    <thead>\n                                                      <tr>\n                                                        <th>Certification Programs</th>\n                                                        <th>Information and Communication Technologies Training</th>\n                                                        <th>Management Development</th>\n                                                       </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                      <tr *ngFor=\"let data of courses\">\n                                                        <td>{{data.coursetype}}</td>\n                                                        <td>{{data.infoCommTech}}</td>\n                                                        <td>{{data.mgdev}}</td>\n                                                      </tr>\n                                                    </tbody>\n                                                    </table>\n\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <h2>What Makes Us Pioneers in the Area of Corporate IT Training?</h2>\n                                            <h6>Outsouce2india is among the crème-de-la-crème companies out there which offers peerless corporate IT training for SMEs as well as global corporates. Some of the key reasons to choose us include -</h6>\n                                            </div>\n                                        <div class=\"col-sm-12\">\n                                            <ul class=\"info-bar\">\n                                                <li *ngFor=\"let item of whyTraining\">\n                                                   {{item.title}}\n                                                    <div class=\"comp-methodology\"> \n                                                       <p> {{item.desc}}</p>\n                                                        <ul class=\"info-bar\">\n                                                            <li *ngFor=\"let li of item.list\">\n                                                               {{li.title}}\n                                                             </li>\n                                                        </ul>\n                                                     \n                                                      \n                                                    </div>\n                                                </li>\n                                            </ul> </div>\n\n                                      \n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    <li [ngbNavItem]=\"4\">\n                        <a ngbNavLink (click)=\"title(4)\">PROGRAM SCHEDULE</a>\n                        <ng-template ngbNavContent>\n                            <section class=\"section-staffing\">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <p class=\"running-text\">\n                                                Arkedge offers a range of corporate training programs and these programs can be customized to meet the requirements of your organization. </p>\n                                            </div>\n                                        <div class=\"col-sm-12\">\n                                            <table class=\"table table-striped table-bordered\">\n                                                <thead>\n                                                  <tr>\n                                                    <th>Course Title</th>\n                                                    <th>Location</th>\n                                                    <th>Target Date</th>\n                                                    <th>Details</th>\n                                                   </tr>\n                                                </thead>\n                                                <tbody>\n                                                  <tr *ngFor=\"let data of programCalendar\">\n                                                    <td>{{data.courseTitle}}</td>\n                                                    <td>{{data.location}}</td>\n                                                    <td>{{data.targetDate}}</td>\n                                                    <td><a href=\"assets/arkege.pdf\" download>View Details</a></td>\n                                                  </tr>\n                                                </tbody>\n                                                </table>\n                                        </div>\n                                      \n                                    </div>\n                                </div>\n                            </section>\n                        </ng-template>\n                    </li>\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div [ngbNavOutlet]=\"nav\"></div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/technology/technology.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technology/technology.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-technology.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>Technology</h1>\n                    <h6>Transforming industries with smarter ways</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"section-advance-solution\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-lg-9 col-md-9 col-sm-12 div-center center\">\n                <p>\n                    <b>ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.\n                    </b>\n                    <br><br>\n                    Over the years we have built up a solid team of software professionals that come from different backgrounds & enlarge the creative potential of ARKEDGE. The competence that they offer contains a wide range of custom programming skills including the latest and most effective development in Microsoft technologies.\n\n                </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>\n                    Key Differentiators\n                </h3>\n            </div>\n            <div class=\"col-md-8 col-lg-8 col-sm-12\">\n                <ul>\n                    <li>\n                        We provide custom application programming services to end customers.\n                    </li>\n                    <li>\n                        Our competence and experience ensure that we provide excellent services and products to our\n                        customers.\n                    </li>\n                    <li>\n                        At every stage of the development process, from conceptual design to product release, the\n                        highest quality standards are maintained.\n                    </li>\n                    <li>\n                        Our extensive communication facilities allow us to keep in touch with our customers 24X7.\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <p>\n                    Ever-growing demand for Web Application solutions is driven by rapidly changing market conditions\n                    and technology progress. To streamline your business, we address those issues with our Internet and\n                    Intranet solutions. In addition we also provide you web / animation design services.<br><br>\n\n                    Along with the engineering solution and services ARKEDGE is specialized in helpings client\n                    organizations identify, evaluate, and recruit executives at various levels. It comprises of\n                    well-qualified group of people having faith in camaraderie and serving the industry to find the\n                    solutions to various key areas as Staffing, Executive Search and IT training.<br><br>\n\n                    In addition ARKEDGE specializes in a bunch of IT training services for corporate, institutions and\n                    individuals. We do organize corporate training programs for industry officials who find it difficult\n                    to mingle their expertise with latest IT tools and IT based technology. We do impart IT training for\n                    graduates in multiple discipline including computer application, hard core technology, business\n                    administration, and individuals who are in the mid of their management education.\n                </p>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-banner\">\n    <img src=\"assets/images/inner-banner-client.jpg\">\n    <div class=\"page-title\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 center\">\n                    <h1>TESTIMONIALS</h1>\n                    <h6>We value loyalty, creativity and productivity with results</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-sm-12 col-md-10 div-center center\">\n                <p class=\"running-text\">\n                    A great leader's courage to fulfill his vision comes from passion, not position.\n                </p>\n                <p>\n                    At ARKEDGE, we all aspire to be tomorrow's leader. Individually we are pathfinders and collectively we are a doer (achiever).\n                    <br>\n                    We are passionate about everything that we do and so do it the best way.\n                </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"testimonials-info\">\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-sm-12\" *ngFor=\"let info of testimonials; index as i\">\n                <p>\n                    <span class=\"span\">\n                        <img class=\"div-{{i+1}}\" src=\"assets/images/leadership/person{{i+1}}.png\" align=\"{{info.align}}\">\n                        <span class=\"title-name\">{{info.name}}</span>\n                        <span class=\"title-info\">{{info.info}}</span>\n                    </span>\n                    \n                    <span class=\"v-text-align\">\n                        <blockquote>\n                            <p>\n                                {{info.desc}}\n                            </p>\n                        </blockquote>\n                    </span>\n                </p>\n               \n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div-1 {\n  background-color: #c3d04e;\n}\n\n.div-2 {\n  background-color: #8778d9;\n}\n\n.div-3 {\n  background-color: #ffab00;\n}\n\n.div-4 {\n  background-color: #ff5630;\n}\n\n.div-5 {\n  background-color: #02b8d9;\n}\n\n.div-6 {\n  background-color: #5391ee;\n}\n\n.about-key-diff {\n  background: url('about.jpg') no-repeat bottom center #1d4b76;\n  padding: 70px 0;\n}\n\n.about-key-diff h1 {\n  color: #fff;\n  font-weight: normal;\n}\n\n.about-key-diff ul {\n  margin-top: 35px;\n}\n\n.about-key-diff ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  color: #fff;\n}\n\n.about-key-diff ul li::before {\n  content: \" \";\n  background: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.note-desc {\n  padding-top: 0;\n}\n\n.about-info {\n  padding: 0;\n  background: #e5f0fa;\n}\n\n.about-info .v-align {\n  display: flex;\n}\n\n.about-info .v-align p {\n  align-self: center;\n}\n\n.about-info img {\n  width: 100%;\n}\n\n.icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.icon-circle i {\n  line-height: 90px;\n}\n\n.icon-circle i svg {\n  fill: #fff;\n}\n\n.section-info {\n  padding: 70px 0;\n}\n\n.section-info .panel-container {\n  margin-top: 60px;\n  min-height: 330px;\n  perspective: 1000px;\n  overflow: hidden;\n}\n\n.section-info .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n\n.section-info .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s;\n  transform-style: preserve-3d;\n  cursor: pointer;\n}\n\n.section-info .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n\n.section-info .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.section-info .panel .panel-front.red {\n  background: url('1.jpg') no-repeat top center;\n  border-color: #b9646e;\n}\n\n.section-info .panel .panel-front.red p {\n  color: #fff;\n}\n\n.section-info .panel .panel-front.red .circle-bg {\n  background-color: #b9646e;\n}\n\n.section-info .panel .panel-front.blue {\n  background: url('2.jpg') no-repeat top center;\n  border-color: #276caa;\n}\n\n.section-info .panel .panel-front.blue .circle-bg {\n  background-color: #276caa;\n}\n\n.section-info .panel .panel-front.green {\n  background: url('3.jpg') no-repeat top center;\n  border-color: #4bbb57;\n}\n\n.section-info .panel .panel-front.green .circle-bg {\n  background-color: #4bbb57;\n}\n\n.section-info .panel .panel-back {\n  padding-top: 25px;\n}\n\n.section-info .panel .panel-back.red {\n  background-color: #b9646e;\n}\n\n.section-info .panel .panel-back.red p {\n  color: #fff;\n}\n\n.section-info .panel .panel-back.blue {\n  background-color: #276caa;\n}\n\n.section-info .panel .panel-back.green {\n  background-color: #4bbb57;\n}\n\n.section-info .panel .panel-front, .section-info .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.section-info .panel .panel-back {\n  transform: rotateX(180deg);\n}\n\n.section-info .panel .panel-back p {\n  padding: 10px;\n}\n\n.section-info .panel h5 {\n  margin: 20px 0;\n  color: #fff;\n}\n\n.section-info .panel p {\n  margin: 0;\n}\n\n.leader-ship {\n  margin-top: 40px;\n  padding: 0;\n}\n\n.leader-ship.first-child {\n  background: #f2f2f2;\n  padding-bottom: 40px;\n}\n\n.leader-ship:last-child {\n  padding-bottom: 30px;\n}\n\n.leader-ship:last-child .div-center {\n  margin-bottom: 50px;\n}\n\n.leader-ship:last-child img {\n  margin: 0 auto 30px;\n  width: 80%;\n  display: block;\n}\n\n.leader-ship p {\n  padding-top: 40px;\n}\n\n.leader-ship p a {\n  color: #214f7a;\n  font-weight: bold;\n}\n\n.leader-ship img {\n  width: auto;\n  margin: 0 40px 0px 0;\n  border-radius: 50%;\n}\n\n.leader-ship .title-name {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.leader-ship .title-info {\n  font-size: 16px;\n  color: #5C5C5C;\n}\n\n.leader-ship .btn {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 12px;\n}\n\n.why-us {\n  padding: 0 0 70px 0;\n}\n\n.why-us .row:nth-child(even) {\n  padding: 70px 0;\n}\n\n.why-us .row:last-child {\n  padding: 45px 0 0 0;\n}\n\n.why-us h6 {\n  font-weight: bold;\n}\n\n.why-us ul {\n  margin-top: 35px;\n}\n\n.why-us ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n}\n\n.why-us ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.wa-info {\n  background: #e5f0fa;\n  padding: 50px;\n  height: 100%;\n}\n\n.partner-info {\n  padding: 70px 0;\n  padding-bottom: 20px;\n}\n\n.partner-info .panel {\n  margin-bottom: 50px;\n  border: 1px solid rgba(33, 79, 122, 0.1);\n  padding: 20px;\n}\n\n.modal-body h6 {\n  font-weight: bold;\n}\n\n.modal-body a {\n  color: #276caa;\n}\n\n.modal-body a:hover {\n  color: #000;\n}\n\n@media (max-width: 576px) {\n  .about-tab .leader-ship img {\n    width: 100%;\n    margin: 0;\n    margin-bottom: 20px;\n  }\n\n  .about-info .v-align p {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQztFQUNDLHlCQUFBO0FDRkY7O0FEQ0M7RUFDQyx5QkFBQTtBQ0VGOztBREhDO0VBQ0MseUJBQUE7QUNNRjs7QURQQztFQUNDLHlCQUFBO0FDVUY7O0FEWEM7RUFDQyx5QkFBQTtBQ2NGOztBRGZDO0VBQ0MseUJBQUE7QUNrQkY7O0FEZEE7RUFDSSw0REFBQTtFQUNBLGVBQUE7QUNpQko7O0FEaEJJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDa0JSOztBRGhCSTtFQUNGLGdCQUFBO0FDa0JGOztBRGpCRTtFQUNDLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ1Msa0JBQUE7RUFDQSxXQUFBO0FDbUJaOztBRGxCRztFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ29CSjs7QURmQTtFQUNDLGNBQUE7QUNrQkQ7O0FEaEJBO0VBQ0MsVUFBQTtFQUNHLG1CQUFBO0FDbUJKOztBRGxCSTtFQUNJLGFBQUE7QUNvQlI7O0FEbkJRO0VBQ0wsa0JBQUE7QUNxQkg7O0FEbEJDO0VBQ0MsV0FBQTtBQ29CRjs7QURYQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDY0Q7O0FEYkM7RUFDQyxpQkFBQTtBQ2VGOztBRGRFO0VBQ0MsVUFBQTtBQ2dCSDs7QURWQTtFQUNJLGVBQUE7QUNhSjs7QURaQztFQUNPLGdCQUFBO0VBQ04saUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDY0Y7O0FEYkU7RUFDQywwQkFBQTtBQ2VIOztBRFpDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDY0Y7O0FEYkU7RUFDQyxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ2VIOztBRGRHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ2dCSjs7QURkRztFQUlDLDZDQUFBO0VBQ0EscUJBekRDO0FDc0VMOztBRGpCSTtFQUNDLFdBQUE7QUNtQkw7O0FEZkk7RUFDQyx5QkEzREE7QUM0RUw7O0FEYkc7RUFDQyw2Q0FBQTtFQUNBLHFCQWhFRTtBQytFTjs7QURkSTtFQUNDLHlCQWxFQztBQ2tGTjs7QURaRztFQUNDLDZDQUFBO0VBQ0EscUJBdkVHO0FDcUZQOztBRGJJO0VBQ0MseUJBekVFO0FDd0ZQOztBRFZFO0VBQ0MsaUJBQUE7QUNZSDs7QURYRztFQUlDLHlCQXRGQztBQ2dHTDs7QURiSTtFQUNDLFdBQUE7QUNlTDs7QURWRztFQUNDLHlCQXpGRTtBQ3FHTjs7QURURztFQUNDLHlCQTVGRztBQ3VHUDs7QURQRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FDU0g7O0FEUEU7RUFFQywwQkFBQTtBQ1FIOztBRFBHO0VBQ0MsYUFBQTtBQ1NKOztBRE5FO0VBQ0MsY0FBQTtFQUNBLFdBQUE7QUNRSDs7QURORTtFQUNDLFNBQUE7QUNRSDs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0tGOztBREpFO0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtBQ01IOztBREpFO0VBQ0Msb0JBQUE7QUNNSDs7QURMRztFQUNDLG1CQUFBO0FDT0o7O0FETEc7RUFDQyxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDT0o7O0FESkM7RUFDQyxpQkFBQTtBQ01GOztBRExFO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0FDT0g7O0FESkM7RUFDQyxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ01GOztBREpDO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDTUY7O0FESkM7RUFDQyxlQUFBO0VBQ0EsY0FBQTtBQ01GOztBREpDO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ01GOztBREZBO0VBQ0MsbUJBQUE7QUNLRDs7QURIRTtFQUNDLGVBQUE7QUNLSDs7QURIRTtFQUNDLG1CQUFBO0FDS0g7O0FERkM7RUFDQyxpQkFBQTtBQ0lGOztBREZDO0VBQ0MsZ0JBQUE7QUNJRjs7QURIRztFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNLSDs7QURKRztFQUNDLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ01KOztBREFBO0VBQ0MsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0dEOztBREFBO0VBQ0MsZUFBQTtFQUNHLG9CQUFBO0FDR0o7O0FERkk7RUFDSSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtBQ0lSOztBREFJO0VBQ0ksaUJBQUE7QUNHUjs7QURESTtFQUNJLGNBQUE7QUNHUjs7QURGUTtFQUNJLFdBQUE7QUNJWjs7QURFQTtFQUdFO0lBQ0MsV0FBQTtJQUNHLFNBQUE7SUFDSCxtQkFBQTtFQ0REOztFRE9BO0lBQ0MsVUFBQTtFQ0pEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyYW5kb21CZzojYzNkMDRlLCAjODc3OGQ5LCAjZmZhYjAwLCAjZmY1NjMwLCAjMDJiOGQ5LCAjNTM5MWVlO1xuXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkcmFuZG9tQmcpIHtcblx0LmRpdi0jeyRpfSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogbnRoKCRyYW5kb21CZywgJGkpO1xuXHR9XG59XG5cbi5hYm91dC1rZXktZGlmZntcbiAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LmpwZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXIgIzFkNGI3NjtcbiAgICBwYWRkaW5nOjcwcHggMDtcbiAgICBoMXtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgIH1cbiAgICB1bHtcblx0XHRtYXJnaW4tdG9wOjM1cHg7XG5cdFx0bGl7XG5cdFx0XHRwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xuXHRcdFx0bGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgY29sb3I6I2ZmZjtcblx0XHRcdCY6OmJlZm9yZXtcblx0XHRcdFx0Y29udGVudDogXCIgXCI7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0XHRcdFx0dG9wOjhweDtcblx0XHRcdFx0bGVmdDowcHg7XG5cdFx0XHRcdHdpZHRoOiAxMHB4O1xuXHRcdFx0XHRoZWlnaHQ6MTBweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cbn1cbi5ub3RlLWRlc2N7XG5cdHBhZGRpbmctdG9wOjA7XG59XG4uYWJvdXQtaW5mb3tcblx0cGFkZGluZzowO1xuICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcbiAgICAudi1hbGlnbntcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBwe1xuXHRcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG5cdH1cblx0aW1ne1xuXHRcdHdpZHRoOjEwMCU7XG5cdH1cbn1cblxuXG4kcmVkOiNiOTY0NmU7XG4kYmx1ZTojMjc2Y2FhO1xuJGdyZWVuOiM0YmJiNTc7XG5cbi5pY29uLWNpcmNsZXtcblx0aGVpZ2h0OjkwcHg7XG5cdHdpZHRoOjkwcHg7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHRtYXJnaW46MCBhdXRvO1xuXHRpe1xuXHRcdGxpbmUtaGVpZ2h0OjkwcHg7XG5cdFx0c3Zne1xuXHRcdFx0ZmlsbDojZmZmO1xuXHRcdH1cblx0fVxuXHRcbn1cblxuLnNlY3Rpb24taW5mb3tcbiAgICBwYWRkaW5nOjcwcHggMDtcblx0LnBhbmVsLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLXRvcDo2MHB4O1xuXHRcdG1pbi1oZWlnaHQ6IDMzMHB4O1xuXHRcdHBlcnNwZWN0aXZlOiAxMDAwcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHQmOmhvdmVyIC5wYW5lbHtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHRcdH1cblx0fVxuXHQucGFuZWx7XG5cdFx0Y29sb3I6I2ZmZjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG5cdFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcblx0XHRjdXJzb3I6cG9pbnRlcjtcblx0XHQucGFuZWwtZnJvbnR7XG5cdFx0XHRib3JkZXItdG9wOiA1cHggc29saWQ7XG5cdFx0XHRwYWRkaW5nLXRvcDogMjVweDtcblx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHQmOjphZnRlcntcblx0XHRcdFx0Y29udGVudDonJztcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6MTAwJTtcblx0XHRcdFx0YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41KTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHR6LWluZGV4OiAtMTtcblx0XHRcdH1cblx0XHRcdCYucmVke1xuXHRcdFx0XHRwe1xuXHRcdFx0XHRcdGNvbG9yOiNmZmY7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8xLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJHJlZDtcblx0XHRcdFx0LmNpcmNsZS1iZ3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRyZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ji5ibHVle1xuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzIuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkYmx1ZTtcblx0XHRcdFx0LmNpcmNsZS1iZ3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRibHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdCYuZ3JlZW57XG5cdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICRncmVlbjtcblx0XHRcdFx0LmNpcmNsZS1iZ3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRncmVlbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5wYW5lbC1iYWNre1xuXHRcdFx0cGFkZGluZy10b3A6IDI1cHg7XG5cdFx0XHQmLnJlZHtcblx0XHRcdFx0cHtcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JHJlZDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ji5ibHVle1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRibHVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQmLmdyZWVue1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiRncmVlbjtcblx0XHRcdH1cblx0XHR9XG5cdFxuXHRcdC5wYW5lbC1mcm9udCwgLnBhbmVsLWJhY2t7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdH1cblx0XHQucGFuZWwtYmFja1xuXHRcdHtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHRcdFx0cHtcblx0XHRcdFx0cGFkZGluZzoxMHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRoNXtcblx0XHRcdG1hcmdpbjoyMHB4IDA7XG5cdFx0XHRjb2xvcjojZmZmO1xuXHRcdH1cblx0XHRwe1xuXHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcblx0XHR9XG5cdH1cbn1cblxuLmxlYWRlci1zaGlwe1xuXHRcdG1hcmdpbi10b3A6NDBweDtcblx0XHRwYWRkaW5nOjA7XG5cdFx0Ji5maXJzdC1jaGlsZHtcblx0XHRcdGJhY2tncm91bmQ6I2YyZjJmMjsgXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTo0MHB4O1xuXHRcdH1cblx0XHQmOmxhc3QtY2hpbGR7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTozMHB4O1xuXHRcdFx0LmRpdi1jZW50ZXJ7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206NTBweDtcblx0XHRcdH0gXG5cdFx0XHRpbWd7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvIDMwcHg7XG5cdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0fVxuXHRcdH1cblx0cHtcblx0XHRwYWRkaW5nLXRvcDo0MHB4O1xuXHRcdGF7XG5cdFx0XHRjb2xvcjojMjE0ZjdhO1xuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0XHR9XG5cdH1cblx0aW1ne1xuXHRcdHdpZHRoOmF1dG87XG5cdFx0bWFyZ2luOiAwIDQwcHggMHB4IDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR9XG5cdC50aXRsZS1uYW1le1xuXHRcdGZvbnQtc2l6ZToyNXB4O1xuXHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XG5cdH1cblx0LnRpdGxlLWluZm97XG5cdFx0Zm9udC1zaXplOjE2cHg7XG5cdFx0Y29sb3I6IzVDNUM1Qztcblx0fVxuXHQuYnRue1xuXHRcdHBhZGRpbmc6MTBweDtcblx0XHRib3JkZXItcmFkaXVzOjVweDtcblx0XHRmb250LXNpemU6MTJweDtcblx0fVxufVxuXG4ud2h5LXVze1xuXHRwYWRkaW5nOjAgMCA3MHB4IDA7XG5cdC5yb3d7XG5cdFx0JjpudGgtY2hpbGQoZXZlbil7XG5cdFx0XHRwYWRkaW5nOjcwcHggMDtcblx0XHR9XG5cdFx0JjpsYXN0LWNoaWxke1xuXHRcdFx0cGFkZGluZzo0NXB4IDAgMCAwO1xuXHRcdH1cblx0fVxuXHRoNntcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0fVxuXHR1bHtcblx0XHRtYXJnaW4tdG9wOjM1cHg7XG5cdFx0IGxpe1xuXHRcdFx0cGFkZGluZzogMCAwIDIwcHggMjBweDtcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdCY6OmJlZm9yZXtcblx0XHRcdFx0Y29udGVudDogXCIgXCI7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICMyMTRmN2E7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0XHRcdFx0dG9wOjhweDtcblx0XHRcdFx0bGVmdDowcHg7XG5cdFx0XHRcdHdpZHRoOiAxMHB4O1xuXHRcdFx0XHRoZWlnaHQ6MTBweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi53YS1pbmZve1xuXHRiYWNrZ3JvdW5kOiNlNWYwZmE7XG5cdHBhZGRpbmc6NTBweDtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFydG5lci1pbmZve1xuXHRwYWRkaW5nOjcwcHggMDtcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuICAgIC5wYW5lbHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMzLCA3OSwgMTIyLCAwLjEpO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbn1cbi5tb2RhbC1ib2R5e1xuICAgIGg2e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgYXtcbiAgICAgICAgY29sb3I6IzI3NmNhYTtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcblx0LmFib3V0LXRhYntcbi5sZWFkZXItc2hpcHtcblx0XHRpbWd7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHQgICAgbWFyZ2luOiAwO1xuXHRcdFx0bWFyZ2luLWJvdHRvbToyMHB4O1xuXHRcdH1cblx0fVxufVxuLmFib3V0LWluZm97XG5cdC52LWFsaWdue1xuXHRcdHB7XG5cdFx0XHRwYWRkaW5nOjA7XG5cdFx0fVxuXHR9XG59XG59IiwiLmRpdi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzZDA0ZTtcbn1cblxuLmRpdi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3NzhkOTtcbn1cblxuLmRpdi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWIwMDtcbn1cblxuLmRpdi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTYzMDtcbn1cblxuLmRpdi01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYjhkOTtcbn1cblxuLmRpdi02IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzOTFlZTtcbn1cblxuLmFib3V0LWtleS1kaWZmIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQuanBnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlciAjMWQ0Yjc2O1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4uYWJvdXQta2V5LWRpZmYgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5hYm91dC1rZXktZGlmZiB1bCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG4uYWJvdXQta2V5LWRpZmYgdWwgbGkge1xuICBwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5hYm91dC1rZXktZGlmZiB1bCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubm90ZS1kZXNjIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbn1cbi5hYm91dC1pbmZvIC52LWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hYm91dC1pbmZvIC52LWFsaWduIHAge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uYWJvdXQtaW5mbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24tY2lyY2xlIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG4uaWNvbi1jaXJjbGUgaSBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuXG4uc2VjdGlvbi1pbmZvIHtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWluLWhlaWdodDogMzMwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXI6aG92ZXIgLnBhbmVsIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQge1xuICBib3JkZXItdG9wOiA1cHggc29saWQ7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICB6LWluZGV4OiAxO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LnJlZCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzEuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjYjk2NDZlO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LnJlZCBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQucmVkIC5jaXJjbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk2NDZlO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmJsdWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8yLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogIzI3NmNhYTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5ibHVlIC5jaXJjbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc2Y2FhO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmdyZWVuIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBib3JkZXItY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuZ3JlZW4gLmNpcmNsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5NjQ2ZTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrLnJlZCBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjay5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NmNhYTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYmI1Nztcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udCwgLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sgcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCBoNSB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5sZWFkZXItc2hpcCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ubGVhZGVyLXNoaXAuZmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbi5sZWFkZXItc2hpcDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4ubGVhZGVyLXNoaXA6bGFzdC1jaGlsZCAuZGl2LWNlbnRlciB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4ubGVhZGVyLXNoaXA6bGFzdC1jaGlsZCBpbWcge1xuICBtYXJnaW46IDAgYXV0byAzMHB4O1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5sZWFkZXItc2hpcCBwIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4ubGVhZGVyLXNoaXAgcCBhIHtcbiAgY29sb3I6ICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxlYWRlci1zaGlwIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAgNDBweCAwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmxlYWRlci1zaGlwIC50aXRsZS1uYW1lIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5sZWFkZXItc2hpcCAudGl0bGUtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1QzVDNUM7XG59XG4ubGVhZGVyLXNoaXAgLmJ0biB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ud2h5LXVzIHtcbiAgcGFkZGluZzogMCAwIDcwcHggMDtcbn1cbi53aHktdXMgLnJvdzpudGgtY2hpbGQoZXZlbikge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4ud2h5LXVzIC5yb3c6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmc6IDQ1cHggMCAwIDA7XG59XG4ud2h5LXVzIGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ud2h5LXVzIHVsIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi53aHktdXMgdWwgbGkge1xuICBwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndoeS11cyB1bCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ud2EtaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhcnRuZXItaW5mbyB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ucGFydG5lci1pbmZvIC5wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzMsIDc5LCAxMjIsIDAuMSk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tb2RhbC1ib2R5IGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW9kYWwtYm9keSBhIHtcbiAgY29sb3I6ICMyNzZjYWE7XG59XG4ubW9kYWwtYm9keSBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYWJvdXQtdGFiIC5sZWFkZXItc2hpcCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmFib3V0LWluZm8gLnYtYWxpZ24gcCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");





let AboutComponent = class AboutComponent {
    constructor(config, modalService, router, sharedservice) {
        this.modalService = modalService;
        this.router = router;
        this.sharedservice = sharedservice;
        this.keydiff = [
            { list: 'We provide custom application programming services to end customers.' },
            { list: 'Our competence and experience ensure that we provide excellent services and products to our customers.' },
            { list: 'At every stage of the development process, from conceptual design to product release, the highest quality standards are maintained.' },
            { list: 'Our extensive communication facilities allow us to keep in touch with our customers 24X7.' }
        ];
        this.bulletPoint = [
            { list: 'Extensive experience and expertise in application development and product engineering for various clients.' },
            { list: 'Expertise in Agile, RUP and Iterative methodologies across Microsoft technologies.' },
            { list: 'Extensive experience in implementation of end to end projects in various business domains and technical platforms.' },
            { list: 'Mature software development quality processes and methodologies. Experience and expertise of consulting in technology and operations.' },
            { list: 'ARKEDGE has a special focus on software test automation using market standard tools' }
        ];
        this.bulletPoint_2 = [
            { list: 'The Application Development CoE is engaged in designing, developing, maintaining, and testing enterprise scale applications using the lat est Microsoft® technologies and standards.' },
            { list: 'The DLM CoE is the combination of processes, strategies and applied technologies to manage and improve the lifecycle of data / information across an enterprise.' },
            { list: 'The Product Engineering CoE is involved in architecting and building .Net driven business solutions right from inception (by using agile development methodology only).' },
            { list: 'The Software testing CoE independent testing services for each practice area along with third party testing services spanning the entire product development life-cycle.' },
            { list: 'The Resourcing (Recruitment) CoE is engaged to provide wide range of Recruitment Services as well as background screening solutions.' },
            { list: 'The Training CoE further extends our services spectrums with highest quality training in all major areas of information technology and management.' }
        ];
        this.tabs = [
            {
                title: 'About Us', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best.',
                decs_2: 'from different backgrounds and enlarge the creative potential of ARKEDGE. The competence that they offer contains a wide range of custom programming skills including the latest and most effective development in Microsoft technologies.'
            },
            {
                title: 'Why ARKEDGE', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
            {
                title: 'Centers of Excellence', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
            {
                title: 'Vision & Mission', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
            {
                title: 'Values', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
            {
                title: 'Leadership', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
            {
                title: 'News', decs: 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. ',
                decs_2: 'from different backgrounds'
            },
        ];
        this.news = [
            { img: 'assets/images/news', desc_1: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018.', desc_2: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018... Please click on news and read the details of news section. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
        ];
        this.partnerInfo = [
            { title: 'Mint International', desc: 'HR and Recruitment cell.', url: 'http://www.mintinternational.com/' },
            { title: 'Best Containers', desc: 'One of the biggest manufacturers in bunk and porta cabins, houses etc.', url: 'http://bcc-india.com' },
            { title: 'Dreaming Code', desc: 'The biggest custom application development group in USA.', url: 'http://dreamingcode.com' },
            { title: 'Royal College', desc: 'One of the leading college in Mira Road, Thane.', url: 'http://royalcollegemiraroad.edu.in/' },
            { title: 'Alshariah', desc: 'Arab Institute for Studies and Development Programs', url: 'http://alshariah.com/' },
            { title: 'Miracle Foods', desc: 'The biggest dealer in agro products, rice, basmati rice, spices', url: 'http://miraclefoods.in/' }
        ];
        this.closeResult = '';
        this.solution = [
            {
                title: 'Software Engineering',
                titlelink: 'ProductEngineering',
                color: 'blue',
                list: [
                    { name: 'Product Engineering' },
                    { name: 'Application Development' },
                    { name: 'UX/UI Development' },
                    { name: 'Software Testing & QA' }
                ],
                description: 'Software engineering is a concept in and of itself, but to better understand it, you need to know what each part of the term means before you can fully understand how they operate together. It can be difficult to understand, even though it does seem straightforward.',
                icon: '#icon_softEngg'
            },
            {
                title: 'Data Services',
                titlelink: 'DataEngineering',
                color: 'red',
                list: [
                    { name: 'Data Engineering' },
                    { name: 'Data Management' },
                    { name: 'Data Science' },
                    { name: 'Cloud Computing' }
                ],
                description: 'Data Services is the practice of collecting, keeping, and using data securely, efficiently, and cost-effectively. The goal of data management is to help people, organizations, and connected things optimize the use of data within the bounds of policy and regulation.',
                icon: '#icon_mgmt'
            },
            {
                title: 'IT Staffing & Training',
                titlelink: 'StaffingServices',
                color: 'green',
                list: [
                    { name: 'Staffing Services' },
                    { name: 'Industries' },
                    { name: 'Courses' },
                    { name: 'Program Calendar' }
                ],
                description: `Develop the skills your workforce needs to compete and win. Our curated learning pathways help close knowledge gaps and drive measurable outcomes. Whether you're a team of 5 or 50,000, We offers flexible options to work with your eLearning goals and budgets.`,
                icon: '#icon_training'
            },
        ];
        this.leaders = [
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            }
        ];
    }
    getUrl(i, title) {
        if (title == 'ProductEngineering') {
            this.router.navigateByUrl('/SoftwareEngineering', { skipLocationChange: true });
            this.sharedservice.nextMessage(i, 'ProductEngineering');
        }
        else if (title == 'DataEngineering') {
            this.router.navigateByUrl('/DataServices', { skipLocationChange: true });
            this.sharedservice.nextMessage(i, 'DataEngineering');
        }
        else if (title == 'StaffingServices') {
            this.router.navigateByUrl('/ItStafingAndServices', { skipLocationChange: true });
            this.sharedservice.nextMessage(i, 'StaffingServices');
        }
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title_1' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/advancesolution/advancesolution.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/advancesolution/advancesolution.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-advance-solution ul li a {\n  padding: 15px;\n  margin-bottom: 5px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\n.section-advance-solution ul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\nsection:nth-child(odd) {\n  background: #e5f0fa;\n}\nimg {\n  width: 100%;\n}\n.info .panel {\n  padding: 20px;\n  background: #e5f0fa;\n}\n.info p {\n  position: relative;\n  padding-right: 125px;\n}\n.info p i {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.info .panel-heading h6 {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2FkdmFuY2Vzb2x1dGlvbi9hZHZhbmNlc29sdXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkdmFuY2Vzb2x1dGlvbi9hZHZhbmNlc29sdXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRmhCO0FER2dCO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDRHBCO0FEUUE7RUFDSSxtQkFBQTtBQ0xKO0FEUUE7RUFDSSxXQUFBO0FDTEo7QURTSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ05SO0FEUUk7RUFDRyxrQkFBQTtFQUNBLG9CQUFBO0FDTlA7QURPTztFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUNMWDtBRFNRO0VBQ0ksaUJBQUE7QUNQWiIsImZpbGUiOiJzcmMvYXBwL2FkdmFuY2Vzb2x1dGlvbi9hZHZhbmNlc29sdXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1hZHZhbmNlLXNvbHV0aW9ue1xuICAgIHVse1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2U1ZTVlNTtcbiAgICAgICAgICAgICAgICBjb2xvcjojMzMzMzMzO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgJi5hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzIxNGY3YTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuc2VjdGlvbjpudGgtY2hpbGQob2RkKXtcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XG59XG5cbmltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiB9XG5cbi5pbmZve1xuICAgIC5wYW5lbHtcbiAgICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XG4gICAgfVxuICAgIHB7XG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgIHBhZGRpbmctcmlnaHQ6MTI1cHg7XG4gICAgICAgaXtcbiAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICB0b3A6MDtcbiAgICAgICB9XG4gICAgfVxuICAgIC5wYW5lbC1oZWFkaW5ne1xuICAgICAgICBoNntcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnNlY3Rpb24tYWR2YW5jZS1zb2x1dGlvbiB1bCBsaSBhIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2VjdGlvbi1hZHZhbmNlLXNvbHV0aW9uIHVsIGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnNlY3Rpb246bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmluZm8gLnBhbmVsIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbn1cbi5pbmZvIHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDEyNXB4O1xufVxuLmluZm8gcCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmluZm8gLnBhbmVsLWhlYWRpbmcgaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/advancesolution/advancesolution.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/advancesolution/advancesolution.component.ts ***!
  \**************************************************************/
/*! exports provided: AdvancesolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancesolutionComponent", function() { return AdvancesolutionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let AdvancesolutionComponent = class AdvancesolutionComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
    }
};
AdvancesolutionComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
AdvancesolutionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advancesolution',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advancesolution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/advancesolution/advancesolution.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advancesolution.component.scss */ "./src/app/advancesolution/advancesolution.component.scss")).default]
    })
], AdvancesolutionComponent);



/***/ }),

/***/ "./src/app/ai/ai.component.scss":
/*!**************************************!*\
  !*** ./src/app/ai/ai.component.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul.info-bar {\n  margin-left: 5px;\n  align-self: center;\n}\nul.info-bar li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\nul.info-bar li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\nul.info-bar li p {\n  font-weight: normal;\n}\nul.info-bar.obtain-visibility {\n  margin-left: 50px;\n}\n.automation-level {\n  padding-bottom: 0px;\n}\n.automation-level table {\n  border: 1px solid #dee2e6;\n  border-top: none;\n}\n.automation-level table td, .automation-level table th {\n  vertical-align: middle;\n}\n.automation-level table tr td:first-child {\n  border-right: 1px solid #dee2e6;\n}\n.automation-level table tr td:nth-child(2) {\n  position: relative;\n  padding-left: 70px;\n}\n.automation-level table .bg-tringle {\n  width: 0;\n  height: 0;\n  border-top: 70px solid transparent;\n  border-bottom: 70px solid transparent;\n  border-left: 60px solid #50a9be;\n  background: none !important;\n  position: absolute;\n  left: -1px;\n  top: 5px;\n}\n.automation-level table .bg-1 {\n  background: #50a9be;\n}\n.automation-level table .bg-2 {\n  background: #49a2bc;\n}\n.automation-level table .bg-2.bg-tringle {\n  border-left: 60px solid #49a2bc;\n}\n.automation-level table .bg-3 {\n  background: #4196ba;\n}\n.automation-level table .bg-3.bg-tringle {\n  border-left: 60px solid #4196ba;\n}\n.automation-level table .bg-4 {\n  background: #388cb7;\n}\n.automation-level table .bg-4.bg-tringle {\n  border-left: 60px solid #388cb7;\n}\n.automation-level table .bg-4 .list-no * {\n  color: #fff;\n}\n.automation-level table .bg-4 .bullet-no {\n  color: #fff;\n}\n.automation-level table .bg-5 {\n  background: #3183b5;\n}\n.automation-level table .bg-5.bg-tringle {\n  border-left: 60px solid #3183b5;\n}\n.automation-level table .bg-5 .list-no * {\n  color: #fff;\n}\n.automation-level table .bg-5 .bullet-no {\n  color: #fff;\n}\n.automation-level table .wrap-div {\n  display: flex;\n  color: #fff;\n}\n.automation-level table .wrap-div p {\n  line-height: 22px;\n  margin-bottom: 0px;\n}\n.automation-level table .wrap-div h5 {\n  color: #fff;\n}\n.automation-level table .auto-level li {\n  padding: 0 0 5px 20px;\n  font-weight: normal;\n}\n.automation-level table .bullet-no {\n  font-size: 50px;\n  align-self: center;\n  margin-right: 15px;\n  margin-left: 15px;\n  display: flex;\n  width: 100px;\n}\n.automation-level .table td, .automation-level .table th {\n  height: 150px;\n}\n.section-ai .panel {\n  border: 1px solid #ccc;\n  padding: 10px;\n  min-height: 150px;\n  display: flex;\n  justify-self: center;\n  align-content: center;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.our-capability {\n  background: #d4e6f6;\n  border-top: 1px dashed #ccc;\n  padding: 30px 0px 20px;\n}\n.design-principal {\n  border-top: 1px solid #e4e4e4;\n  background: #f4f4f4;\n}\n.design-principal .info-bar {\n  margin-left: 20px;\n}\n.design-principal .info-bar li {\n  font-weight: normal;\n}\n.design-principal .divider {\n  border-right: 1px solid #e4e4e4;\n  border-left: 1px solid #e4e4e4;\n}\n.design-principal .panel {\n  padding-top: 25px;\n}\n.our-capability-key {\n  background: url('our-capability.jpg') no-repeat bottom center;\n  background-size: cover;\n}\n.our-capability-key ul.info-bar li {\n  color: #fff;\n}\n.our-capability-key ul.info-bar li::before {\n  background: #fff;\n}\n.cutting-edge-sol-row {\n  padding-top: 0px;\n}\n.cutting-edge-sol-row .container {\n  background: url('cutting-edge.jpg') no-repeat top left;\n  background-size: cover;\n  padding-top: 125px;\n}\n.cutting-edge-sol-row .container .title-highlighter {\n  font-weight: bold;\n  color: #02830F;\n}\n.cutting-edge-sol-row .container ul.info-bar li {\n  font-weight: normal;\n  color: #191919;\n}\n.cutting-edge-sol-row .container ul.info-bar li::before {\n  background: #333333;\n  width: 5px;\n  height: 5px;\n}\n.a-b-p {\n  background: #bae6c3;\n  border-radius: 30px;\n  border: 1px dashed #a3ca8f;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 15px 0;\n  margin-bottom: 25px;\n}\n.a-b-p p {\n  margin: 0px;\n}\n.a-b-p .running-text {\n  font-size: 24px;\n}\n.our-approch {\n  background: #ffe07d;\n}\n.our-approch .col {\n  margin-bottom: 30px;\n}\n.our-approch .panel {\n  background: #fff;\n  height: 100%;\n  padding: 15px 25px;\n}\n.our-approch .panel ul.info-bar li {\n  font-size: 12px;\n  padding-bottom: 0px;\n}\n.our-approch .panel ul.info-bar li::before {\n  width: 5px;\n  height: 5px;\n}\n.biz-process {\n  padding-top: 0px;\n}\n.biz-process .panel {\n  background: #f9f9f9;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  padding: 0;\n  box-shadow: 1px 1px 4px 1px #e0e0e0;\n}\n.biz-process .panel h5 {\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.biz-process .panel p {\n  padding: 0 20px;\n}\n.biz-process .panel .icon-circle {\n  margin: 15px auto;\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 5px solid;\n}\n.biz-process .panel .icon-circle i {\n  line-height: 90px;\n}\n.biz-process .panel .icon-circle svg {\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  display: block;\n}\n.biz-process .panel .icon-circle.color_1 {\n  background: #f79ba4;\n  border-color: #b66d71;\n}\n.biz-process .panel .icon-circle.color_2 {\n  background: #bbead7;\n  border-color: #7db29b;\n}\n.biz-process .panel .icon-circle.color_3 {\n  background: #c8ceea;\n  border-color: #9ba3ce;\n}\n.biz-process .panel .icon-circle.color_4 {\n  background: #e3f0cb;\n  border-color: #9fb281;\n}\n.biz-process .panel .icon-circle.color_5 {\n  background: #fbdac2;\n  border-color: #c1a896;\n}\n.biz-process .panel .icon-circle.color_6 {\n  background: #ead0f4;\n  border-color: #a186aa;\n}\n.biz-process h6 {\n  margin-bottom: 40px;\n}\n.tab-section {\n  padding: 70px 0 25px;\n}\n.main-tabber-nav {\n  border: 2px solid #006a99;\n  border-radius: 25px;\n  display: table;\n  justify-content: center;\n  align-self: center;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 10px 0px;\n}\n.main-tabber-nav a {\n  text-decoration: none;\n  padding: 15px 100px;\n  color: #006a99;\n}\n.main-tabber-nav a.active {\n  background: #006a99;\n  color: #fff;\n  margin-right: -1px;\n}\n.section-ai.inner-nav-tab .tab-navigation .center-div {\n  display: table;\n  margin: 0 auto;\n}\n.section-ai:not(.active) {\n  display: none;\n}\n.section-ai.inner-nav-tab .nav-tabs .nav-item .nav-link {\n  font-size: 14px;\n  padding: 0px 10px;\n  text-align: center;\n}\n.section-ai.inner-nav-tab .nav-tabs .nav-item .nav-link.active .icon-ex-small {\n  background-color: #006a99;\n}\n.section-ai.inner-nav-tab .nav-tabs .nav-item .nav-link.active .icon-ex-small svg {\n  fill: #ffffff;\n}\n.section-ai.inner-nav-tab .nav-tabs .nav-item .nav-link .icon-ex-small {\n  display: table;\n  margin: 0 auto;\n  border-radius: 50px;\n  border: 1px solid #006a99;\n  padding: 10px;\n}\n.section-ai.inner-nav-tab .nav-tabs .nav-item .nav-link .icon-ex-small svg {\n  width: 40px;\n  height: 40px;\n  fill: #006a99;\n}\n.section-ai .panel-container .panel {\n  border: 1px solid #c1dbe6;\n  background: #f8f8f8;\n  justify-content: center;\n  padding: 25px 10px;\n  border-radius: 5px;\n  min-height: 100px;\n}\n.section-ai .panel-container .panel h5 {\n  color: #006A99;\n  text-align: center;\n  font-size: 18px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2FpL2FpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9haS9haS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NOO0FERUk7RUFDRSxtQkFBQTtBQ0FOO0FESUU7RUFDRSxpQkFBQTtBQ0ZKO0FETUE7RUFDRSxtQkFBQTtBQ0hGO0FESUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FDRko7QURHSTtFQUNFLHNCQUFBO0FDRE47QURJTTtFQUNFLCtCQUFBO0FDRlI7QURJTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNGUjtBREtJO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNITjtBREtJO0VBQ0UsbUJBQUE7QUNITjtBREtJO0VBQ0UsbUJBQUE7QUNITjtBRElNO0VBQ0UsK0JBQUE7QUNGUjtBREtJO0VBQ0UsbUJBQUE7QUNITjtBRElNO0VBQ0UsK0JBQUE7QUNGUjtBREtJO0VBQ0UsbUJBQUE7QUNITjtBRElNO0VBQ0UsK0JBQUE7QUNGUjtBRElNO0VBQ0UsV0FBQTtBQ0ZSO0FESU07RUFDRSxXQUFBO0FDRlI7QURLSTtFQUNFLG1CQUFBO0FDSE47QURJTTtFQUNFLCtCQUFBO0FDRlI7QURJTTtFQUNFLFdBQUE7QUNGUjtBRElNO0VBQ0UsV0FBQTtBQ0ZSO0FES0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0hOO0FESU07RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDRlI7QURJTTtFQUNFLFdBQUE7QUNGUjtBRE1NO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0pOO0FET0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNMTjtBRFdFO0VBQ0UsYUFBQTtBQ1JKO0FEYUU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDVko7QURjQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ1hGO0FEZ0JBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtBQ2JGO0FEY0U7RUFDRSxpQkFBQTtBQ1pKO0FEYUk7RUFDRSxtQkFBQTtBQ1hOO0FEZUU7RUFDRSwrQkFBQTtFQUNBLDhCQUFBO0FDYko7QURlRTtFQUNFLGlCQUFBO0FDYko7QURpQkE7RUFDRSw2REFBQTtFQUNBLHNCQUFBO0FDZEY7QURrQk07RUFDRSxXQUFBO0FDaEJSO0FEaUJRO0VBQ0ksZ0JBQUE7QUNmWjtBRHNCQTtFQUNFLGdCQUFBO0FDbkJGO0FEb0JFO0VBQ0Esc0RBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDbEJGO0FEbUJFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDakJKO0FEbUJFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDakJKO0FEa0JJO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ2hCTjtBRHNCQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDbkJKO0FEb0JJO0VBQ0UsV0FBQTtBQ2xCTjtBRHFCSTtFQUNFLGVBQUE7QUNuQk47QURzQkE7RUFDSSxtQkFBQTtBQ25CSjtBRG9CSTtFQUNJLG1CQUFBO0FDbEJSO0FEb0JJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNsQlI7QURxQmdCO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDbkJwQjtBRG9Cb0I7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ2xCeEI7QUQwQkE7RUFDRSxnQkFBQTtBQ3ZCRjtBRDhCQztFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNFLG1DQUFBO0FDNUJKO0FENkJFO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUMzQkg7QUQ4QkU7RUFDQyxlQUFBO0FDNUJIO0FEOEJFO0VBQ0MsaUJBQUE7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQzVCTjtBRDZCTTtFQUNFLGlCQUFBO0FDM0JSO0FENkJHO0VBQ0ssWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQzNCUjtBRDZCRztFQUNDLG1CQXpDSztFQTBDRCxxQkFBQTtBQzNCUjtBRDZCRztFQUNDLG1CQTVDTTtFQTZDRixxQkFBQTtBQzNCUjtBRDZCRztFQUNDLG1CQS9DSztFQWdERCxxQkFBQTtBQzNCUjtBRDZCRztFQUNDLG1CQWxETTtFQW1ERixxQkFBQTtBQzNCUjtBRDZCRztFQUNDLG1CQXJESztFQXNERCxxQkFBQTtBQzNCUjtBRDZCRztFQUNDLG1CQXhESztFQXlERCxxQkFBQTtBQzNCUjtBRGdDQztFQUNDLG1CQUFBO0FDOUJGO0FEa0NBO0VBQ0Esb0JBQUE7QUMvQkE7QURrQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQy9CRjtBRGdDRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDOUJKO0FEK0JJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUM3Qk47QURxQ007RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ2xDUjtBRHNDRTtFQUNFLGFBQUE7QUNwQ0o7QURzQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3BDSjtBRHNDTTtFQUNFLHlCQUFBO0FDcENSO0FEcUNRO0VBQ0UsYUFBQTtBQ25DVjtBRHVDRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNyQ047QURzQ0k7RUFDRCxXQUFBO0VBQ0EsWUFBQTtFQUNHLGFBQUE7QUNwQ047QUR5Q007RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUN2Q1I7QUR5Q1E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN2Q1YiLCJmaWxlIjoic3JjL2FwcC9haS9haS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLmluZm8tYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gIGxpIHtcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA4cHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICB9XG5cbiAgJi5vYnRhaW4tdmlzaWJpbGl0eSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cbn1cblxuLmF1dG9tYXRpb24tbGV2ZWx7XG4gIHBhZGRpbmctYm90dG9tOjBweDtcbiAgdGFibGV7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZGVlMmU2O1xuICAgIGJvcmRlci10b3A6bm9uZTtcbiAgICB0ZCwgdGh7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICB0cntcbiAgICAgIHRkOmZpcnN0LWNoaWxke1xuICAgICAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICB9XG4gICAgICB0ZDpudGgtY2hpbGQoMil7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5iZy10cmluZ2xle1xuICAgICAgd2lkdGg6IDA7IFxuICAgICAgaGVpZ2h0OiAwOyBcbiAgICAgIGJvcmRlci10b3A6IDcwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiA3MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWxlZnQ6IDYwcHggc29saWQgIzUwYTliZTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICB0b3A6NXB4O1xuICAgIH1cbiAgICAuYmctMXtcbiAgICAgIGJhY2tncm91bmQ6IzUwYTliZTtcbiAgICB9XG4gICAgLmJnLTJ7XG4gICAgICBiYWNrZ3JvdW5kOiM0OWEyYmM7XG4gICAgICAmLmJnLXRyaW5nbGV7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA2MHB4IHNvbGlkICM0OWEyYmM7XG4gICAgICB9XG4gICAgfVxuICAgIC5iZy0ze1xuICAgICAgYmFja2dyb3VuZDojNDE5NmJhO1xuICAgICAgJi5iZy10cmluZ2xle1xuICAgICAgICBib3JkZXItbGVmdDogNjBweCBzb2xpZCAjNDE5NmJhO1xuICAgICAgfVxuICAgIH1cbiAgICAuYmctNHtcbiAgICAgIGJhY2tncm91bmQ6IzM4OGNiNztcbiAgICAgICYuYmctdHJpbmdsZXtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDYwcHggc29saWQgIzM4OGNiNztcbiAgICAgIH1cbiAgICAgIC5saXN0LW5vICp7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICB9XG4gICAgICAuYnVsbGV0LW5ve1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgfVxuICAgIH1cbiAgICAuYmctNXtcbiAgICAgIGJhY2tncm91bmQ6IzMxODNiNTtcbiAgICAgICYuYmctdHJpbmdsZXtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDYwcHggc29saWQgIzMxODNiNTtcbiAgICAgIH1cbiAgICAgIC5saXN0LW5vICp7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICB9XG4gICAgICAuYnVsbGV0LW5ve1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgfVxuICAgIH1cbiAgICAud3JhcC1kaXZ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgY29sb3I6I2ZmZjtcbiAgICAgIHB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICB9XG4gICAgICBoNXtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmF1dG8tbGV2ZWx7XG4gICAgICBsaXtcbiAgICAgIHBhZGRpbmc6IDAgMCA1cHggMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJ1bGxldC1ub3tcbiAgICAgIGZvbnQtc2l6ZTo1MHB4O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICB9XG59XG5cbi5hdXRvbWF0aW9uLWxldmVse1xuICAudGFibGUgdGQsIC50YWJsZSB0aHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG59XG5cbi5zZWN0aW9uLWFpIHtcbiAgLnBhbmVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuXG4ub3VyLWNhcGFiaWxpdHkge1xuICBiYWNrZ3JvdW5kOiAjZDRlNmY2O1xuICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNjY2M7XG4gIHBhZGRpbmc6IDMwcHggMHB4IDIwcHg7XG59XG5cblxuXG4uZGVzaWduLXByaW5jaXBhbHtcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgI2U0ZTRlNDtcbiAgYmFja2dyb3VuZDojZjRmNGY0O1xuICAuaW5mby1iYXJ7XG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICBsaXtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICAgXG4gIH1cbiAgLmRpdmlkZXJ7XG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZTRlNGU0O1xuICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCAjZTRlNGU0XG4gIH1cbiAgLnBhbmVse1xuICAgIHBhZGRpbmctdG9wOjI1cHg7XG4gIH1cbn1cblxuLm91ci1jYXBhYmlsaXR5LWtleSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL21hbmFnc2VydmljZS9vdXItY2FwYWJpbGl0eS5qcGcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIHVsIHtcbiAgICAmLmluZm8tYmFyIHtcbiAgICAgIGxpIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICY6OmJlZm9yZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY3V0dGluZy1lZGdlLXNvbC1yb3d7XG4gIHBhZGRpbmctdG9wOjBweDtcbiAgLmNvbnRhaW5lcntcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFuYWdzZXJ2aWNlL2N1dHRpbmctZWRnZS5qcGcpIG5vLXJlcGVhdCB0b3AgbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZy10b3A6MTI1cHg7XG4gIC50aXRsZS1oaWdobGlnaHRlcntcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGNvbG9yOiMwMjgzMEY7XG4gIH1cbiAgdWwuaW5mby1iYXIgbGl7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjojMTkxOTE5O1xuICAgICY6OmJlZm9yZXtcbiAgICAgIGJhY2tncm91bmQ6IzMzMzMzMztcbiAgICAgIHdpZHRoOiA1cHg7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn1cbn1cblxuLmEtYi1we1xuICAgIGJhY2tncm91bmQ6I2JhZTZjMztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjoxcHggZGFzaGVkICNhM2NhOGY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICBtYXJnaW4tYm90dG9tOjI1cHg7XG4gICAgcHtcbiAgICAgIG1hcmdpbjowcHg7XG4gICAgICBcbiAgICB9XG4gICAgLnJ1bm5pbmctdGV4dCB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxufVxuLm91ci1hcHByb2Noe1xuICAgIGJhY2tncm91bmQ6I2ZmZTA3ZDtcbiAgICAuY29se1xuICAgICAgICBtYXJnaW4tYm90dG9tOjMwcHg7XG4gICAgfVxuICAgIC5wYW5lbHtcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgcGFkZGluZzoxNXB4IDI1cHg7XG4gICAgICAgIHVse1xuICAgICAgICAgICAgJi5pbmZvLWJhcntcbiAgICAgICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjBweDtcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5iaXotcHJvY2Vzc3tcbiAgcGFkZGluZy10b3A6MHB4O1xuICAkZmlyc3Q6I2Y3OWJhNDtcbiAgJHNlY29uZDojYmJlYWQ3O1xuICAkdGhpcmQ6I2M4Y2VlYTtcbiAgJGZvdXJ0aDojZTNmMGNiO1xuICAkZmlmdGg6I2ZiZGFjMjtcbiAgJHNpeHRoOiNlYWQwZjQ7XG5cdC5wYW5lbHtcblx0XHRiYWNrZ3JvdW5kOiNmOWY5Zjk7XG5cdFx0Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDIyNCwgMjI0LCAyMjQsIDEpO1xuXHRcdGJvcmRlci1yYWRpdXM6NXB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdFx0cGFkZGluZzowO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCByZ2JhKDIyNCwgMjI0LCAyMjQsIDEpO1xuXHRcdGg1e1xuXHRcdFx0Y29sb3I6IzMzMzMzMztcblx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XG5cdFx0XHRtYXJnaW4tYm90dG9tOjBweDtcblx0XHR9XG5cdFx0XG5cdFx0cHtcblx0XHRcdHBhZGRpbmc6MCAyMHB4O1xuXHRcdH1cblx0XHQuaWNvbi1jaXJjbGV7XG5cdFx0XHRtYXJnaW46IDE1cHggYXV0bztcbiAgICAgIGhlaWdodDogOTBweDtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlcjo1cHggc29saWQ7XG4gICAgICBpe1xuICAgICAgICBsaW5lLWhlaWdodDogOTBweDtcbiAgICAgIH1cblx0XHRcdHN2Z3tcbiAgICAgICAgaGVpZ2h0OjUwcHg7XG4gICAgICAgIHdpZHRoOjUwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblx0XHRcdH1cblx0XHRcdCYuY29sb3JfMXtcblx0XHRcdFx0YmFja2dyb3VuZDokZmlyc3Q7XG4gICAgICAgIGJvcmRlci1jb2xvcjojYjY2ZDcxO1xuXHRcdFx0fVxuXHRcdFx0Ji5jb2xvcl8ye1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiRzZWNvbmQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjojN2RiMjliO1xuXHRcdFx0fVxuXHRcdFx0Ji5jb2xvcl8ze1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiR0aGlyZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiM5YmEzY2U7XG5cdFx0XHR9XG5cdFx0XHQmLmNvbG9yXzR7XG5cdFx0XHRcdGJhY2tncm91bmQ6JGZvdXJ0aDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiM5ZmIyODE7XG5cdFx0XHR9XG5cdFx0XHQmLmNvbG9yXzV7XG5cdFx0XHRcdGJhY2tncm91bmQ6JGZpZnRoO1xuICAgICAgICBib3JkZXItY29sb3I6I2MxYTg5Njtcblx0XHRcdH1cblx0XHRcdCYuY29sb3JfNntcblx0XHRcdFx0YmFja2dyb3VuZDokc2l4dGg7XG4gICAgICAgIGJvcmRlci1jb2xvcjojYTE4NmFhO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGg2e1xuXHRcdG1hcmdpbi1ib3R0b206NDBweDtcblx0fVxufVxuXG4udGFiLXNlY3Rpb257XG5wYWRkaW5nOjcwcHggMCAyNXB4O1xufVxuXG4ubWFpbi10YWJiZXItbmF2e1xuICBib3JkZXI6MnB4IHNvbGlkICMwMDZhOTk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzoxMHB4IDBweDtcbiAgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzoxNXB4IDEwMHB4O1xuICAgIGNvbG9yOiMwMDZhOTk7XG4gICAgJi5hY3RpdmV7XG4gICAgICBiYWNrZ3JvdW5kOiMwMDZhOTk7XG4gICAgICBjb2xvcjojZmZmO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgIH1cbiAgfVxufVxuXG4uc2VjdGlvbi1haXtcbiAgJi5pbm5lci1uYXYtdGFiIHtcbiAgICAudGFiLW5hdmlnYXRpb257XG4gICAgICAuY2VudGVyLWRpdntcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfSBcbiAgICB9XG4gIH1cbiAgJjpub3QoLmFjdGl2ZSl7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG4gICYuaW5uZXItbmF2LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGlua3tcbiAgICBmb250LXNpemU6MTRweDtcbiAgICBwYWRkaW5nOjBweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAmLmFjdGl2ZXtcbiAgICAgIC5pY29uLWV4LXNtYWxse1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDZhOTk7XG4gICAgICAgIHN2Z3tcbiAgICAgICAgICBmaWxsOiNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cdFx0Lmljb24tZXgtc21hbGx7XG5cdFx0ICBkaXNwbGF5OnRhYmxlO1xuXHRcdCAgbWFyZ2luOjAgYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3JkZXI6MXB4IHNvbGlkICMwMDZhOTk7XG4gICAgICBwYWRkaW5nOjEwcHg7XG5cdFx0ICBzdmd7XG5cdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdGhlaWdodDogNDBweDtcbiAgICAgIGZpbGw6IzAwNmE5OTtcblx0XHQgIH1cblx0XHR9XG5cdCAgfVxuICAgIC5wYW5lbC1jb250YWluZXJ7XG4gICAgICAucGFuZWx7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2MxZGJlNjtcbiAgICAgICAgYmFja2dyb3VuZDojZjhmOGY4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzoyNXB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgXG4gICAgICAgIGg1e1xuICAgICAgICAgIGNvbG9yOiMwMDZBOTk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxufSIsInVsLmluZm8tYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxudWwuaW5mby1iYXIgbGkge1xuICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnVsLmluZm8tYmFyIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG51bC5pbmZvLWJhciBsaSBwIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbnVsLmluZm8tYmFyLm9idGFpbi12aXNpYmlsaXR5IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5hdXRvbWF0aW9uLWxldmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5hdXRvbWF0aW9uLWxldmVsIHRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5hdXRvbWF0aW9uLWxldmVsIHRhYmxlIHRkLCAuYXV0b21hdGlvbi1sZXZlbCB0YWJsZSB0aCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYXV0b21hdGlvbi1sZXZlbCB0YWJsZSB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4uYXV0b21hdGlvbi1sZXZlbCB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogNzBweDtcbn1cbi5hdXRvbWF0aW9uLWxldmVsIHRhYmxlIC5iZy10cmluZ2xlIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogNzBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNzBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDYwcHggc29saWQgIzUwYTliZTtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogNXB4O1xufVxuLmF1dG9tYXRpb24tbGV2ZWwgdGFibGUgLmJnLTEge1xuICBiYWNrZ3JvdW5kOiAjNTBhOWJlO1xufVxuLmF1dG9tYXRpb24tbGV2ZWwgdGFibGUgLmJnLTIge1xuICBiYWNrZ3JvdW5kOiAjNDlhMmJjO1xufVxuLmF1dG9tYXRpb24tbGV2ZWwgdGFibGUgLmJnLTIuYmctdHJpbmdsZSB7XG4gIGJvcmRlci1sZWZ0OiA2MHB4IHNvbGlkICM0OWEyYmM7XG59XG4uYXV0b21hdGlvbi1sZXZlbCB0YWJsZSAuYmctMyB7XG4gIGJhY2tncm91bmQ6ICM0MTk2YmE7XG59XG4uYXV0b21hdGlvbi1sZXZlbCB0YWJsZSAuYmctMy5iZy10cmluZ2xlIHtcbiAgYm9yZGVyLWxlZnQ6IDYwcHggc29saWQgIzQxOTZiYTtcbn1cbi5hdXRvbWF0aW9uLWxldmVsIHRhYmxlIC5iZy00IHtcbiAgYmFja2dyb3VuZDogIzM4OGNiNztcbn1cbi5hdXRvbWF0aW9uLWxldmVsIHRhYmxlIC5iZy00LmJnLXRyaW5nbGUge1xuICBib3JkZXItbGVmdDogNjBweCBzb2xpZCAjMzg4Y2I3O1xufVxuLmF1dG9tYXRpb24tbGV2ZWwgdGFibGUgLmJnLTQgLmxpc3Qtbm8gKiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmF1dG9tYXRpb24tbGV2ZWwgdGFibGUgLmJnLTQgLmJ1bGxldC1ubyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmF1dG9tYXRpb24tbGV2ZWwgdGFibGUgLmJnLTUge1xuICBiYWNrZ3JvdW5kOiAjMzE4M2I1O1xufVxuLmF1dG9tYXRpb24tbGV2ZWwgdGFibGUgLmJnLTUuYmctdHJpbmdsZSB7XG4gIGJvcmRlci1sZWZ0OiA2MHB4IHNvbGlkICMzMTgzYjU7XG59XG4uYXV0b21hdGlvbi1sZXZlbCB0YWJsZSAuYmctNSAubGlzdC1ubyAqIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYXV0b21hdGlvbi1sZXZlbCB0YWJsZSAuYmctNSAuYnVsbGV0LW5vIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYXV0b21hdGlvbi1sZXZlbCB0YWJsZSAud3JhcC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5hdXRvbWF0aW9uLWxldmVsIHRhYmxlIC53cmFwLWRpdiBwIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5hdXRvbWF0aW9uLWxldmVsIHRhYmxlIC53cmFwLWRpdiBoNSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmF1dG9tYXRpb24tbGV2ZWwgdGFibGUgLmF1dG8tbGV2ZWwgbGkge1xuICBwYWRkaW5nOiAwIDAgNXB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYXV0b21hdGlvbi1sZXZlbCB0YWJsZSAuYnVsbGV0LW5vIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmF1dG9tYXRpb24tbGV2ZWwgLnRhYmxlIHRkLCAuYXV0b21hdGlvbi1sZXZlbCAudGFibGUgdGgge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uc2VjdGlvbi1haSAucGFuZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ub3VyLWNhcGFiaWxpdHkge1xuICBiYWNrZ3JvdW5kOiAjZDRlNmY2O1xuICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNjY2M7XG4gIHBhZGRpbmc6IDMwcHggMHB4IDIwcHg7XG59XG5cbi5kZXNpZ24tcHJpbmNpcGFsIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG59XG4uZGVzaWduLXByaW5jaXBhbCAuaW5mby1iYXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5kZXNpZ24tcHJpbmNpcGFsIC5pbmZvLWJhciBsaSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uZGVzaWduLXByaW5jaXBhbCAuZGl2aWRlciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U0ZTRlNDtcbn1cbi5kZXNpZ24tcHJpbmNpcGFsIC5wYW5lbCB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG4ub3VyLWNhcGFiaWxpdHkta2V5IHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFuYWdzZXJ2aWNlL291ci1jYXBhYmlsaXR5LmpwZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ub3VyLWNhcGFiaWxpdHkta2V5IHVsLmluZm8tYmFyIGxpIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ub3VyLWNhcGFiaWxpdHkta2V5IHVsLmluZm8tYmFyIGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY3V0dGluZy1lZGdlLXNvbC1yb3cge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLmN1dHRpbmctZWRnZS1zb2wtcm93IC5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9tYW5hZ3NlcnZpY2UvY3V0dGluZy1lZGdlLmpwZykgbm8tcmVwZWF0IHRvcCBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nLXRvcDogMTI1cHg7XG59XG4uY3V0dGluZy1lZGdlLXNvbC1yb3cgLmNvbnRhaW5lciAudGl0bGUtaGlnaGxpZ2h0ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMjgzMEY7XG59XG4uY3V0dGluZy1lZGdlLXNvbC1yb3cgLmNvbnRhaW5lciB1bC5pbmZvLWJhciBsaSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMTkxOTE5O1xufVxuLmN1dHRpbmctZWRnZS1zb2wtcm93IC5jb250YWluZXIgdWwuaW5mby1iYXIgbGk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xufVxuXG4uYS1iLXAge1xuICBiYWNrZ3JvdW5kOiAjYmFlNmMzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2EzY2E4ZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5hLWItcCBwIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uYS1iLXAgLnJ1bm5pbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLm91ci1hcHByb2NoIHtcbiAgYmFja2dyb3VuZDogI2ZmZTA3ZDtcbn1cbi5vdXItYXBwcm9jaCAuY29sIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5vdXItYXBwcm9jaCAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbn1cbi5vdXItYXBwcm9jaCAucGFuZWwgdWwuaW5mby1iYXIgbGkge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4ub3VyLWFwcHJvY2ggLnBhbmVsIHVsLmluZm8tYmFyIGxpOjpiZWZvcmUge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbn1cblxuLmJpei1wcm9jZXNzIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5iaXotcHJvY2VzcyAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCAjZTBlMGUwO1xufVxuLmJpei1wcm9jZXNzIC5wYW5lbCBoNSB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmJpei1wcm9jZXNzIC5wYW5lbCBwIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmJpei1wcm9jZXNzIC5wYW5lbCAuaWNvbi1jaXJjbGUge1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiA1cHggc29saWQ7XG59XG4uYml6LXByb2Nlc3MgLnBhbmVsIC5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG4uYml6LXByb2Nlc3MgLnBhbmVsIC5pY29uLWNpcmNsZSBzdmcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYml6LXByb2Nlc3MgLnBhbmVsIC5pY29uLWNpcmNsZS5jb2xvcl8xIHtcbiAgYmFja2dyb3VuZDogI2Y3OWJhNDtcbiAgYm9yZGVyLWNvbG9yOiAjYjY2ZDcxO1xufVxuLmJpei1wcm9jZXNzIC5wYW5lbCAuaWNvbi1jaXJjbGUuY29sb3JfMiB7XG4gIGJhY2tncm91bmQ6ICNiYmVhZDc7XG4gIGJvcmRlci1jb2xvcjogIzdkYjI5Yjtcbn1cbi5iaXotcHJvY2VzcyAucGFuZWwgLmljb24tY2lyY2xlLmNvbG9yXzMge1xuICBiYWNrZ3JvdW5kOiAjYzhjZWVhO1xuICBib3JkZXItY29sb3I6ICM5YmEzY2U7XG59XG4uYml6LXByb2Nlc3MgLnBhbmVsIC5pY29uLWNpcmNsZS5jb2xvcl80IHtcbiAgYmFja2dyb3VuZDogI2UzZjBjYjtcbiAgYm9yZGVyLWNvbG9yOiAjOWZiMjgxO1xufVxuLmJpei1wcm9jZXNzIC5wYW5lbCAuaWNvbi1jaXJjbGUuY29sb3JfNSB7XG4gIGJhY2tncm91bmQ6ICNmYmRhYzI7XG4gIGJvcmRlci1jb2xvcjogI2MxYTg5Njtcbn1cbi5iaXotcHJvY2VzcyAucGFuZWwgLmljb24tY2lyY2xlLmNvbG9yXzYge1xuICBiYWNrZ3JvdW5kOiAjZWFkMGY0O1xuICBib3JkZXItY29sb3I6ICNhMTg2YWE7XG59XG4uYml6LXByb2Nlc3MgaDYge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4udGFiLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA3MHB4IDAgMjVweDtcbn1cblxuLm1haW4tdGFiYmVyLW5hdiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDZhOTk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG4ubWFpbi10YWJiZXItbmF2IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHggMTAwcHg7XG4gIGNvbG9yOiAjMDA2YTk5O1xufVxuLm1haW4tdGFiYmVyLW5hdiBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwMDZhOTk7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG59XG5cbi5zZWN0aW9uLWFpLmlubmVyLW5hdi10YWIgLnRhYi1uYXZpZ2F0aW9uIC5jZW50ZXItZGl2IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNlY3Rpb24tYWk6bm90KC5hY3RpdmUpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWN0aW9uLWFpLmlubmVyLW5hdi10YWIgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VjdGlvbi1haS5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSAuaWNvbi1leC1zbWFsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDZhOTk7XG59XG4uc2VjdGlvbi1haS5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSAuaWNvbi1leC1zbWFsbCBzdmcge1xuICBmaWxsOiAjZmZmZmZmO1xufVxuLnNlY3Rpb24tYWkuaW5uZXItbmF2LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluayAuaWNvbi1leC1zbWFsbCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNmE5OTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zZWN0aW9uLWFpLmlubmVyLW5hdi10YWIgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsgLmljb24tZXgtc21hbGwgc3ZnIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZmlsbDogIzAwNmE5OTtcbn1cbi5zZWN0aW9uLWFpIC5wYW5lbC1jb250YWluZXIgLnBhbmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxZGJlNjtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cbi5zZWN0aW9uLWFpIC5wYW5lbC1jb250YWluZXIgLnBhbmVsIGg1IHtcbiAgY29sb3I6ICMwMDZBOTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/ai/ai.component.ts":
/*!************************************!*\
  !*** ./src/app/ai/ai.component.ts ***!
  \************************************/
/*! exports provided: AiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AiComponent", function() { return AiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AiComponent = class AiComponent {
    constructor() {
        this.tab = 'tab1';
        this.bizProcess = [
            {
                title: 'Repetitive Tasks',
                color: 'skyblue',
                description: `Carried out 50-60 times a day`,
                icon: '#icon_repTasks'
            },
            {
                title: 'Process List',
                color: 'yellow ',
                description: `and Store`,
                icon: '#icon_processList'
            },
            {
                title: 'Data Entry Periodic',
                color: 'orange',
                description: `reporting and data analysis`,
                icon: '#icon_dataEntry'
            },
            {
                title: 'Mass Email Generation',
                color: 'limegreen',
                description: `Archiving and extracting`,
                icon: '#icon_massEmail'
            },
            {
                title: 'Data Conversion',
                color: 'purple',
                description: `Conversion of data format and graphics`,
                icon: '#icon_dataCon'
            },
            {
                title: 'ERP Transactions',
                color: 'blue',
                description: `ERP and other back office transactions`,
                icon: '#icon_ERPtran'
            },
        ];
        this.automationLevel = [{
                title: 'Full Attention Needed',
                despcription: `Simple tasks in existing human workflow are 
automated; human handles all exceptions`,
                infokeys: [
                    { infokey: 'Automated chatbot for policy related queries' },
                    { infokey: 'OCR engine for digitizing hard copy documents' }
                ]
            },
            {
                title: 'Partially Attended',
                despcription: `Simple exception handling, status 
alert, human still monitors the overall process`,
                infokeys: [
                    { infokey: 'Anomaly detection and automated alerts (e.g. for Merchant contracts)' },
                    { infokey: 'RPAs for data entry and aggregation across systems (e.g. POs in Ariba)' }
                ]
            },
            {
                title: 'Limited Auto Pilot',
                despcription: `System monitors overall process, 
prompts human to intervene when it can’t handle`,
                infokeys: [
                    { infokey: 'Finance budget consolidation and forecasting' },
                    { infokey: 'Audit process automation' }
                ]
            },
            {
                title: 'Mostly Auto Pilot',
                despcription: `System operates without human input/ 
oversight except for pre-defined areas`,
                infokeys: [
                    { infokey: 'Employee engagement personalization' },
                    { infokey: 'Marketing campaign design based on customer 360 information' },
                    { infokey: 'Help Desk Ticket Automation' }
                ]
            },
            {
                title: 'Cognitive Automation',
                despcription: `System handles multiple fuzzy inputs, fuzzy 
objectives, adaptive optimization`,
                infokeys: [
                    { infokey: 'Automating Cinema Showtime Scheduling' },
                    { infokey: 'Automated Portfolio Tracking & Valuation Tool' },
                    { infokey: 'Automated Data ETL for Card Issuer' }
                ]
            }
        ];
        this.finance = [
            {
                title: 'Billing/ Invoicing'
            },
            {
                title: 'Statutory Reporting'
            },
            {
                title: 'Account Closing'
            },
            {
                title: 'Credit Management'
            },
            {
                title: 'Statement Distribution'
            },
            {
                title: 'Debt Recovery/ Collections'
            },
            {
                title: 'Financial Report Consolidation'
            },
            {
                title: 'Labour Reconciliation'
            },
            {
                title: 'Cost Allocation'
            },
            {
                title: 'Inventory Reconciliation'
            },
            {
                title: 'Revenue Recognition'
            },
            {
                title: 'Report Aggregation'
            },
            {
                title: 'Funds Transfer (sweep)'
            },
            {
                title: 'Limits Management'
            },
            {
                title: 'Amortisation & Depreciation'
            },
            {
                title: 'Controls Verification'
            },
            {
                title: 'Bank and Credit Card Reconciliation'
            },
            {
                title: 'Journal Entry Creation and Verification'
            },
            {
                title: 'Balance Sheet Account Reconciliation'
            },
            {
                title: 'Variance Analysis'
            }
        ];
        this.it = [
            {
                title: 'FTP and File Management'
            },
            {
                title: 'Incident Management'
            },
            {
                title: 'Communication including Notifications and Alerts'
            },
            {
                title: 'Diagnostics and System Checks'
            },
            {
                title: 'Email Processing and Distribution'
            },
            {
                title: 'Backup and Patch Management'
            },
            {
                title: 'User Experience Monitoring'
            },
            {
                title: 'Legacy Non-API Integration'
            },
            {
                title: 'User Provisioning'
            },
            {
                title: 'Log Analysis'
            },
            {
                title: 'Auto-Resolution of Tickets'
            },
            {
                title: 'Capacity Planning'
            },
            {
                title: 'Server and Application Monitoring'
            },
            {
                title: 'Security Controls'
            },
            {
                title: 'Workflow Monitoring'
            },
            {
                title: 'Single Click Software Installations'
            },
            {
                title: 'Test Case Generation'
            },
            {
                title: 'Credential Verification'
            },
            {
                title: 'Smart Batch Processing'
            },
            {
                title: 'Data and Content Aggregation, Contextualisation and Migration'
            }
        ];
        this.sm = [
            {
                title: 'Pipeline Management including Automated Dashboard'
            },
            {
                title: 'Data Cleansing'
            },
            {
                title: 'Order Management'
            },
            {
                title: 'Credit Checks'
            },
            {
                title: 'Exchange Rate Tracking'
            },
            {
                title: 'Campaign Management'
            },
            {
                title: 'CRM ERP Data Replication'
            },
            {
                title: 'Mobile Application Integration'
            },
            {
                title: 'HRIS CRM Scorecard Management'
            },
            {
                title: 'Payment Handling'
            },
            {
                title: 'Shelf Audits'
            },
            {
                title: 'Lead Management'
            },
            {
                title: 'Merchandizing Optimisation'
            },
            {
                title: 'External Portal Updates'
            },
            {
                title: ' Invoice Creation Distribution'
            },
            {
                title: 'Automate Rewards and Gifts'
            },
            {
                title: 'Social Media Monitoring and Management'
            },
            {
                title: 'Client Personalisation'
            },
            {
                title: 'Data Aggregation for Market Intelligence'
            },
            {
                title: 'Real-time Competitive Pricing, Monitoring Analytics'
            }
        ];
        this.operation = [
            {
                title: 'Budgeting and Planning'
            },
            {
                title: 'Risk Management'
            },
            {
                title: 'Data Migration and Management'
            },
            {
                title: 'Portal Interactions'
            },
            {
                title: 'Store Planning'
            },
            {
                title: 'Facilities Management'
            },
            {
                title: 'Dashboard and Analytics'
            },
            {
                title: 'Vehicle Booking and Administration'
            },
            {
                title: 'Quality Assurance Management'
            },
            {
                title: 'CRM Updates'
            },
            {
                title: 'Outside Affiliations Review'
            },
            {
                title: 'Reports Management and Distribution'
            },
            {
                title: 'Inventory Management'
            },
            {
                title: 'Policy Administration and Servicing'
            },
            {
                title: 'Refund Processing'
            },
            {
                title: 'Gifts and Entertainment Reconciliation'
            },
            {
                title: 'Customer Due Diligence'
            },
            {
                title: 'Service Level Reporting'
            },
            {
                title: 'Fraud Detection'
            },
            {
                title: 'Staff Management'
            }
        ];
        this.sc = [
            {
                title: 'Product Categorisation'
            },
            {
                title: 'Claims and Billing'
            },
            {
                title: 'Proposals, Quotes and Questions'
            },
            {
                title: 'Vendor Selection and Procurement'
            },
            {
                title: 'Shipment Status Communication'
            },
            {
                title: 'Transport Notes'
            },
            {
                title: 'Proof of Delivery'
            },
            {
                title: 'Inventory Management'
            },
            {
                title: 'Custom Declarations'
            },
            {
                title: 'Work Order Management'
            },
            {
                title: 'Monthly Distribution Process'
            },
            {
                title: 'Refunds and Returns Monitoring and Processing'
            },
            {
                title: 'Goods Receipt and Confirmation'
            },
            {
                title: 'E-Auctions'
            },
            {
                title: 'Contract Management'
            },
            {
                title: 'Demand and Supply Forecasting'
            },
            {
                title: 'Freight Management'
            },
            {
                title: 'Bill of Lading'
            },
            {
                title: 'Invoice, Quote and Contract Management'
            },
            {
                title: 'Shipment Scheduling and Tracking'
            }
        ];
        this.admin = [
            {
                title: 'Generating Mass Emails from Multiple Systems and Documents'
            },
            {
                title: 'Call Routing'
            },
            {
                title: 'Data Quality Management'
            },
            {
                title: 'Internal and External Communication'
            },
            {
                title: 'Forms Processing'
            },
            {
                title: 'Data Entry'
            },
            {
                title: 'Data Cleansing and Verification'
            },
            {
                title: 'Travel Arrangements'
            },
            {
                title: 'Report Compilation and Distribution'
            },
            {
                title: 'Data Reconciliation and Management'
            },
            {
                title: 'Internet Application Processing'
            },
            {
                title: 'Web Scraping'
            },
            {
                title: 'Data Updates'
            },
            {
                title: 'File and Records Management'
            },
            {
                title: 'Data Migration'
            },
            {
                title: 'Office Equipment and Inventory Management'
            },
            {
                title: 'Data Extraction (PDFs, scanned documents and other formats)'
            },
            {
                title: 'Meeting, Scheduling and Calendar Management'
            },
            {
                title: 'Periodic Report Preparation and Dissemination'
            },
            {
                title: 'Mail Room Management'
            }
        ];
        this.cc = [
            {
                title: 'Reset Credentials'
            },
            {
                title: 'Customer Data Management'
            },
            {
                title: 'Automated Customer Notifications/ Reminders'
            },
            {
                title: 'Customer Inquiries'
            },
            {
                title: 'Information Verification'
            },
            {
                title: 'Transaction Automation'
            },
            {
                title: 'Ticket Management'
            },
            {
                title: 'Service Requests and Scheduling'
            },
            {
                title: 'Fraud Detection'
            },
            {
                title: 'CRM Updates'
            },
            {
                title: 'Enhanced Phone Support'
            },
            {
                title: 'L1 Support'
            },
            {
                title: 'Feedback and Surveys'
            },
            {
                title: 'Escalation Management'
            },
            {
                title: 'Case Classification and Routing'
            },
            {
                title: 'Progress Chasing'
            },
            {
                title: 'Service Level Management and Reporting'
            },
            {
                title: 'Price Matching'
            },
            {
                title: 'System Synchronisation'
            },
            {
                title: 'Renewal Notices'
            }
        ];
        this.cs = [
            {
                title: 'Customer Records'
            },
            {
                title: 'Dashboard Creation'
            },
            {
                title: 'Query Management'
            },
            {
                title: 'Customer Engagement Communications'
            },
            {
                title: 'Service Level Management'
            },
            {
                title: 'New Customer Welcome Packets'
            },
            {
                title: 'User and Access Management'
            },
            {
                title: 'Online Registrations'
            },
            {
                title: 'Account Administration'
            },
            {
                title: 'Customer Due Diligence'
            },
            {
                title: 'Self-Service'
            },
            {
                title: 'Customer Risk Rating and Monitoring'
            },
            {
                title: 'Complaint Management'
            },
            {
                title: 'Upsell Opportunity Reporting'
            },
            {
                title: 'Progress Chasing'
            },
            {
                title: 'Customer Experience/ Satisfaction Monitoring'
            },
            {
                title: 'Request and Change Management'
            },
            {
                title: 'Service Activation'
            },
            {
                title: 'Customer Personalisation'
            },
            {
                title: 'Customer Onboarding and Offboarding'
            }
        ];
        this.hr = [
            {
                title: 'Open Enrollment including Life Changes'
            },
            {
                title: 'Assessment and Survey Administration'
            },
            {
                title: 'Absence Management including Return To Work'
            },
            {
                title: 'Payroll Review'
            },
            {
                title: 'Legacy Payroll Automation'
            },
            {
                title: 'Salary Administration'
            },
            {
                title: 'Expense Management'
            },
            {
                title: 'Training and Education Administration'
            },
            {
                title: 'Benefits and Stock Administration'
            },
            {
                title: 'Equipment Administration'
            },
            {
                title: 'Compliance Monitoring and Reporting'
            },
            {
                title: 'Requisition Management'
            },
            {
                title: 'Employee Onboarding'
            },
            {
                title: 'Offer Letter Administration'
            },
            {
                title: 'Aggregate Resume Sourcing and Screening'
            },
            {
                title: 'External Portal Updates'
            },
            {
                title: 'Employment History Verification'
            },
            {
                title: 'Unemployment Verification'
            },
            {
                title: `Workman's Compensation Claims Monitoring and Automated Workflow`
            },
            {
                title: 'Automated Job Posting'
            }
        ];
        this.vmcl = [
            {
                title: 'IP/ Fraud Detection'
            },
            {
                title: 'Legal Correspondences'
            },
            {
                title: 'Credential Verifications'
            },
            {
                title: 'Due Diligence'
            },
            {
                title: 'Periodic Disclosures'
            },
            {
                title: 'Legal Analytics'
            },
            {
                title: 'Vendor Master File Management'
            },
            {
                title: 'Patent, Copyright and Trademark Process'
            },
            {
                title: 'Licensing and Registration'
            },
            {
                title: 'Records Digitisation'
            },
            {
                title: 'Outside Affiliations and Private Investments'
            },
            {
                title: 'Case and Data Compilation'
            },
            {
                title: 'Contract Governance'
            },
            {
                title: 'Client Risk Assessment'
            },
            {
                title: 'Vendor Onboarding'
            },
            {
                title: 'E-Discovery'
            },
            {
                title: 'Compliance Auditing and Reporting'
            },
            {
                title: 'Fee Overruns'
            },
            {
                title: `Hours Utilisation`
            },
            {
                title: 'Conflict Checking'
            }
        ];
        this.bfs = [
            {
                title: 'Breach Notification'
            },
            {
                title: 'Account opening and closure'
            },
            {
                title: 'Fraud Prevention'
            },
            {
                title: 'Investment Management'
            },
            {
                title: 'Statement Distribution'
            },
            {
                title: 'Foreign Exchange'
            },
            {
                title: 'Treasury Risk Management'
            },
            {
                title: 'Cash Management and Forecasting'
            },
            {
                title: 'Payment Reminders Follow Up'
            },
            {
                title: 'Know Your Customer (KYC)'
            },
            {
                title: 'Audit Reports'
            },
            {
                title: 'Same Day Funds Transfer'
            },
            {
                title: 'Trade Finance Automation'
            },
            {
                title: 'Compliance Management'
            },
            {
                title: 'Accounts Payable and Receivable'
            },
            {
                title: 'Loan Applications'
            },
            {
                title: 'Vendor Onboarding'
            },
            {
                title: 'Receipt Processing'
            },
            {
                title: `Customer Onboarding`
            },
            {
                title: 'Confirmations and Pre/post Matching'
            }
        ];
        this.hp = [
            {
                title: 'Overpayment Reconciliation'
            },
            {
                title: 'Pre-Authorisation of Services'
            },
            {
                title: 'Member Management'
            },
            {
                title: 'Patient Record Storage'
            },
            {
                title: 'Drug Registration'
            },
            {
                title: 'Patient Surveys'
            },
            {
                title: 'Patient Onboarding'
            },
            {
                title: 'Physician Referral Management'
            },
            {
                title: 'Automated Diagnosis'
            },
            {
                title: 'Prescription Management'
            },
            {
                title: 'E2B Transmission'
            },
            {
                title: 'Clinical Documentation'
            },
            {
                title: 'EOB Reader'
            },
            {
                title: 'Claims Adjudication'
            },
            {
                title: 'Fraud compliance and monitoring'
            },
            {
                title: 'Appeals Processing'
            },
            {
                title: 'Provider License Verification'
            },
            {
                title: 'Revenue Cycle Management'
            },
            {
                title: `Insurance Processing`
            },
            {
                title: 'Billing and Claims Management'
            }
        ];
        this.tl = [
            {
                title: 'Demand Prediction'
            },
            {
                title: 'Maintenance Logs'
            },
            {
                title: 'Schedule Planning Optimisation'
            },
            {
                title: 'Pricing Administration'
            },
            {
                title: 'Loads Rate Look ups,  Planning, and Optimisation'
            },
            {
                title: 'System Integration with External and Legacy'
            },
            {
                title: 'Shipment Scheduling'
            },
            {
                title: 'Credit Collections'
            },
            {
                title: 'Customer Portal and ERP Integration'
            },
            {
                title: 'Purchase Orders'
            },
            {
                title: 'Order/Inventory Tracking'
            },
            {
                title: 'Forecasting and Logistics Planning'
            },
            {
                title: 'Invoice Management'
            },
            {
                title: 'Supplier Inventory Management'
            },
            {
                title: 'Fare Monitoring'
            },
            {
                title: 'Proof of Delivery'
            },
            {
                title: 'Cargo Management'
            },
            {
                title: 'Custom Declarations'
            },
            {
                title: `Price Forecasting`
            },
            {
                title: 'Driver Logs'
            }
        ];
        this.mfg = [
            {
                title: 'Automated Customer Tracking and Response'
            },
            {
                title: 'Asset Management'
            },
            {
                title: 'Data Monitoring'
            },
            {
                title: 'Inventory Management'
            },
            {
                title: 'Competitive Pricing, Monitoring and Analytics'
            },
            {
                title: 'Bill of Materials'
            },
            {
                title: 'Logistics Management'
            },
            {
                title: 'System Integration'
            },
            {
                title: 'Order Management'
            },
            {
                title: 'Proactive Maintenance'
            },
            {
                title: 'Collections'
            },
            {
                title: 'Multi-vendor Workflows'
            },
            {
                title: 'Research and Development'
            },
            {
                title: 'Proactive Sourcing'
            },
            {
                title: 'Forecasting'
            },
            {
                title: 'Materials and Resource Distributions'
            },
            {
                title: 'Testing and Quality Control'
            },
            {
                title: 'Parts Requests from Customers'
            },
            {
                title: `Production Line Optimisation`
            },
            {
                title: 'Remittance Processing'
            }
        ];
        this.insurance = [
            {
                title: 'Redemptions Processing'
            },
            {
                title: 'Bulk Payments/Bulk Recoveries'
            },
            {
                title: 'Market and Competitive Analysis'
            },
            {
                title: 'Underwriting'
            },
            {
                title: 'Payment Processing'
            },
            {
                title: 'Statement Distribution'
            },
            {
                title: 'Customer Communications including Letters, Alerts and Notifications'
            },
            {
                title: 'Data Aggregation/Migration Across Systems'
            },
            {
                title: 'Mortgage verification and processing'
            },
            {
                title: 'Fraud Detection'
            },
            {
                title: 'Policy Administration'
            },
            {
                title: 'Quotation Validation'
            },
            {
                title: 'New Account Set-up'
            },
            {
                title: 'Claims Data Extraction'
            },
            {
                title: 'Regulatory Compliance'
            },
            {
                title: 'Match to Issued Policy'
            },
            {
                title: 'Adjudication'
            },
            {
                title: 'Claims Management'
            },
            {
                title: `Risk Evaluation`
            },
            {
                title: 'Title Verification'
            }
        ];
        this.government = [
            {
                title: 'Building Inspection Verification and Management'
            },
            {
                title: 'Immigration Applications and Processing'
            },
            {
                title: 'Dynamic Reporting and Dashboards'
            },
            {
                title: 'Passport Verification and Management'
            },
            {
                title: 'Subcontractor Management'
            },
            {
                title: 'Disaster Alerts'
            },
            {
                title: 'Verification Process'
            },
            {
                title: 'Relief Management'
            },
            {
                title: 'Legacy System Enablement'
            },
            {
                title: 'Tax Compliance'
            },
            {
                title: 'Write Offs, Debt Recovery, Debt Management'
            },
            {
                title: 'Contract Governance and Regulatory Review'
            },
            {
                title: 'Application for Services'
            },
            {
                title: 'Vendor Onboarding'
            },
            {
                title: 'Online Services'
            },
            {
                title: ' Call Center Optimisation'
            },
            {
                title: 'Name and Address Changes'
            },
            {
                title: 'Records Management'
            },
            {
                title: `Fraud Protection`
            },
            {
                title: 'Traffic Ticket Management'
            }
        ];
        this.outsourcing = [
            {
                title: 'Email Services'
            },
            {
                title: 'Warranty Administration'
            },
            {
                title: 'Webpage and Catalogue Maintenance'
            },
            {
                title: 'Customer Database Management'
            },
            {
                title: 'Record Synchronisation'
            },
            {
                title: 'Direct and Indirect Procurement'
            },
            {
                title: 'Data Conversion and Document Digitisation'
            },
            {
                title: 'Logistics and Dispatch'
            },
            {
                title: 'Claims Processing'
            },
            {
                title: 'Voice of Customer Feedback'
            },
            {
                title: 'Transaction, Order, Invoice Processing'
            },
            {
                title: 'Incident Management'
            },
            {
                title: 'Contract Validation'
            },
            {
                title: 'Application Processing'
            },
            {
                title: 'Document Indexing and Archiving'
            },
            {
                title: 'Data Entry, Data Capture, Data Mining, Data Processing, Data Rectification'
            },
            {
                title: 'Quality Assurance'
            },
            {
                title: 'Shared Services Operations'
            },
            {
                title: `Survey Management`
            },
            {
                title: 'Customer Transition'
            }
        ];
        this.retail = [
            {
                title: 'Global Sourcing'
            },
            {
                title: 'Customer Communications including Alerts and Notifications'
            },
            {
                title: 'Catalogue Creation and Amendment'
            },
            {
                title: 'Production Planning'
            },
            {
                title: 'Vendor Master Data Management'
            },
            {
                title: 'Non-compliance Validation'
            },
            {
                title: 'Product/SKU Categorization'
            },
            {
                title: 'Customer dispute resolution'
            },
            {
                title: 'Distributed marketplace'
            },
            {
                title: 'Billing, Order and Invoice Processing'
            },
            {
                title: 'Inventory and Product Control'
            },
            {
                title: 'Credit Reports'
            },
            {
                title: 'Food Safety Audits'
            },
            {
                title: 'Month-End Reporting'
            },
            {
                title: 'Loyalty Programmess'
            },
            {
                title: 'Returns Authorisation'
            },
            {
                title: 'Procurement Optimisation'
            },
            {
                title: 'Customer Management'
            },
            {
                title: `Brand Monitoring and Fraud Prevention`
            },
            {
                title: 'Pricing Administration'
            }
        ];
        this.eu = [
            {
                title: 'Submitting data to regulators'
            },
            {
                title: 'Yield Optimisation'
            },
            {
                title: 'Storage Automation'
            },
            {
                title: 'Complaints Management'
            },
            {
                title: 'Energy Storage'
            },
            {
                title: 'Metering'
            },
            {
                title: 'Load Forecasting'
            },
            {
                title: 'Energy Theft Prevention'
            },
            {
                title: 'Demand Management'
            },
            {
                title: 'Optimised Energy Consumption'
            },
            {
                title: 'Predictive Maintenance'
            },
            {
                title: 'Transactive Energy Solutions'
            },
            {
                title: 'Energy Trading'
            },
            {
                title: 'Invoice Processing, Billing and Settlement'
            },
            {
                title: 'Consumption Insights and Analysis'
            },
            {
                title: 'Systems/Transport Operations'
            },
            {
                title: 'Customer Transfers'
            },
            {
                title: 'Decision Support System for Asset Maintenance'
            },
            {
                title: `Competitive Pricing, Demand Monitoring Analytics`
            },
            {
                title: 'Correcting Misreads'
            }
        ];
        this.telecom = [
            {
                title: 'Porting and verifying customer information'
            },
            {
                title: 'Competitive Pricing, Monitoring and Analytics'
            },
            {
                title: 'Customer account maintenance'
            },
            {
                title: 'Debt Collection'
            },
            {
                title: 'Fraud detection'
            },
            {
                title: 'Data Analysis'
            },
            {
                title: 'Network operations'
            },
            {
                title: 'Customer Service Support'
            },
            {
                title: 'Predictive Maintenance'
            },
            {
                title: 'Internet Application Management'
            },
            {
                title: 'Billing data management'
            },
            {
                title: 'Order configuration and processing'
            },
            {
                title: 'Service provisioning'
            },
            {
                title: 'Credit checks for post paid accounts'
            },
            {
                title: 'Send SMS'
            },
            {
                title: 'SIM Swapping'
            },
            {
                title: 'Proof of Delivery'
            },
            {
                title: 'Customer dispute resolution'
            },
            {
                title: `Backing up Customer Information`
            },
            {
                title: 'Customer Onboarding and Offboarding'
            }
        ];
        this.education = [
            {
                title: 'IT Resets and Restart Services'
            },
            {
                title: 'Engagement Communications such as Notifications and Reminders'
            },
            {
                title: 'Grants Management'
            },
            {
                title: 'Equipment Reservations'
            },
            {
                title: 'Transcript Requests'
            },
            {
                title: 'Document Workflow Optimization'
            },
            {
                title: 'Scholarship Applications'
            },
            {
                title: 'Student and Staff Onboarding and Exit'
            },
            {
                title: 'Approvals: Vendor, Budget, Invoice, Curriculum, Content'
            },
            {
                title: 'Attendance Tracking'
            },
            {
                title: 'Travel Authorisation'
            },
            {
                title: 'Automated Grading and Feedback'
            },
            {
                title: 'Compliance Audits'
            },
            {
                title: 'Inventory Management'
            },
            {
                title: 'Payment Tracking'
            },
            {
                title: 'Calendar Management'
            },
            {
                title: 'Social Media Monitoring'
            },
            {
                title: 'Enrollment, Class Scheduling and Course Registration'
            },
            {
                title: `User and Machine Provisioning`
            },
            {
                title: 'Document/Library Indexing and Processing'
            }
        ];
        this.th = [
            {
                title: 'Cancellations/ Exchanges'
            },
            {
                title: 'Order Processing and Payment Tracking'
            },
            {
                title: 'Check-in and Check Out Process'
            },
            {
                title: 'Compliance Management'
            },
            {
                title: 'Feedback Systems'
            },
            {
                title: 'Voice of Customer'
            },
            {
                title: 'Route Transportation and Confirmation'
            },
            {
                title: 'Ticketing'
            },
            {
                title: 'Rate, Inventory and Discount Monitoring and Management'
            },
            {
                title: 'Schedule Changes'
            },
            {
                title: 'Fare Filing'
            },
            {
                title: 'IROPS Management'
            },
            {
                title: 'Dynamic Resource Management'
            },
            {
                title: 'Refund Processing'
            },
            {
                title: 'Loyalty Processing'
            },
            {
                title: 'Room Reservations, Online Booking Management'
            },
            {
                title: 'Concierge Recommendations'
            },
            {
                title: 'Guest Communications including Notifications, Alerts and Warning'
            },
            {
                title: `Invoice and Payment Processing`
            },
            {
                title: 'Competitive Pricing, Monitoring and Analytics'
            }
        ];
        this.re = [
            {
                title: 'Rent and Mortgage Applications'
            },
            {
                title: 'Lease Management'
            },
            {
                title: 'Facilities Management'
            },
            {
                title: 'Utilities Management'
            },
            {
                title: 'Inventory Management'
            },
            {
                title: 'Planning Applications'
            },
            {
                title: 'Customer Feedback and Surveys'
            },
            {
                title: 'Tenant Onboarding and Offboarding'
            },
            {
                title: 'Accounts Payable and Receivable'
            },
            {
                title: 'Payment and Invoice Processing'
            },
            {
                title: 'Customer Management'
            },
            {
                title: 'Real Estate Listing Automation'
            },
            {
                title: 'Customer Communications including Letters, Alerts and Notifications'
            },
            {
                title: 'Contract Administration'
            },
            {
                title: 'Competitive Pricing, Monitoring and Analytics'
            },
            {
                title: 'Portfolio Management'
            },
            {
                title: 'Data Cleansing'
            },
            {
                title: 'Credit and Background Checks'
            },
            {
                title: `Compliance Management`
            },
            {
                title: 'Rent Accounting'
            }
        ];
        this.fb = [
            {
                title: 'Dashboard and Analytics'
            },
            {
                title: 'Procurement Transactions'
            },
            {
                title: 'Controls System'
            },
            {
                title: 'Equipment Maintenance'
            },
            {
                title: 'Real-time Competitive Pricing, Monitoring Analytics'
            },
            {
                title: 'Advanced Controls, Data Acquisition'
            },
            {
                title: 'Customer Experience/ Satisfaction Monitoring'
            },
            {
                title: 'Regulatory Compliance'
            },
            {
                title: 'Distribution'
            },
            {
                title: 'System Integration with Legacy and ERP'
            },
            {
                title: 'Invoice Management'
            },
            {
                title: 'Vendor Procurement'
            },
            {
                title: 'Shipment Tracking'
            },
            {
                title: 'Inventory and Supply'
            },
            {
                title: 'Contracts Administration'
            },
            {
                title: 'Data Validation'
            },
            {
                title: 'Bill of Materials'
            },
            {
                title: 'Order Management'
            },
            {
                title: `Safety Inspections`
            },
            {
                title: 'Standard Operating Procedures (SOP)'
            }
        ];
        this.bizPro = [
            {
                title: 'Data Management',
                color: 'red',
                list: [
                    { name: 'Cleanse Dataset' },
                    { name: 'Data Mapping & Conversion' },
                    { name: 'Data Migration & Consolidation' },
                    { name: 'Spend Analysis' }
                ],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                icon: '#icon_mgmt'
            },
            {
                title: 'Software Engineering',
                color: 'blue',
                list: [
                    { name: 'Product Engineering' },
                    { name: 'Application Development' },
                    { name: 'UX/UI Development' },
                    { name: 'Software Testing & QA' }
                ],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                icon: '#icon_softEngg'
            },
            {
                title: 'IT Staffing & Training',
                color: 'green',
                list: [
                    { name: 'Staffing Services' },
                    { name: 'Industries' },
                    { name: 'Courses' },
                    { name: 'Program Calendar' }
                ],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                icon: '#icon_training'
            },
        ];
    }
    onClick(check) {
        //    console.log(check);
        if (check == 1) {
            this.tab = 'tab1';
        }
        else {
            this.tab = 'tab2';
        }
    }
    ngOnInit() {
    }
};
AiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ai',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ai/ai.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ai.component.scss */ "./src/app/ai/ai.component.scss")).default]
    })
], AiComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ourproduct/ourproduct.component */ "./src/app/ourproduct/ourproduct.component.ts");
/* harmony import */ var _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./managedservice/managedservice.component */ "./src/app/managedservice/managedservice.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./career/career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projectengineering/projectengineering.component */ "./src/app/projectengineering/projectengineering.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/testimonials/testimonials.component.ts");
/* harmony import */ var _technology_technology_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./technology/technology.component */ "./src/app/technology/technology.component.ts");
/* harmony import */ var _industries_industries_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./industries/industries.component */ "./src/app/industries/industries.component.ts");
/* harmony import */ var _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./advancesolution/advancesolution.component */ "./src/app/advancesolution/advancesolution.component.ts");
/* harmony import */ var _staffing_staffing_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./staffing/staffing.component */ "./src/app/staffing/staffing.component.ts");
/* harmony import */ var _datamgmt_datamgmt_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./datamgmt/datamgmt.component */ "./src/app/datamgmt/datamgmt.component.ts");
/* harmony import */ var _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sitemap/sitemap.component */ "./src/app/sitemap/sitemap.component.ts");
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ai/ai.component */ "./src/app/ai/ai.component.ts");
/* harmony import */ var _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./productDetail/productDetail.component */ "./src/app/productDetail/productDetail.component.ts");

























const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'Advancesolution', component: _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_19__["AdvancesolutionComponent"] },
    { path: 'Technology', component: _technology_technology_component__WEBPACK_IMPORTED_MODULE_17__["TechnologyComponent"] },
    { path: 'Industries', component: _industries_industries_component__WEBPACK_IMPORTED_MODULE_18__["IndustriesComponent"] },
    { path: 'OurProduct', component: _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_4__["OurproductComponent"] },
    { path: 'productDetail', component: _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_24__["ProductDetailComponent"] },
    { path: 'ManagedServices', component: _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_5__["ManagedserviceComponent"] },
    { path: 'Company', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'Career', component: _career_career_component__WEBPACK_IMPORTED_MODULE_7__["CareerComponent"] },
    { path: 'Contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__["ContactusComponent"] },
    { path: 'NewsAndEventUpdate', component: _news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"] },
    { path: 'WhoWeAre', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'AboutArkedge', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'CentersOfExcellence', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'VisionAndMission', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'ValueOfExcellence', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'OurLeadership', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'TestimonialClientSpeaks', component: _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__["TestimonialsComponent"] },
    { path: 'OurHappyClients', component: _client_client_component__WEBPACK_IMPORTED_MODULE_14__["ClientComponent"] },
    { path: 'NewsAndEventUpdate', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'ValueOfExcellence', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
    { path: 'OurHappyClients', component: _client_client_component__WEBPACK_IMPORTED_MODULE_14__["ClientComponent"] },
    { path: 'SoftwareEngineering', component: _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_15__["ProjectengineeringComponent"] },
    { path: 'ItStafingAndServices', component: _staffing_staffing_component__WEBPACK_IMPORTED_MODULE_20__["StaffingComponent"] },
    { path: 'DataServices', component: _datamgmt_datamgmt_component__WEBPACK_IMPORTED_MODULE_21__["DatamgmtComponent"] },
    { path: 'Sitemap', component: _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_22__["SitemapComponent"] },
    { path: 'ai', component: _ai_ai_component__WEBPACK_IMPORTED_MODULE_23__["AiComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _advancesolution_advancesolution_component__WEBPACK_IMPORTED_MODULE_19__["AdvancesolutionComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            _ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_4__["OurproductComponent"],
            _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_24__["ProductDetailComponent"],
            _managedservice_managedservice_component__WEBPACK_IMPORTED_MODULE_5__["ManagedserviceComponent"],
            _company_company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"],
            _career_career_component__WEBPACK_IMPORTED_MODULE_7__["CareerComponent"],
            _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__["ContactusComponent"],
            _news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
            _client_client_component__WEBPACK_IMPORTED_MODULE_14__["ClientComponent"],
            _technology_technology_component__WEBPACK_IMPORTED_MODULE_17__["TechnologyComponent"],
            _industries_industries_component__WEBPACK_IMPORTED_MODULE_18__["IndustriesComponent"],
            _projectengineering_projectengineering_component__WEBPACK_IMPORTED_MODULE_15__["ProjectengineeringComponent"],
            _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__["TestimonialsComponent"],
            _staffing_staffing_component__WEBPACK_IMPORTED_MODULE_20__["StaffingComponent"],
            _datamgmt_datamgmt_component__WEBPACK_IMPORTED_MODULE_21__["DatamgmtComponent"],
            _sitemap_sitemap_component__WEBPACK_IMPORTED_MODULE_22__["SitemapComponent"],
            _ai_ai_component__WEBPACK_IMPORTED_MODULE_23__["AiComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled', }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_11__["SlickCarouselModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  color: #555555;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  line-height: 26px;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.remove-scroll {\n  overflow: hidden;\n}\n\n.scroll-top {\n  position: fixed;\n  bottom: 5px;\n  right: 5px;\n  outline: none;\n}\n\n.scroll-top svg {\n  fill: #eab119;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  color: #191919;\n}\n\nh1 {\n  font-size: 40px;\n  margin-bottom: 40px;\n  text-transform: uppercase;\n}\n\nh2 {\n  font-size: 34px;\n  text-transform: uppercase;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 26px;\n}\n\nh5 {\n  font-size: 22px;\n}\n\nh6 {\n  font-size: 18px;\n  line-height: 28px;\n  font-weight: bold;\n}\n\nh1 {\n  font-weight: bold;\n}\n\n.running-text {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 30px;\n  color: #5c5c5c;\n}\n\na {\n  cursor: pointer;\n}\n\nimg {\n  width: 100%;\n}\n\n.center {\n  text-align: center;\n}\n\n.heading-highlight {\n  color: #276CAA;\n}\n\n.v-flex {\n  display: flex;\n}\n\nsection {\n  padding: 70px 0;\n}\n\n.security-solution .slick-list {\n  padding-bottom: 6px;\n}\n\n.security-solution .slick-list .panel h5 {\n  position: relative;\n  white-space: pre;\n  padding-bottom: 10px;\n}\n\n.security-solution .slick-list .panel h5:after {\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  width: 60px;\n  border-top: 3px dashed #F0371D;\n  content: \"\";\n}\n\n.btn {\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 30px;\n  padding: 15px 50px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: none;\n}\n\n.btn + .btn {\n  margin-left: 15px;\n}\n\n.btn.btn-primary {\n  background: #276caa;\n}\n\n.btn:hover, .btn:focus {\n  background: #094276;\n}\n\n.btn.btn-warning:hover, .btn.btn-warning:focus {\n  background: #f7cd51;\n}\n\nsvg {\n  vertical-align: middle;\n  margin: auto;\n  align-content: center;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n.icon-large > svg {\n  width: 100px;\n  height: 100px;\n}\n\n.icon-medium > svg {\n  width: 50px;\n  height: 50px;\n}\n\n.icon-small > svg {\n  width: 34px;\n  height: 34px;\n}\n\n.icon-ex-small > svg {\n  width: 24px;\n  height: 24px;\n}\n\n.slick-slider {\n  width: calc(100% - 100px);\n  margin: auto;\n}\n\n.slick-slider .slick-prev:before, .slick-slider .slick-next:before {\n  content: \" \";\n}\n\n.slick-slider .slick-arrow.slick-prev {\n  left: -45px;\n}\n\n.slick-slider .slick-arrow svg {\n  width: 40px;\n  height: 40px;\n  fill: #276caa;\n}\n\n.section-product .slick-list {\n  padding: 40px 5px 60px !important;\n}\n\n.inner-banner {\n  position: relative;\n  height: 300px;\n  overflow: hidden;\n}\n\n.inner-banner img {\n  width: 100%;\n}\n\n.inner-banner .page-title {\n  position: absolute;\n  bottom: 0px;\n  background: rgba(255, 255, 255, 0.6);\n  width: 100%;\n  height: 100%;\n  padding: 10px 0;\n  color: #214f7a;\n}\n\n.inner-banner .page-title .row {\n  margin-top: 170px;\n}\n\n.inner-banner .page-title h1 {\n  margin: 0;\n}\n\n.inner-banner .page-title h6 {\n  line-height: 25px;\n  font-weight: bold;\n  color: #214f7a;\n  text-transform: uppercase;\n}\n\ninput.form-control {\n  border-radius: 150px;\n  height: auto;\n  padding: 0.65rem 1rem;\n}\n\ntextarea.form-control {\n  border-radius: 15px;\n  resize: none;\n}\n\n.accordion .card {\n  border-radius: 0px;\n  border: none;\n}\n\n.accordion .card .card-header {\n  border: none;\n  background: none;\n  padding: 0 0 15px;\n}\n\n.accordion .card .card-header .btn {\n  border-radius: 0;\n  padding: 10px 15px;\n  background: #214f7a;\n  width: 100%;\n  text-align: left;\n  color: #fff;\n  text-decoration: none;\n}\n\n.accordion .card .card-header .btn.collapsed {\n  background: #e5e5e5;\n  color: #333333;\n}\n\n.section-project-engineering .card-body {\n  padding: 0px;\n}\n\n.main-banner .carousel-indicators {\n  bottom: 70px;\n}\n\n.div-center {\n  margin: 0 auto;\n}\n\nsection h2 {\n  margin-bottom: 30px;\n}\n\n.modal {\n  top: 50%;\n  transform: translateY(-250px);\n}\n\n.inner-nav-tab {\n  padding: 0;\n  border-top: 1px solid #fff;\n}\n\n.inner-nav-tab .tab-content {\n  margin-top: 70px;\n}\n\n.inner-nav-tab .tab-navigation {\n  background-color: white;\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\n}\n\n.inner-nav-tab .nav-tabs {\n  border: none;\n}\n\n.inner-nav-tab .nav-tabs .nav-item {\n  margin-bottom: 0;\n}\n\n.inner-nav-tab .nav-tabs .nav-item .nav-link {\n  padding: 0.7rem 1rem;\n  border: none;\n  display: block;\n  border-radius: 0;\n  color: #333333;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.inner-nav-tab .nav-tabs .nav-item .nav-link.active {\n  border-bottom: 2px solid #214f7a;\n  color: #214f7a;\n}\n\n.inner-nav-tab .nav-tabs .nav-item .nav-link:hover {\n  color: #214f7a;\n}\n\n.inner-nav-tab .nav-tabs .nav-item .nav-link {\n  text-transform: uppercase;\n}\n\n.section-ai.inner-nav-tab .nav-tabs {\n  white-space: nowrap;\n  overflow: auto;\n  flex-wrap: nowrap;\n  padding-bottom: 10px;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n\n.section-ai.inner-nav-tab .nav-tabs::-webkit-scrollbar {\n  height: 5px;\n}\n\n.section-ai.inner-nav-tab .nav-tabs::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.section-ai.inner-nav-tab .nav-tabs::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n.section-ai.inner-nav-tab .nav-tabs::-webkit-scrollbar-thumb:hover {\n  background: #cccdcf;\n}\n\n.section-ai.inner-nav-tab .nav-tabs .nav-item {\n  display: inline-block;\n}\n\n.section-ai .tab-pane section {\n  padding-top: 0px;\n}\n\n.career-info .panel, .qa-info .panel {\n  padding: 30px;\n  background: #e5f0fa;\n  height: 100%;\n}\n\n.career-info .panel .panel-body, .qa-info .panel .panel-body {\n  margin-top: 50px;\n}\n\n.career-info .panel h6, .qa-info .panel h6 {\n  font-weight: bold;\n  margin: 0;\n  line-height: 18px;\n}\n\n.career-info .panel p, .qa-info .panel p {\n  margin: 0;\n}\n\n.career-info .panel:hover, .qa-info .panel:hover {\n  background: #214f7a;\n}\n\n.career-info .panel:hover h6, .career-info .panel:hover p, .qa-info .panel:hover h6, .qa-info .panel:hover p {\n  color: #fff;\n}\n\n.staffing-popup .modal-body.fix-height {\n  height: 350px;\n  overflow: auto;\n}\n\n.staffing-popup .modal-dialog {\n  max-width: none;\n  width: 75%;\n}\n\n.staffing-popup .modal-dialog p {\n  white-space: pre-wrap;\n}\n\n.modal .modal-header {\n  padding: 15px 25px;\n}\n\n.modal .modal-header h4 {\n  font-size: 18px;\n}\n\n.modal .modal-body {\n  padding: 15px 25px;\n}\n\n.modal button.close span {\n  color: #ff4c33;\n  font-size: 35px;\n  font-weight: normal;\n  font-family: auto;\n  line-height: 24px;\n}\n\n.modal button.close:focus {\n  outline: none;\n}\n\n.modal ul.info-bar {\n  margin-left: 5px;\n  align-self: center;\n}\n\n.modal ul.info-bar li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n\n.modal ul.info-bar li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.modal ul.info-bar li p {\n  font-weight: normal;\n}\n\n.modal ul.info-bar.obtain-visibility {\n  margin-left: 50px;\n}\n\n@media (max-width: 576px) {\n  .inner-nav-tab .tab-navigation {\n    background: none;\n  }\n  .inner-nav-tab .nav-tabs .nav-item {\n    width: 100%;\n    margin-top: 10px;\n    background: #e5e5e5;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container, .container-lg, .container-md, .container-sm, .container-xl {\n    max-width: 1399px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRUQ7O0FEQUE7RUFDQyxnQkFBQTtBQ0dEOztBRERBO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0lEOztBREhDO0VBQ0MsYUFBQTtBQ0tGOztBREZBO0VBQ0MsY0FBQTtBQ0tEOztBREhBO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNNRDs7QURKQTtFQUNDLGVBQUE7RUFDQSx5QkFBQTtBQ09EOztBRExBO0VBQ0MsZUFBQTtBQ1FEOztBRE5BO0VBQ0MsZUFBQTtBQ1NEOztBRFBBO0VBQ0MsZUFBQTtBQ1VEOztBRFJBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNXRDs7QURSQTtFQUNDLGlCQUFBO0FDV0Q7O0FEVEE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNZRDs7QURUQTtFQUNDLGVBQUE7QUNZRDs7QURUQTtFQUNDLFdBQUE7QUNZRDs7QURWQTtFQUNDLGtCQUFBO0FDYUQ7O0FEWEE7RUFDSSxjQUFBO0FDY0o7O0FEWkE7RUFDQyxhQUFBO0FDZUQ7O0FEYkE7RUFDQyxlQUFBO0FDZ0JEOztBRGJDO0VBQ08sbUJBQUE7QUNnQlI7O0FEZEc7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNnQko7O0FEZkk7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ2lCTDs7QURWQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2FEOztBRFpDO0VBQ0UsaUJBQUE7QUNjSDs7QURaQztFQUNDLG1CQUFBO0FDY0Y7O0FEWkM7RUFDQyxtQkFBQTtBQ2NGOztBRFhFO0VBQ0MsbUJBQUE7QUNhSDs7QURUQTtFQUNDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDWUQ7O0FEVkE7RUFDQyxnQkFBQTtBQ2FEOztBRFhBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7QUNjRDs7QURaQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDZUQ7O0FEYkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2dCRDs7QURkQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDaUJEOztBRGZBO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0FDa0JEOztBRGpCQztFQUNDLFlBQUE7QUNtQkY7O0FEaEJFO0VBQ0MsV0FBQTtBQ2tCSDs7QURoQkU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNrQkg7O0FEYkM7RUFDQyxpQ0FBQTtBQ2dCRjs7QURiRTtFQUNELGtCQUFBO0VBQ0EsYUFBQTtFQUNHLGdCQUFBO0FDZ0JKOztBRGZJO0VBQ0ksV0FBQTtBQ2lCUjs7QURmSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ04sV0FBQTtFQUNBLFlBQUE7RUFDTSxlQUFBO0VBQ04sY0FBQTtBQ2lCRjs7QURoQkU7RUFDQyxpQkFBQTtBQ2tCSDs7QURoQkU7RUFDQyxTQUFBO0FDa0JIOztBRGhCRTtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNrQkg7O0FEZEE7RUFDQyxvQkFBQTtFQUNBLFlBQUE7RUFDRyxxQkFBQTtBQ2lCSjs7QURmQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtBQ2tCRDs7QURmRTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtBQ2tCSDs7QURqQkk7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ21CTDs7QURsQkk7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNvQkw7O0FEbkJLO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FDcUJOOztBRGJDO0VBQ0MsWUFBQTtBQ2dCRjs7QURaRTtFQUNDLFlBQUE7QUNlSDs7QURYQztFQUNDLGNBQUE7QUNjRjs7QURWRTtFQUNDLG1CQUFBO0FDYUg7O0FEVEM7RUFDQyxRQUFBO0VBQ0EsNkJBQUE7QUNZRjs7QURUQztFQUNDLFVBQUE7RUFDQSwwQkFBQTtBQ1lGOztBRFhFO0VBQ0MsZ0JBQUE7QUNhSDs7QURYRTtFQUNDLHVCQUFBO0VBQ0EsMENBQUE7QUNhSDs7QURWRTtFQUNDLFlBQUE7QUNZSDs7QURYRztFQUNDLGdCQUFBO0FDYUo7O0FEWkk7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDY0o7O0FEYkk7RUFDQyxnQ0FBQTtFQUNBLGNBQUE7QUNlTDs7QURiSTtFQUNDLGNBQUE7QUNlTDs7QURSQztFQUNDLHlCQUFBO0FDV0Y7O0FETkc7RUFDQyxtQkFBQTtFQUNHLGNBQUE7RUFDSCxpQkFBQTtFQUNBLG9CQUFBO0VBS0UsVUFBQTtFQUtBLFdBQUE7RUFLQSxvQkFBQTtBQ0hOOztBRFhJO0VBQ0MsV0FBQTtBQ2FMOztBRFRNO0VBQ0QsbUJBQUE7QUNXTDs7QURQTTtFQUNELGdCQUFBO0FDU0w7O0FETE07RUFDRCxtQkFBQTtBQ09MOztBRExJO0VBQ0MscUJBQUE7QUNPTDs7QURGRztFQUNFLGdCQUFBO0FDSUw7O0FER0U7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFrQkEsWUFBQTtBQ2pCSDs7QURBRztFQUNDLGdCQUFBO0FDRUo7O0FEQUk7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFHO0VBQ0MsU0FBQTtBQ0VKOztBREFHO0VBQ0MsbUJBQUE7QUNFSjs7QURESTtFQUNDLFdBQUE7QUNHTDs7QURPRTtFQUNDLGFBQUE7RUFDQSxjQUFBO0FDSkg7O0FETUU7RUFDQyxlQUFBO0VBQ0EsVUFBQTtBQ0pIOztBREtHO0VBQ0MscUJBQUE7QUNISjs7QURTRTtFQUlDLGtCQUFBO0FDVEg7O0FETUc7RUFDQyxlQUFBO0FDSko7O0FEUUU7RUFDQyxrQkFBQTtBQ05IOztBRFVJO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNSTDs7QURVSTtFQUNDLGFBQUE7QUNSTDs7QURhRztFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURZSTtFQUNDLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1ZMOztBRFdLO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDVE47O0FEV0s7RUFDQyxtQkFBQTtBQ1ROOztBRFlJO0VBQ0MsaUJBQUE7QUNWTDs7QURnQkM7RUFFQztJQUNDLGdCQUFBO0VDZEQ7RURnQkE7SUFDQyxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ2REO0FBQ0Y7O0FEa0JDO0VBQ0M7SUFDQyxpQkFBQTtFQ2hCRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcblx0Y29sb3I6IzU1NTU1NTtcblx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOjE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxudWx7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0bWFyZ2luOjA7XG5cdHBhZGRpbmc6MDtcbn1cbi5yZW1vdmUtc2Nyb2xse1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNjcm9sbC10b3Age1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGJvdHRvbTogNXB4O1xuXHRyaWdodDogNXB4O1xuXHRvdXRsaW5lOiBub25lO1xuXHRzdmd7XG5cdFx0ZmlsbDogI2VhYjExOVxuXHR9XG4gIH1cbmgxLGgyLGgzLGg0LGg1LGg2e1xuXHRjb2xvcjojMTkxOTE5O1xufVxuaDF7XG5cdGZvbnQtc2l6ZTo0MHB4O1xuXHRtYXJnaW4tYm90dG9tOjQwcHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5oMntcblx0Zm9udC1zaXplOjM0cHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5oM3tcblx0Zm9udC1zaXplOjMwcHg7XG59XG5oNHtcblx0Zm9udC1zaXplOjI2cHg7XG59XG5oNXtcblx0Zm9udC1zaXplOjIycHg7XG59XG5oNntcblx0Zm9udC1zaXplOjE4cHg7IFxuXHRsaW5lLWhlaWdodDogMjhweDtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblxufVxuaDF7XG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4ucnVubmluZy10ZXh0e1xuXHRmb250LXNpemU6MThweDtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0bGluZS1oZWlnaHQ6MzBweDtcblx0Y29sb3I6IzVjNWM1Yztcbn1cblxuYXtcblx0Y3Vyc29yOnBvaW50ZXI7XG59XG5cbmltZ3tcblx0d2lkdGg6MTAwJTtcbn1cbi5jZW50ZXJ7XG5cdHRleHQtYWxpZ246IGNlbnRlcjsgXG59XHRcbi5oZWFkaW5nLWhpZ2hsaWdodHtcbiAgICBjb2xvcjojMjc2Q0FBO1xufVxuLnYtZmxleHtcblx0ZGlzcGxheTogZmxleDtcbn1cbnNlY3Rpb257XG5cdHBhZGRpbmc6NzBweCAwO1xufVxuLnNlY3VyaXR5LXNvbHV0aW9ue1xuXHQuc2xpY2stbGlzdHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206NnB4O1xuXHRcdC5wYW5lbHtcblx0XHRcdGg1e1xuXHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHRcdFx0d2hpdGUtc3BhY2U6IHByZTtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206MTBweDtcblx0XHRcdFx0JjphZnRlcntcblx0XHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0XHRcdFx0XHRsZWZ0OjBweDtcblx0XHRcdFx0XHRib3R0b206MHB4O1xuXHRcdFx0XHRcdHdpZHRoOjYwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDozcHggZGFzaGVkICNGMDM3MUQ7XG5cdFx0XHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG4gICAgfVxufVxuXG4uYnRue1xuXHRmb250LXNpemU6MTZweDtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcblx0cGFkZGluZzogMTVweCA1MHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRib3JkZXI6IG5vbmU7XG5cdCYrIC5idG57XG5cdFx0XHRtYXJnaW4tbGVmdDoxNXB4O1xuXHR9XG5cdCYuYnRuLXByaW1hcnl7XG5cdFx0YmFja2dyb3VuZDojMjc2Y2FhO1xuXHR9XG5cdCY6aG92ZXIsICY6Zm9jdXN7XG5cdFx0YmFja2dyb3VuZDojMDk0Mjc2O1xuXHR9XG5cdCYuYnRuLXdhcm5pbmd7XG5cdFx0Jjpob3ZlciwgJjpmb2N1c3tcblx0XHRcdGJhY2tncm91bmQ6I2Y3Y2Q1MTtcblx0XHR9XG5cdH1cbn1cbnN2ZyB7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdG1hcmdpbjogYXV0bztcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xufVxuc3ZnOm5vdCg6cm9vdCkge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuLmljb24tbGFyZ2U+c3ZnIHtcblx0d2lkdGg6IDEwMHB4O1xuXHRoZWlnaHQ6IDEwMHB4O1xufVxuLmljb24tbWVkaXVtPnN2ZyB7XG5cdHdpZHRoOiA1MHB4O1xuXHRoZWlnaHQ6IDUwcHg7XG59XG4uaWNvbi1zbWFsbD5zdmcge1xuXHR3aWR0aDogMzRweDtcblx0aGVpZ2h0OiAzNHB4O1xufVxuLmljb24tZXgtc21hbGw+c3ZnIHtcblx0d2lkdGg6IDI0cHg7XG5cdGhlaWdodDogMjRweDtcbn1cbi5zbGljay1zbGlkZXIge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuXHRtYXJnaW46IGF1dG87XG5cdC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3Jle1xuXHRcdGNvbnRlbnQ6XCIgXCI7XG5cdH1cblx0LnNsaWNrLWFycm93e1xuXHRcdCYuc2xpY2stcHJldntcblx0XHRcdGxlZnQ6LTQ1cHg7XG5cdFx0fVxuXHRcdHN2Z3tcblx0XHRcdHdpZHRoOjQwcHg7XG5cdFx0XHRoZWlnaHQ6NDBweDtcblx0XHRcdGZpbGw6IzI3NmNhYTtcblx0XHR9XG5cdH1cbiAgfVxuICAuc2VjdGlvbi1wcm9kdWN0e1xuXHQuc2xpY2stbGlzdHtcblx0XHRwYWRkaW5nOjQwcHggNXB4IDYwcHggIWltcG9ydGFudDtcblx0fVxuICB9XG4gIC5pbm5lci1iYW5uZXJ7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHRoZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICAucGFnZS10aXRsZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYigyNTUsIDI1NSwgMjU1LCAwLjYpO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuXHRcdGNvbG9yOiMyMTRmN2E7XG5cdFx0LnJvd3tcblx0XHRcdG1hcmdpbi10b3A6IDE3MHB4O1xuXHRcdH1cblx0XHRoMXtcblx0XHRcdG1hcmdpbjowO1xuXHRcdH1cblx0XHRoNntcblx0XHRcdGxpbmUtaGVpZ2h0OiAyNXB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0XHRcdGNvbG9yOiMyMTRmN2E7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdH1cbiAgICB9XG59XG5pbnB1dC5mb3JtLWNvbnRyb2x7XG5cdGJvcmRlci1yYWRpdXM6IDE1MHB4O1xuXHRoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMC42NXJlbSAxcmVtOyBcbn1cbnRleHRhcmVhLmZvcm0tY29udHJvbHtcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0cmVzaXplOiBub25lO1xufVxuLmFjY29yZGlvbntcblx0XHQuY2FyZHtcblx0XHRcdGJvcmRlci1yYWRpdXM6MHB4O1xuXHRcdFx0Ym9yZGVyOm5vbmU7XG5cdFx0XHQgLmNhcmQtaGVhZGVye1xuXHRcdFx0XHQgYm9yZGVyOm5vbmU7XG5cdFx0XHRcdCBiYWNrZ3JvdW5kOm5vbmU7XG5cdFx0XHRcdCBwYWRkaW5nOjAgMCAxNXB4O1xuXHRcdFx0XHQuYnRue1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6MDtcblx0XHRcdFx0XHRwYWRkaW5nOjEwcHggMTVweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiMyMTRmN2E7XG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdGNvbG9yOiNmZmY7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdCYuY29sbGFwc2Vke1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDojZTVlNWU1O1xuXHRcdFx0XHRcdFx0Y29sb3I6IzMzMzMzMztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuc2VjdGlvbi1wcm9qZWN0LWVuZ2luZWVyaW5ne1xuXHQuY2FyZC1ib2R5e1xuXHRcdHBhZGRpbmc6MHB4O1xuXHR9IFxuXHR9XG5cdC5tYWluLWJhbm5lcntcblx0XHQuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcblx0XHRcdGJvdHRvbTogNzBweDtcblx0XHR9XG5cdH1cblxuXHQuZGl2LWNlbnRlcntcblx0XHRtYXJnaW46MCBhdXRvO1xuXHR9XG5cblx0c2VjdGlvbntcblx0XHRoMntcblx0XHRcdG1hcmdpbi1ib3R0b206MzBweDtcblx0XHR9XG5cdH1cblxuXHQubW9kYWx7XG5cdFx0dG9wOjUwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1MHB4KTtcblx0fVxuXG5cdC5pbm5lci1uYXYtdGFie1xuXHRcdHBhZGRpbmc6MDtcblx0XHRib3JkZXItdG9wOjFweCBzb2xpZCAjZmZmO1xuXHRcdC50YWItY29udGVudHtcblx0XHRcdG1hcmdpbi10b3A6NzBweDtcblx0XHR9XG5cdFx0LnRhYi1uYXZpZ2F0aW9ue1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcblx0XHRcdGJveC1zaGFkb3c6IDBweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0XHR9XG5cdFx0XG5cdFx0Lm5hdi10YWJzIHtcblx0XHRcdGJvcmRlcjpub25lO1xuXHRcdFx0Lm5hdi1pdGVte1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdFx0XHQubmF2LWxpbmt7XG5cdFx0XHRcdHBhZGRpbmc6IC43cmVtIDFyZW07IFxuXHRcdFx0XHRib3JkZXI6bm9uZTtcblx0XHRcdFx0ZGlzcGxheTpibG9jaztcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcblx0XHRcdFx0Y29sb3I6IzMzMzMzMztcblx0XHRcdFx0Zm9udC1zaXplOjE2cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XG5cdFx0XHRcdCYuYWN0aXZle1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMyMTRmN2E7XG5cdFx0XHRcdFx0Y29sb3I6IzIxNGY3YTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmOmhvdmVye1xuXHRcdFx0XHRcdGNvbG9yOiMyMTRmN2E7XG5cdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5re1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdH1cblxuXHQuc2VjdGlvbi1haXtcblx0XHQmLmlubmVyLW5hdi10YWIge1xuXHRcdFx0Lm5hdi10YWJze1xuXHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIFx0XHRcdG92ZXJmbG93OiBhdXRvO1xuXHRcdFx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdFx0XHRcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDVweDtcblx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgXG5cdFx0XHRcdCAgLyogVHJhY2sgKi9cblx0XHRcdFx0ICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2YxZjFmMTsgXG5cdFx0XHRcdCAgfVxuXHRcdFx0XHQgICBcblx0XHRcdFx0ICAvKiBIYW5kbGUgKi9cblx0XHRcdFx0ICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzg4ODsgXG5cdFx0XHRcdCAgfVxuXHRcdFx0XHQgIFxuXHRcdFx0XHQgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuXHRcdFx0XHQgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjY2NjZGNmOyBcblx0XHRcdFx0ICB9XG5cdFx0XHRcdC5uYXYtaXRlbXtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LnRhYi1wYW5le1xuXHRcdFx0c2VjdGlvbntcblx0XHRcdCAgcGFkZGluZy10b3A6MHB4O1xuXHRcdFx0fVxuXHRcdCAgfVxuXHR9XG5cblxuXHQuY2FyZWVyLWluZm8sIC5xYS1pbmZve1xuXHRcdC5wYW5lbHtcblx0XHRcdHBhZGRpbmc6MzBweDtcblx0XHRcdGJhY2tncm91bmQ6I2U1ZjBmYTtcblx0XHRcdC5wYW5lbC1ib2R5e1xuXHRcdFx0XHRtYXJnaW4tdG9wOjUwcHg7XG5cdFx0XHQgfVxuXHRcdFx0IGg2e1xuXHRcdFx0XHRmb250LXdlaWdodDpib2xkO1xuXHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdFx0XHR9XG5cdFx0XHRwe1xuXHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdH1cblx0XHRcdCY6aG92ZXJ7XG5cdFx0XHRcdGJhY2tncm91bmQ6IzIxNGY3YTtcblx0XHRcdFx0aDYsIHB7XG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aGVpZ2h0OjEwMCU7XG5cdFx0IH1cblx0XHRcblx0fVxuXG5cblx0LnN0YWZmaW5nLXBvcHVwe1xuXHRcdC5tb2RhbC1ib2R5LmZpeC1oZWlnaHR7XG5cdFx0XHRoZWlnaHQ6IDM1MHB4O1xuXHRcdFx0b3ZlcmZsb3c6IGF1dG87XG5cdFx0fVxuXHRcdC5tb2RhbC1kaWFsb2d7XG5cdFx0XHRtYXgtd2lkdGg6IG5vbmU7XG5cdFx0XHR3aWR0aDo3NSU7XG5cdFx0XHRwe1xuXHRcdFx0XHR3aGl0ZS1zcGFjZTogcHJlLXdyYXBcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQubW9kYWwge1xuXHRcdC5tb2RhbC1oZWFkZXJ7XG5cdFx0XHRoNHtcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0fVxuXHRcdFx0cGFkZGluZzoxNXB4IDI1cHg7XG5cdFx0fVxuXHRcdC5tb2RhbC1ib2R5e1xuXHRcdFx0cGFkZGluZzoxNXB4IDI1cHg7XG5cdFx0fVxuXHRcdGJ1dHRvbntcblx0XHRcdCYuY2xvc2V7XG5cdFx0XHRcdHNwYW57XG5cdFx0XHRcdFx0Y29sb3I6ICNmZjRjMzM7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzNXB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IGF1dG87XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Jjpmb2N1c3tcblx0XHRcdFx0XHRvdXRsaW5lOm5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRcdHVsLmluZm8tYmFye1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xuXHRcdFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdFx0XHRcdGxpe1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAxMHB4IDIwcHg7XG5cdFx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0Jjo6YmVmb3Jle1xuXHRcdFx0XHRcdFx0Y29udGVudDogXCIgXCI7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHRvcDo4cHg7XG5cdFx0XHRcdFx0XHRsZWZ0OjBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OjEwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQmLm9idGFpbi12aXNpYmlsaXR5e1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjUwcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHR9XG5cblx0QG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcblx0XHQuaW5uZXItbmF2LXRhYntcblx0XHQudGFiLW5hdmlnYXRpb257XG5cdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdH1cblx0XHQubmF2LXRhYnMgLm5hdi1pdGVte1xuXHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdG1hcmdpbi10b3A6MTBweDtcblx0XHRcdGJhY2tncm91bmQ6I2U1ZTVlNTtcblx0XHR9XG5cblx0fX1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXtcblx0XHQuY29udGFpbmVyLCAuY29udGFpbmVyLWxnLCAuY29udGFpbmVyLW1kLCAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyLXhse1xuXHRcdFx0bWF4LXdpZHRoOiAxMzk5cHg7XG5cdFx0fVxuXHR9XG4iLCJib2R5IHtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnJlbW92ZS1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2Nyb2xsLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2Nyb2xsLXRvcCBzdmcge1xuICBmaWxsOiAjZWFiMTE5O1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgY29sb3I6ICMxOTE5MTk7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJ1bm5pbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzVjNWM1Yztcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nLWhpZ2hsaWdodCB7XG4gIGNvbG9yOiAjMjc2Q0FBO1xufVxuXG4udi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cblxuLnNlY3VyaXR5LXNvbHV0aW9uIC5zbGljay1saXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cbi5zZWN1cml0eS1zb2x1dGlvbiAuc2xpY2stbGlzdCAucGFuZWwgaDUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnNlY3VyaXR5LXNvbHV0aW9uIC5zbGljay1saXN0IC5wYW5lbCBoNTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci10b3A6IDNweCBkYXNoZWQgI0YwMzcxRDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDE1cHggNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmJ0biArIC5idG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5idG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMjc2Y2FhO1xufVxuLmJ0bjpob3ZlciwgLmJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMwOTQyNzY7XG59XG4uYnRuLmJ0bi13YXJuaW5nOmhvdmVyLCAuYnRuLmJ0bi13YXJuaW5nOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2Y3Y2Q1MTtcbn1cblxuc3ZnIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbnN2Zzpub3QoOnJvb3QpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmljb24tbGFyZ2UgPiBzdmcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5pY29uLW1lZGl1bSA+IHN2ZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5pY29uLXNtYWxsID4gc3ZnIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLmljb24tZXgtc21hbGwgPiBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uc2xpY2stc2xpZGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNsaWNrLXNsaWRlciAuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1zbGlkZXIgLnNsaWNrLW5leHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG59XG4uc2xpY2stc2xpZGVyIC5zbGljay1hcnJvdy5zbGljay1wcmV2IHtcbiAgbGVmdDogLTQ1cHg7XG59XG4uc2xpY2stc2xpZGVyIC5zbGljay1hcnJvdyBzdmcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmaWxsOiAjMjc2Y2FhO1xufVxuXG4uc2VjdGlvbi1wcm9kdWN0IC5zbGljay1saXN0IHtcbiAgcGFkZGluZzogNDBweCA1cHggNjBweCAhaW1wb3J0YW50O1xufVxuXG4uaW5uZXItYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmlubmVyLWJhbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbm5lci1iYW5uZXIgLnBhZ2UtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY29sb3I6ICMyMTRmN2E7XG59XG4uaW5uZXItYmFubmVyIC5wYWdlLXRpdGxlIC5yb3cge1xuICBtYXJnaW4tdG9wOiAxNzBweDtcbn1cbi5pbm5lci1iYW5uZXIgLnBhZ2UtdGl0bGUgaDEge1xuICBtYXJnaW46IDA7XG59XG4uaW5uZXItYmFubmVyIC5wYWdlLXRpdGxlIGg2IHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIxNGY3YTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMC42NXJlbSAxcmVtO1xufVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5hY2NvcmRpb24gLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwIDAgMTVweDtcbn1cbi5hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmFjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgLmJ0bi5jb2xsYXBzZWQge1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLnNlY3Rpb24tcHJvamVjdC1lbmdpbmVlcmluZyAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubWFpbi1iYW5uZXIgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICBib3R0b206IDcwcHg7XG59XG5cbi5kaXYtY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbnNlY3Rpb24gaDIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubW9kYWwge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNTBweCk7XG59XG5cbi5pbm5lci1uYXYtdGFiIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XG59XG4uaW5uZXItbmF2LXRhYiAudGFiLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuLmlubmVyLW5hdi10YWIgLnRhYi1uYXZpZ2F0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmlubmVyLW5hdi10YWIgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW5uZXItbmF2LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIxNGY3YTtcbiAgY29sb3I6ICMyMTRmN2E7XG59XG4uaW5uZXItbmF2LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMjE0ZjdhO1xufVxuXG4uaW5uZXItbmF2LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWN0aW9uLWFpLmlubmVyLW5hdi10YWIgLm5hdi10YWJzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLyogVHJhY2sgKi9cbiAgLyogSGFuZGxlICovXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xufVxuLnNlY3Rpb24tYWkuaW5uZXItbmF2LXRhYiAubmF2LXRhYnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiA1cHg7XG59XG4uc2VjdGlvbi1haS5pbm5lci1uYXYtdGFiIC5uYXYtdGFiczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuLnNlY3Rpb24tYWkuaW5uZXItbmF2LXRhYiAubmF2LXRhYnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbn1cbi5zZWN0aW9uLWFpLmlubmVyLW5hdi10YWIgLm5hdi10YWJzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjY2NkY2Y7XG59XG4uc2VjdGlvbi1haS5pbm5lci1uYXYtdGFiIC5uYXYtdGFicyAubmF2LWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2VjdGlvbi1haSAudGFiLXBhbmUgc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5jYXJlZXItaW5mbyAucGFuZWwsIC5xYS1pbmZvIC5wYW5lbCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXJlZXItaW5mbyAucGFuZWwgLnBhbmVsLWJvZHksIC5xYS1pbmZvIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uY2FyZWVyLWluZm8gLnBhbmVsIGg2LCAucWEtaW5mbyAucGFuZWwgaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5jYXJlZXItaW5mbyAucGFuZWwgcCwgLnFhLWluZm8gLnBhbmVsIHAge1xuICBtYXJnaW46IDA7XG59XG4uY2FyZWVyLWluZm8gLnBhbmVsOmhvdmVyLCAucWEtaW5mbyAucGFuZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xufVxuLmNhcmVlci1pbmZvIC5wYW5lbDpob3ZlciBoNiwgLmNhcmVlci1pbmZvIC5wYW5lbDpob3ZlciBwLCAucWEtaW5mbyAucGFuZWw6aG92ZXIgaDYsIC5xYS1pbmZvIC5wYW5lbDpob3ZlciBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zdGFmZmluZy1wb3B1cCAubW9kYWwtYm9keS5maXgtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uc3RhZmZpbmctcG9wdXAgLm1vZGFsLWRpYWxvZyB7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgd2lkdGg6IDc1JTtcbn1cbi5zdGFmZmluZy1wb3B1cCAubW9kYWwtZGlhbG9nIHAge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5tb2RhbCAubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xufVxuLm1vZGFsIC5tb2RhbC1oZWFkZXIgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG59XG4ubW9kYWwgYnV0dG9uLmNsb3NlIHNwYW4ge1xuICBjb2xvcjogI2ZmNGMzMztcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LWZhbWlseTogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubW9kYWwgYnV0dG9uLmNsb3NlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5tb2RhbCB1bC5pbmZvLWJhciB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5tb2RhbCB1bC5pbmZvLWJhciBsaSB7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1vZGFsIHVsLmluZm8tYmFyIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubW9kYWwgdWwuaW5mby1iYXIgbGkgcCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubW9kYWwgdWwuaW5mby1iYXIub2J0YWluLXZpc2liaWxpdHkge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5pbm5lci1uYXYtdGFiIC50YWItbmF2aWdhdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuICAuaW5uZXItbmF2LXRhYiAubmF2LXRhYnMgLm5hdi1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciwgLmNvbnRhaW5lci1sZywgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lci14bCB7XG4gICAgbWF4LXdpZHRoOiAxMzk5cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'arkedge';
        this.topPosToStartShowing = 100;
        this.router.events.subscribe(routerEvent => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (routerEvent.url === '/') {
                    this.router.navigate(['home'], { skipLocationChange: true });
                }
            }
        });
    }
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    }
    // TODO: Cross browsing
    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
], AppComponent.prototype, "checkScroll", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _space_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./space.pipe.module */ "./src/app/space.pipe.module.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _space_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CreateSpacePipe"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"]
        ],
        providers: [_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/career/career.component.scss":
/*!**********************************************!*\
  !*** ./src/app/career/career.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-wrap {\n  margin: 50px 0 30px;\n}\n\n.section-career .career {\n  margin-bottom: 70px;\n}\n\n.section-career form {\n  margin-top: 70px;\n}\n\n.section-career form h2 {\n  margin-bottom: 50px;\n}\n\n.section-career .custom-file-label {\n  left: 15px;\n  width: calc(100% - 30px);\n  border-radius: 150px;\n  overflow: hidden;\n  color: #495057;\n}\n\n.section-career .table {\n  margin-bottom: 0px;\n}\n\n.section-career .table thead th {\n  border-bottom: 1px;\n  background: #d6d5d5;\n  color: #000;\n}\n\n.section-career td a {\n  color: #0761a9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2NhcmVlci9jYXJlZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmVlci9jYXJlZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVJO0VBQ0ksbUJBQUE7QUNDUjs7QURDSTtFQUlJLGdCQUFBO0FDRlI7O0FERFE7RUFDSSxtQkFBQTtBQ0daOztBRENBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NaOztBRElJO0VBQ0ksY0FBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvY2FyZWVyL2NhcmVlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXdyYXB7XG4gICAgbWFyZ2luOjUwcHggMCAzMHB4O1xufVxuLnNlY3Rpb24tY2FyZWVye1xuICAgIC5jYXJlZXJ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206NzBweDtcbiAgICB9XG4gICAgZm9ybXtcbiAgICAgICAgaDJ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLXRvcDo3MHB4O1xuICAgIH1cbi5jdXN0b20tZmlsZS1sYWJlbHtcbiAgICBsZWZ0OjE1cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6MTUwcHg7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xufVxuLnRhYmxle1xuICAgIG1hcmdpbi1ib3R0b206MHB4O1xuICAgIHRoZWFke1xuICAgICAgICB0aHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2Q2ZDVkNTtcbiAgICAgICAgICAgIGNvbG9yOiMwMDA7XG4gICAgICAgIH1cbiAgICB9XG59XG50ZHtcbiAgICBhe1xuICAgICAgICBjb2xvcjojMDc2MWE5O1xuICAgIH1cbn1cbn0iLCIudGV4dC13cmFwIHtcbiAgbWFyZ2luOiA1MHB4IDAgMzBweDtcbn1cblxuLnNlY3Rpb24tY2FyZWVyIC5jYXJlZXIge1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuLnNlY3Rpb24tY2FyZWVyIGZvcm0ge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuLnNlY3Rpb24tY2FyZWVyIGZvcm0gaDIge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLnNlY3Rpb24tY2FyZWVyIC5jdXN0b20tZmlsZS1sYWJlbCB7XG4gIGxlZnQ6IDE1cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuLnNlY3Rpb24tY2FyZWVyIC50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zZWN0aW9uLWNhcmVlciAudGFibGUgdGhlYWQgdGgge1xuICBib3JkZXItYm90dG9tOiAxcHg7XG4gIGJhY2tncm91bmQ6ICNkNmQ1ZDU7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlY3Rpb24tY2FyZWVyIHRkIGEge1xuICBjb2xvcjogIzA3NjFhOTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/career/career.component.ts":
/*!********************************************!*\
  !*** ./src/app/career/career.component.ts ***!
  \********************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CareerComponent = class CareerComponent {
    constructor() {
        this.careerInfo = [
            { title: 'How We Hire', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ' },
            { title: 'Employee Benefits', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ' },
        ];
        this.career = [
            { jobcode: 'B302', jobtitle: 'Sr. Business Analyst', location: 'Mumbai, India', targetDate: '20-Feb-2023' },
            { jobcode: 'B302', jobtitle: 'Sr. Business Analyst', location: 'Mumbai, India', targetDate: '20-Feb-2023' },
            { jobcode: 'B302', jobtitle: 'Sr. Business Analyst', location: 'Mumbai, India', targetDate: '20-Feb-2023' },
            { jobcode: 'B302', jobtitle: 'Sr. Business Analyst', location: 'Mumbai, India', targetDate: '20-Feb-2023' },
            { jobcode: 'B302', jobtitle: 'Sr. Business Analyst', location: 'Mumbai, India', targetDate: '20-Feb-2023' },
        ];
    }
    ngOnInit() {
    }
};
CareerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-career',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./career.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/career/career.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./career.component.scss */ "./src/app/career/career.component.scss")).default]
    })
], CareerComponent);



/***/ }),

/***/ "./src/app/client/client.component.scss":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".client-speak, .client-info {\n  padding: 70px 0;\n}\n\n.client-info {\n  padding-bottom: 20px;\n}\n\n.client-info .panel {\n  margin-bottom: 50px;\n  border: 1px solid rgba(33, 79, 122, 0.1);\n  padding: 20px;\n}\n\n.client-speak {\n  background: #e5f0fa;\n}\n\n.client-speak h1 {\n  margin-bottom: 25px;\n}\n\n.modal-body h6 {\n  font-weight: bold;\n}\n\n.modal-body a {\n  color: #276caa;\n}\n\n.modal-body a:hover {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREFJO0VBQ0ksbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7QUNFUjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEREk7RUFDSSxtQkFBQTtBQ0dSOztBREVJO0VBQ0ksaUJBQUE7QUNDUjs7QURDSTtFQUNJLGNBQUE7QUNDUjs7QURBUTtFQUNJLFdBQUE7QUNFWiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50LXNwZWFrLCAuY2xpZW50LWluZm8ge1xuICAgIHBhZGRpbmc6NzBweCAwO1xufVxuXG4uY2xpZW50LWluZm97XG4gICAgcGFkZGluZy1ib3R0b206MjBweDtcbiAgICAucGFuZWx7XG4gICAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMywgNzksIDEyMiwgMC4xKTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG59XG4uY2xpZW50LXNwZWFre1xuICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcbiAgICBoMXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbToyNXB4O1xuICAgIH1cbn1cblxuLm1vZGFsLWJvZHl7XG4gICAgaDZ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBhe1xuICAgICAgICBjb2xvcjojMjc2Y2FhO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY2xpZW50LXNwZWFrLCAuY2xpZW50LWluZm8ge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG5cbi5jbGllbnQtaW5mbyB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmNsaWVudC1pbmZvIC5wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzMsIDc5LCAxMjIsIDAuMSk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jbGllbnQtc3BlYWsge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuLmNsaWVudC1zcGVhayBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5tb2RhbC1ib2R5IGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW9kYWwtYm9keSBhIHtcbiAgY29sb3I6ICMyNzZjYWE7XG59XG4ubW9kYWwtYm9keSBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ClientComponent = class ClientComponent {
    constructor(config, modalService) {
        this.modalService = modalService;
        this.clientInfo = [
            { title: 'B2B Purchase', desc: `B2BPurchase.com — the voice of project procurement community – gives project procurement professionals worldwide profound insight into the construction and infrastructure market. It is a platform presenting the thoughts of key industry leaders and executives on the industry’s latest initiatives, innovations, technologies and trends.`, url: 'https://b2bpurchase.com/' },
            { title: 'The Royal College of Arts, Science & Commerce', desc: `The Royal College of Arts, Science & Commerce  – a dream project  of the Founder, Asgar  E. Lakdawala, was established in June 1989 and governed by Royal Higher Education Society.`, url: 'https://royalcollegemiraroad.edu.in/#' },
            { title: 'I- Tech Media Pvt Ltd', desc: `I-Tech Media is a publishing group in India engaged in the publication of magazines catering to different industry verticals. The magazines published by I-Tech Media are market leaders in India with excellent reach in their respective industry segments.`, url: 'https://itmgroupmedia.com/' },
            { title: 'InfoSys', desc: `Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation.`, url: 'https://www.infosys.com/' },
            { title: 'Mint International', desc: `Mint International is a global HR outsourcing & consulting firm delivering a comprehensive assortment of Human Resource Management services to companies across the globe.`, url: 'http://www.mintinternational.com/' },
            { title: 'DreamingCode', desc: `DreamingCode implements commerce across mobile, web & retail in the cloud. We enable companies to gain marketshare and mindshare through powerful eCommerce technology and creative solutions that deliver bankable results backed by Radical Support from our Boston, MA headquarters!`, url: 'https://www.dreamingcode.com/' },
            { title: 'Canon India', desc: `Canon India Pvt. Ltd. is the sales and marketing subsidiary of Canon Inc., a world leader in imaging technologies. Having started its operations in 1997, Canon India markets a comprehensive range of sophisticated contemporary digital imaging products and solutions in India. `, url: 'https://in.canon/' },
            { title: 'Cisco Systems Inc.', desc: `Cisco helps seize the opportunities of tomorrow by proving that amazing things can happen when you connect the unconnected.`, url: 'https://www.cisco.com/' },
            { title: 'Hurix Digital', desc: `At Hurix, we help organizations from across industries to achieve their business goals with our future-ready e-learning content solutions, cloud platforms, content transformation and technology services.`, url: 'https://www.hurix.com/' },
            { title: 'Electronic Arts', desc: `Headquartered in Redwood City in Northern California, we develop and deliver games, content, and online services for Internet-connected consoles, mobile devices, and personal computers.`, url: 'https://www.ea.com/' },
            { title: ' Tata Consultancy Services Limited', desc: `Helping Clients Create the Future,TCS combines tech expertise and business intelligence to catalyze change and deliver results.`, url: 'https://www.tcs.com' },
            { title: 'Edelweiss Asset Management Ltd.', desc: `Investing is about finding someone you trust to solve your problems. We exist to find solutions for you.`, url: 'https://www.edelweissmf.com/' },
            { title: 'Wipro Limited', desc: `Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services.`, url: 'https://www.wipro.com' },
            { title: 'Indicsoft Technologies Private Limited', desc: `A global provider of full-spectrum software services, Indicsoft is known the world over for delivering forward-looking, scalable, robust and cost-efficient solutions to its clients.`, url: 'http://www.indicsoft.com/' },
            { title: 'https://www.indoqubix.com/#/', desc: `Indoqubix was started in 2022 with a vision of being a Digital First company that specializes in providing cost-effective innovative technological solutions`, url: 'https://www.indoqubix.com' },
            { title: 'Intertek India Pvt. Ltd.', desc: `We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide.`, url: 'https://www.intertek.com/' },
            { title: 'Fugro', desc: `Fugro is the world’s leading Geo-data specialist. We unlock insights from Geo-data. Through integrated data acquisition, analysis and advice, Fugro supports clients in mitigating risks during design, construction and operation of their assets, both on land and at sea.`, url: 'https://www.fugro.com/' },
            { title: 'Lionbridge', desc: `We’re bridge-builders. Barrier-breakers. Linguistic experts and cultural translators. We build deep relationships with the biggest brands in the world, so they can build deeper relationships with their customers.`, url: 'https://www.lionbridge.com/' },
            { title: ' Pentaknot Solutions Pvt. Ltd ', desc: `We make softwares, that enrich Human Experience.`, url: 'https://pentaknot.com/' },
            { title: 'Praxis Technologies', desc: `We, at Praxis, provide a range of solutions in the areas of software application development and maintenance, e-learning content development and analytics`, url: 'https://www.praxistechnologies.net' },
            { title: 'https://www.adobe.com/', desc: `Creativity is in our DNA. Our game-changing innovations are redefining the possibilities of digital experiences. We connect content and data and introduce new technologies that democratize creativity, shape the next generation of storytelling, and inspire entirely new categories of business.`, url: 'https://www.adobe.com/' },
            { title: 'Muzna Group', desc: `We are a privately owned multi-discipline organization comprised of a group of departments since its inspection in 2018. The Group is growing from strength to strength to achieve excellence across many industries and sectors that we operate in.`, url: 'https://muznagroup.com/' },
            { title: 'Team Liquid', desc: `Team Liquid is a world renowned professional gaming organization established in 2000. Since our grassroots beginnings as a Battle.`, url: 'https://www.teamliquid.com/' },
            { title: 'Web All Solution', desc: `We are specialized in designing and creating elegant, clean and beautiful websites more than 11+ year of experience`, url: 'https://weballsolution.com' },
            { title: 'Best Containers Corporation', desc: `Best containers corporation (BCC) is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs.`, url: 'https://www.bcc-india.com/' },
            { title: 'Spryance India Pvt. Ltd.', desc: `Spryance India PVT LTD Andheri E in Nanganallur, Mumbai, Chennai is known to satisfactorily cater to the demands of its customer base.`, url: 'http://www.spryance.com/' },
        ];
        this.closeResult = '';
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title_1' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngOnInit() {
    }
};
ClientComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client.component.scss */ "./src/app/client/client.component.scss")).default]
    })
], ClientComponent);



/***/ }),

/***/ "./src/app/company/company.component.scss":
/*!************************************************!*\
  !*** ./src/app/company/company.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompanyComponent = class CompanyComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.component.scss */ "./src/app/company/company.component.scss")).default]
    })
], CompanyComponent);



/***/ }),

/***/ "./src/app/contactus/contactus.component.scss":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-contact {\n  padding-bottom: 0;\n}\n.section-contact form {\n  margin: 70px 0px;\n}\n.section-contact form h1 {\n  margin-bottom: 50px;\n  font-weight: normal;\n}\n.section-contact .contact-emails .panel {\n  border: 1px solid #214f7a;\n  border-bottom: 10px solid #214f7a;\n  padding: 20px;\n  padding-top: 30px;\n  height: 100%;\n  border-radius: 3px;\n}\n.section-contact .contact-emails .panel .panel-body {\n  margin-top: 60px;\n}\n.section-contact .contact-emails .panel .panel-body h5 {\n  font-weight: bold;\n}\n.section-contact .contact-emails .panel .panel-body p {\n  margin: 0;\n}\n.section-contact .contact-emails .panel .panel-body p:first-child {\n  font-weight: bold;\n}\n.section-contact .contact-emails .panel .panel-body div {\n  display: inline-block;\n  margin-right: 20px;\n}\n.section-contact .contact-emails .panel .panel-body div + div {\n  vertical-align: top;\n}\n.section-contact .contact-emails .panel .panel-body div svg {\n  fill: #214f7a;\n}\n.section-contact .contact-emails .panel .panel-body div a {\n  color: #555555;\n}\n.section-contact .contact-address .panel {\n  cursor: pointer;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.section-contact .contact-address .panel img {\n  width: 100%;\n  height: auto;\n}\n.section-contact .contact-address .panel h5 {\n  font-weight: bold;\n}\n.section-contact .contact-address .panel p {\n  margin: 0;\n  font-size: 16px;\n}\n.section-contact .contact-address .panel .panel-body {\n  padding: 20px;\n  background: #e5f0fa;\n  min-height: 220px;\n}\n.section-contact .contact-address .panel:hover .panel-body {\n  background: #ffc201;\n}\n.mapouter {\n  width: 100% !important;\n  height: 600px !important;\n  margin-top: 70px;\n}\n.mapouter .gmap_canvas {\n  height: 100% !important;\n}\n.mapouter .gmap_canvas iframe {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFLSSxnQkFBQTtBQ0ZSO0FERlE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDSVo7QURDSTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREFRO0VBQ0ksZ0JBQUE7QUNFWjtBRERZO0VBQ0ksaUJBQUE7QUNHaEI7QUREWTtFQUlJLFNBQUE7QUNBaEI7QURIZ0I7RUFDSSxpQkFBQTtBQ0twQjtBRERZO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0doQjtBREZnQjtFQUNJLG1CQUFBO0FDSXBCO0FERmdCO0VBQ0ksYUFBQTtBQ0lwQjtBREZnQjtFQUNJLGNBQUE7QUNJcEI7QURJUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRlo7QURHWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRGhCO0FER1k7RUFDSSxpQkFBQTtBQ0RoQjtBREdZO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUNEaEI7QURHWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRGhCO0FESWdCO0VBQ0ksbUJBQUE7QUNGcEI7QURVQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ1BKO0FEUUk7RUFDSSx1QkFBQTtBQ05SO0FET1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWNvbnRhY3R7XG4gICAgcGFkZGluZy1ib3R0b206MDtcbiAgICBmb3Jte1xuICAgICAgICBoMXtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW46NzBweCAwcHg7XG4gICAgfVxuICAgIC5jb250YWN0LWVtYWlsc3tcbiAgICAucGFuZWx7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgIzIxNGY3YTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICMyMTRmN2E7XG4gICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgICAgcGFkZGluZy10b3A6MzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOjNweDtcbiAgICAgICAgLnBhbmVsLWJvZHl7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjYwcHg7XG4gICAgICAgICAgICBoNXtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICYgKyBkaXZ7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2Z3tcbiAgICAgICAgICAgICAgICAgICAgZmlsbDojMjE0ZjdhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojNTU1NTU1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9fVxuXG4gICAgLmNvbnRhY3QtYWRkcmVzc3tcbiAgICAgICAgLnBhbmVse1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjNweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDV7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFuZWwtYm9keXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZTVmMGZhO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MjIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAucGFuZWwtYm9keXtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZjMjAxOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG59XG5cbi5tYXBvdXRlcntcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjYwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDo3MHB4O1xuICAgIC5nbWFwX2NhbnZhc3tcbiAgICAgICAgaGVpZ2h0OjEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaWZyYW1le1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5zZWN0aW9uLWNvbnRhY3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgZm9ybSB7XG4gIG1hcmdpbjogNzBweCAwcHg7XG59XG4uc2VjdGlvbi1jb250YWN0IGZvcm0gaDEge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxNGY3YTtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMjE0ZjdhO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1lbWFpbHMgLnBhbmVsIC5wYW5lbC1ib2R5IGg1IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtZW1haWxzIC5wYW5lbCAucGFuZWwtYm9keSBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWVtYWlscyAucGFuZWwgLnBhbmVsLWJvZHkgZGl2ICsgZGl2IHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtZW1haWxzIC5wYW5lbCAucGFuZWwtYm9keSBkaXYgc3ZnIHtcbiAgZmlsbDogIzIxNGY3YTtcbn1cbi5zZWN0aW9uLWNvbnRhY3QgLmNvbnRhY3QtZW1haWxzIC5wYW5lbCAucGFuZWwtYm9keSBkaXYgYSB7XG4gIGNvbG9yOiAjNTU1NTU1O1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIC5wYW5lbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIC5wYW5lbCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIC5wYW5lbCBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3MgLnBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgbWluLWhlaWdodDogMjIwcHg7XG59XG4uc2VjdGlvbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3MgLnBhbmVsOmhvdmVyIC5wYW5lbC1ib2R5IHtcbiAgYmFja2dyb3VuZDogI2ZmYzIwMTtcbn1cblxuLm1hcG91dGVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuLm1hcG91dGVyIC5nbWFwX2NhbnZhcyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLm1hcG91dGVyIC5nbWFwX2NhbnZhcyBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactusComponent = class ContactusComponent {
    constructor() {
        this.activMap = 'Mumbai';
        this.corporate = true;
        this.mumbai = false;
        this.thane = false;
        this.contactInfo = [
            { title: 'General Informaton', subtitle: 'Inquiry', id: 'info@arkedge.com', icon: '#icon_contact', phone: '+91 9029290808' },
            { title: 'Sales & Learning', subtitle: 'Business development', id: 'sales@arkedge.com', icon: '#icon_development' },
            { title: 'Current Openings', subtitle: 'Job apply', id: 'careers@arkedge.com', icon: '#icon_approved' }
        ];
        this.getTouch = [
            { img: 'assets/images/contact', subtitle: 'Corporate Office', street_1: 'Arkedge Technologies Pvt Ltd.703, Wing "B", Galaxy L.X.APT.,', street_2: 'Navre Park, Ambarnath (W),Thane - 421501', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
            { img: 'assets/images/contact', subtitle: 'Mumbai', street_1: '201, B Tower Ashok Nagar, Marol Maroshi Road,', street_2: 'Andheri (E), Mumbai - 400047', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
            { img: 'assets/images/contact', subtitle: 'Thane', street_1: 'B-103, Elegant Tower,Shangvi Complex,,', street_2: 'Mira Road, Thane Mumbai ', state: 'Maharashtra, India', contact: '+91 9029290808', id: 'info@arkedge.com' },
        ];
    }
    ngOnInit() {
    }
    changeMap(map) {
        if (map === 'Corporate Office') {
            this.activMap = 'Corporate Office';
            this.corporate = true;
            this.mumbai = false;
            this.thane = false;
        }
        else if (map === 'Mumbai') {
            this.activMap = 'Mumbai';
            this.corporate = false;
            this.mumbai = true;
            this.thane = false;
        }
        else if (map === 'Thane') {
            this.activMap = 'Thane';
            this.corporate = false;
            this.mumbai = false;
            this.thane = true;
        }
    }
};
ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactus.component.scss */ "./src/app/contactus/contactus.component.scss")).default]
    })
], ContactusComponent);



/***/ }),

/***/ "./src/app/datamgmt/datamgmt.component.scss":
/*!**************************************************!*\
  !*** ./src/app/datamgmt/datamgmt.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".datamgmt {\n  padding: 0px;\n}\n.datamgmt img {\n  width: auto;\n}\n.datamgmt .v-flex img {\n  align-self: center;\n  margin-left: 70px;\n}\n.datamgmt ul.info-bar {\n  margin-left: 5px;\n  align-self: center;\n}\n.datamgmt ul.info-bar li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n.datamgmt ul.info-bar li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.datamgmt ul.info-bar li p {\n  font-weight: normal;\n}\n.datamgmt ul.info-bar.obtain-visibility {\n  margin-left: 50px;\n}\n.spend-analysis .col-sm-12 {\n  margin-top: 40px;\n}\n.m-f-u {\n  background: #e1f6ff;\n  padding: 20px 30px;\n}\n.security-solution {\n  background-color: whitesmoke;\n}\n.security-solution .panel {\n  background: #fff;\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);\n  height: 370px;\n}\n.security-solution .panel .panel-body {\n  padding: 15px;\n}\n.security-solution h2, .security-solution h6 p {\n  color: #fff;\n}\n.section-key-services {\n  position: relative;\n  padding-right: 0px;\n}\n.section-key-services .drop-down {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  width: auto;\n  transition: 0.1s;\n  z-index: 20;\n  margin-top: -15px;\n}\n.section-key-services.drop-down-active svg {\n  transform: rotate(-180deg);\n}\n.section-key-services.nav-pills li:not(:first-child) a {\n  border-top: none;\n}\n.section-key-services.nav-pills li:nth-child(2) a {\n  border-top: 1px solid #ccc;\n}\n.section-key-services.nav-pills li .nav-link {\n  color: #000;\n  padding-left: 50px;\n  position: relative;\n  border-radius: 0px;\n  border: 1px solid #ccc;\n  border-left: 5px solid transparent;\n}\n.section-key-services.nav-pills li .nav-link .title {\n  font-weight: bold;\n}\n.section-key-services.nav-pills li .nav-link.active {\n  background: #d3eef7;\n  color: #006A99;\n  border: transparent;\n  border-left: 5px solid #006A99;\n}\n.section-key-services.nav-pills li .nav-link p {\n  margin-bottom: 0px;\n}\n.key-services {\n  background: url('asd2.png') no-repeat top right #d3eef7;\n  padding-top: 25px;\n  margin-top: 0px !important;\n}\n.font-weight {\n  font-weight: bold;\n}\n.secure-org {\n  background: url('secure-bg.png') bottom center;\n}\n.secure-org h2, .secure-org h6, .secure-org p {\n  color: #fff;\n}\n.bi-info h2 {\n  margin: 5px 0px 20px;\n}\n.bi-info .servic-info .icon-circle {\n  background: #105491;\n  height: 150px;\n  width: 150px;\n}\n.bi-info .servic-info .icon-circle i {\n  line-height: 140px;\n}\n.bi-info .servic-info .icon-circle svg {\n  fill: #fff;\n}\n.bi-info .servic-info p {\n  white-space: pre;\n  margin-top: 10px;\n  font-weight: bold;\n}\n.dsa-popup .servic-info .icon-circle {\n  height: 150px;\n  width: 150px;\n}\n.dsa-popup .servic-info .icon-circle.skyblue {\n  background: #81daf6;\n}\n.dsa-popup .servic-info .icon-circle.limegreen {\n  background: #b9e087;\n}\n.dsa-popup .servic-info .icon-circle.yellow {\n  background: #eab119;\n}\n.dsa-popup .servic-info .icon-circle.pink {\n  background: #f1a196;\n}\n.dsa-popup .servic-info .icon-circle i {\n  line-height: 150px;\n}\n.dsa-popup .servic-info .icon-circle svg {\n  height: 70px;\n  width: 70px;\n}\n.dsa-popup h2 {\n  margin: 30px 0 40px;\n  font-weight: bold;\n}\n.ds-popup {\n  padding: 0;\n}\n.ds-popup .panel-body {\n  padding: 15px 25px;\n  overflow: auto;\n  height: calc(100vh - 260px);\n}\n.ds-popup .panel-body::-webkit-scrollbar {\n  width: 12px;\n}\n.ds-popup .panel-body::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n.ds-popup .panel-body::-webkit-scrollbar-thumb {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n}\n.servic-info .icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.servic-info .icon-circle svg {\n  height: 80px;\n  width: 80px;\n}\n.servic-info .icon-circle.skyblue {\n  background: #88cedb;\n}\n.servic-info .icon-circle.limegreen {\n  background: #78c29a;\n}\n.servic-info .icon-circle.yellow {\n  background: #f1bb57;\n}\n.servic-info .icon-circle.orange {\n  background: #e97f61;\n}\n.servic-info .icon-circle.blue {\n  background: #88cedb;\n}\n.servic-info .icon-circle.purple {\n  background: #787fc2;\n}\n.section-sevices {\n  padding: 0px;\n}\n.section-sevices .artf-head {\n  padding: 40px 0 0;\n  border-top: 1px dotted #e0e0e0;\n}\n.section-sevices:not(.atf) {\n  padding: 0px 0px 70px;\n}\n.section-sevices:not(.atf) .panel {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  background-color: rgba(204, 204, 204, 0.2);\n}\n.section-sevices .panel {\n  margin-bottom: 15px;\n  padding: 15px 0;\n}\n.section-sevices .panel h5 {\n  color: #333333;\n  font-weight: bold;\n  margin: 25px 0 5px;\n}\n.section-sevices .panel p {\n  padding: 0 20px;\n}\n.section-sevices h6 {\n  margin-bottom: 40px;\n}\n@media (max-width: 576px) {\n  .v-flex img {\n    margin-left: 15px 0;\n  }\n\n  .section-key-services {\n    transition: 1s;\n    display: block;\n    background: #f3f3f3;\n  }\n  .section-key-services a:not(.active) {\n    display: none;\n  }\n  .section-key-services li {\n    width: 100%;\n  }\n  .section-key-services li a {\n    margin: 10px 0 !important;\n    padding-right: 50px;\n  }\n  .section-key-services.drop-down-active a:not(.active) {\n    display: block;\n  }\n\n  .key-services {\n    background-image: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2RhdGFtZ210L2RhdGFtZ210LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXRhbWdtdC9kYXRhbWdtdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtBQ0VSO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1o7QURHSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREVRO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQVo7QURDWTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NoQjtBRENZO0VBQ0ksbUJBQUE7QUNDaEI7QURFUTtFQUNJLGlCQUFBO0FDQVo7QURLSTtFQUNJLGdCQUFBO0FDRlI7QURLQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtBO0VBQ0ksNEJBQUE7QUNGSjtBREdRO0VBQ0ksZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGFBQUE7QUNEWjtBREVZO0VBQ0ksYUFBQTtBQ0FoQjtBRElJO0VBQ0ksV0FBQTtBQ0ZSO0FES0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDRko7QURHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNEUjtBRElRO0VBQ0ksMEJBQUE7QUNGWjtBRFFnQjtFQUNJLGdCQUFBO0FDTnBCO0FEVWdCO0VBQ0ksMEJBQUE7QUNScEI7QURXWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FDVGhCO0FEV2dCO0VBQ0ksaUJBQUE7QUNUcEI7QURXZ0I7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDVHBCO0FEWWlCO0VBQ0ksa0JBQUE7QUNWckI7QURnQkE7RUFDSSx1REFBQTtFQUNBLGlCQUFBO0VBQ0gsMEJBQUE7QUNiRDtBRGdCQTtFQUNJLGlCQUFBO0FDYko7QURnQkE7RUFDSyw4Q0FBQTtBQ2JMO0FEY0s7RUFDSSxXQUFBO0FDWlQ7QURnQkk7RUFDSSxvQkFBQTtBQ2JSO0FEZ0JRO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ2RaO0FEZVk7RUFDSSxrQkFBQTtBQ2JoQjtBRGVZO0VBQ0ksVUFBQTtBQ2JoQjtBRGlCUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2ZaO0FEeUJRO0VBYUksYUFBQTtFQUNBLFlBQUE7QUNsQ1o7QURxQlk7RUFDSSxtQkFOQztBQ2JqQjtBRHFCWTtFQUNJLG1CQVJHO0FDWG5CO0FEcUJZO0VBQ0ksbUJBVkE7QUNUaEI7QURxQlk7RUFDSSxtQkFaRjtBQ1BkO0FEdUJZO0VBQ0ksa0JBQUE7QUNyQmhCO0FEdUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNyQmhCO0FEeUJJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ3ZCUjtBRDBCQTtFQUNJLFVBQUE7QUN2Qko7QUR3Qkc7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQ3RCSjtBRHVCSTtFQUNJLFdBQUE7QUNyQlI7QUR3Qkk7RUFDSSxvREFBQTtBQ3RCUjtBRDBCSTtFQUNJLG9EQUFBO0FDeEJSO0FEbUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNoQ0o7QURpQ0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQy9CUjtBRGlDSTtFQUNJLG1CQWhCQztBQ2ZUO0FEaUNJO0VBQ0ksbUJBaEJHO0FDZlg7QURpQ0k7RUFDSSxtQkFyQkE7QUNWUjtBRGlDSTtFQUNJLG1CQXZCQTtBQ1JSO0FEaUNJO0VBQ0ksbUJBeEJGO0FDUE47QURpQ0k7RUFDSSxtQkExQkE7QUNMUjtBRG1DQTtFQUNJLFlBQUE7QUNoQ0o7QURpQ0k7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO0FDL0JSO0FEaUNJO0VBQ0kscUJBQUE7QUMvQlI7QURnQ087RUFDQyxnQkFBQTtFQUNOLHlCQUFBO0VBQ00sa0JBQUE7RUFDQSwwQ0FBQTtBQzlCUjtBRGlDQztFQUNDLG1CQUFBO0VBQ0EsZUFBQTtBQy9CRjtBRGdDRTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDOUJIO0FEZ0NFO0VBQ0MsZUFBQTtBQzlCSDtBRGlDQztFQUNDLG1CQUFBO0FDL0JGO0FEb0NBO0VBRVE7SUFFSSxtQkFBQTtFQ25DVjs7RURzQ0U7SUFDRixjQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VDbkNBO0VEb0NBO0lBQ0MsYUFBQTtFQ2xDRDtFRG9DQTtJQUNDLFdBQUE7RUNsQ0Q7RURtQ0M7SUFDQyx5QkFBQTtJQUNZLG1CQUFBO0VDakNkO0VEcUNDO0lBQ0MsY0FBQTtFQ25DRjs7RUR1Q0U7SUFDSSxzQkFBQTtFQ3BDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGF0YW1nbXQvZGF0YW1nbXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YW1nbXR7XG4gICAgcGFkZGluZzowcHg7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDphdXRvO1xuICAgIH1cbiAgICAudi1mbGV4e1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVsLmluZm8tYmFye1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMjBweDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgJjo6YmVmb3Jle1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOjhweDtcbiAgICAgICAgICAgICAgICBsZWZ0OjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYub2J0YWluLXZpc2liaWxpdHl7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDo1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnNwZW5kLWFuYWx5c2lze1xuICAgIC5jb2wtc20tMTJ7XG4gICAgICAgIG1hcmdpbi10b3A6NDBweDtcbiAgICB9XG59XG4ubS1mLXV7XG4gICAgYmFja2dyb3VuZDogI2UxZjZmZjtcbiAgICBwYWRkaW5nOjIwcHggMzBweDtcbn1cblxuLnNlY3VyaXR5LXNvbHV0aW9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMSk7XG4gICAgICAgIC5wYW5lbHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMjUpO1xuICAgICAgICAgICAgaGVpZ2h0OjM3MHB4O1xuICAgICAgICAgICAgLnBhbmVsLWJvZHl7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBoMiwgaDYgcHtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICB9XG59XG4uc2VjdGlvbi1rZXktc2VydmljZXN7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIC5kcm9wLWRvd257XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6MTVweDtcbiAgICAgICAgdG9wOjUwJTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHRyYW5zaXRpb246IC4xcztcbiAgICAgICAgei1pbmRleDogMjA7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xNXB4OyBcbiAgICB9XG4gICAgJi5kcm9wLWRvd24tYWN0aXZle1xuICAgICAgICBzdmd7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLm5hdi1waWxsc3tcbiAgICAgICAgbGl7XG4gICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6bm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtbGlua3tcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6NTBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDo1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2QzZWVmNztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDZBOTk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjp0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkICMwMDZBOTk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjBweDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgXG4gICAgICAgIH1cbiAgICB9XG59XG4ua2V5LXNlcnZpY2Vze1xuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFuYWdzZXJ2aWNlL2FzZDIucG5nKSBuby1yZXBlYXQgdG9wIHJpZ2h0ICNkM2VlZjc7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG5cdG1hcmdpbi10b3A6MHB4ICFpbXBvcnRhbnQ7ICAgXG59XG5cbi5mb250LXdlaWdodHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlY3VyZS1vcmd7XG4gICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL21hbmFnc2VydmljZS9zZWN1cmUtYmcucG5nKSBib3R0b20gY2VudGVyO1xuICAgICBoMixoNixwe1xuICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgfVxufVxuLmJpLWluZm97XG4gICAgaDJ7XG4gICAgICAgIG1hcmdpbjogNXB4IDBweCAyMHB4O1xuICAgIH1cbiAgICAuc2VydmljLWluZm97XG4gICAgICAgIC5pY29uLWNpcmNsZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMDU0OTE7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgaXtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdmd7XG4gICAgICAgICAgICAgICAgZmlsbDojZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5kc2EtcG9wdXB7XG4gICAgLnNlcnZpYy1pbmZvIHtcbiAgICAgICAgJHNreWJsdWU6IzgxZGFmNjtcbiAgICAgICAgJGxpbWVncmVlbjojYjllMDg3O1xuICAgICAgICAkeWVsbG93OiNlYWIxMTk7XG4gICAgICAgICRwaW5rOiNmMWExOTY7XG4gICAgICAgIC5pY29uLWNpcmNsZXtcbiAgICAgICAgICAgICYuc2t5Ymx1ZXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiRza3libHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5saW1lZ3JlZW57XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDokbGltZWdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi55ZWxsb3d7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDokeWVsbG93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5waW5re1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6JHBpbms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgaXtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdmd7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjcwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6NzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoMntcbiAgICAgICAgbWFyZ2luOiAzMHB4IDAgNDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuLmRzLXBvcHVwe1xuICAgIHBhZGRpbmc6MDtcbiAgIC5wYW5lbC1ib2R5e1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNjBweCk7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICB9XG4gICAgIFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXG5cbiAgICB9XG4gICAgIFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC41KTsgXG4gICAgfVxuICAgfVxufVxuLnNlcnZpYy1pbmZve1xuJHNreWJsdWU6Izg4Y2VkYjtcbiR5ZWxsb3c6I2YxYmI1NztcbiRvcmFuZ2U6I2U5N2Y2MTtcbiRsaW1lZ3JlZW46Izc4YzI5YTtcbiRibHVlOiM4OGNlZGI7XG4kcHVycGxlOiM3ODdmYzI7XG4uaWNvbi1jaXJjbGV7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBzdmd7XG4gICAgICAgIGhlaWdodDo4MHB4O1xuICAgICAgICB3aWR0aDo4MHB4O1xuICAgIH1cbiAgICAmLnNreWJsdWV7XG4gICAgICAgIGJhY2tncm91bmQ6JHNreWJsdWU7XG4gICAgfVxuICAgICYubGltZWdyZWVue1xuICAgICAgICBiYWNrZ3JvdW5kOiRsaW1lZ3JlZW47XG4gICAgfVxuICAgICYueWVsbG93e1xuICAgICAgICBiYWNrZ3JvdW5kOiR5ZWxsb3c7XG4gICAgfVxuICAgICYub3Jhbmdle1xuICAgICAgICBiYWNrZ3JvdW5kOiRvcmFuZ2U7XG4gICAgfVxuICAgICYuYmx1ZXtcbiAgICAgICAgYmFja2dyb3VuZDokYmx1ZTtcbiAgICB9XG4gICAgJi5wdXJwbGV7XG4gICAgICAgIGJhY2tncm91bmQ6JHB1cnBsZTtcbiAgICB9XG59XG59XG4uc2VjdGlvbi1zZXZpY2Vze1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIC5hcnRmLWhlYWR7XG4gICAgICAgIHBhZGRpbmc6NDBweCAwIDA7XG4gICAgICAgIGJvcmRlci10b3A6MXB4IGRvdHRlZCByZ2JhKDIyNCwgMjI0LCAyMjQsIDEpO1xuICAgIH1cdFxuICAgICY6bm90KC5hdGYpe1xuICAgICAgICBwYWRkaW5nOjBweCAwcHggNzBweDtcbiAgICAgICAucGFuZWx7XG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcblx0XHRib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjI0LCAyMjQsIDIyNCwgMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKTtcbiAgICAgICAgfVxuICAgIH1cblx0LnBhbmVse1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdFx0cGFkZGluZzogMTVweCAwO1xuXHRcdGg1e1xuXHRcdFx0Y29sb3I6IzMzMzMzMztcblx0XHRcdGZvbnQtd2VpZ2h0OmJvbGQ7XG5cdFx0XHRtYXJnaW46IDI1cHggMCA1cHg7XG5cdFx0fVx0XHRcblx0XHRwe1xuXHRcdFx0cGFkZGluZzowIDIwcHg7XG5cdFx0fVx0XG5cdH1cblx0aDZ7XG5cdFx0bWFyZ2luLWJvdHRvbTo0MHB4O1xuXHR9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcbiAgICAudi1mbGV4e1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjE1cHggMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2VjdGlvbi1rZXktc2VydmljZXN7IFxuXHRcdHRyYW5zaXRpb246IDFzO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcblx0XHRhOm5vdCguYWN0aXZlKXtcblx0XHRcdGRpc3BsYXk6bm9uZTtcblx0XHR9XG5cdFx0bGl7XG5cdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0YXtcblx0XHRcdFx0bWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjUwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCYuZHJvcC1kb3duLWFjdGl2ZXtcblx0XHRcdGE6bm90KC5hY3RpdmUpe1xuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuICAgIC5rZXktc2VydmljZXN7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgfVxufSIsIi5kYXRhbWdtdCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5kYXRhbWdtdCBpbWcge1xuICB3aWR0aDogYXV0bztcbn1cbi5kYXRhbWdtdCAudi1mbGV4IGltZyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG4uZGF0YW1nbXQgdWwuaW5mby1iYXIge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uZGF0YW1nbXQgdWwuaW5mby1iYXIgbGkge1xuICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kYXRhbWdtdCB1bC5pbmZvLWJhciBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmRhdGFtZ210IHVsLmluZm8tYmFyIGxpIHAge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmRhdGFtZ210IHVsLmluZm8tYmFyLm9idGFpbi12aXNpYmlsaXR5IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5zcGVuZC1hbmFseXNpcyAuY29sLXNtLTEyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLm0tZi11IHtcbiAgYmFja2dyb3VuZDogI2UxZjZmZjtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xufVxuXG4uc2VjdXJpdHktc29sdXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLnNlY3VyaXR5LXNvbHV0aW9uIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBoZWlnaHQ6IDM3MHB4O1xufVxuLnNlY3VyaXR5LXNvbHV0aW9uIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc2VjdXJpdHktc29sdXRpb24gaDIsIC5zZWN1cml0eS1zb2x1dGlvbiBoNiBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWN0aW9uLWtleS1zZXJ2aWNlcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLnNlY3Rpb24ta2V5LXNlcnZpY2VzIC5kcm9wLWRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IGF1dG87XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIHotaW5kZXg6IDIwO1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbi5zZWN0aW9uLWtleS1zZXJ2aWNlcy5kcm9wLWRvd24tYWN0aXZlIHN2ZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLnNlY3Rpb24ta2V5LXNlcnZpY2VzLm5hdi1waWxscyBsaTpub3QoOmZpcnN0LWNoaWxkKSBhIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5zZWN0aW9uLWtleS1zZXJ2aWNlcy5uYXYtcGlsbHMgbGk6bnRoLWNoaWxkKDIpIGEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cbi5zZWN0aW9uLWtleS1zZXJ2aWNlcy5uYXYtcGlsbHMgbGkgLm5hdi1saW5rIHtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uc2VjdGlvbi1rZXktc2VydmljZXMubmF2LXBpbGxzIGxpIC5uYXYtbGluayAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLWtleS1zZXJ2aWNlcy5uYXYtcGlsbHMgbGkgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNkM2VlZjc7XG4gIGNvbG9yOiAjMDA2QTk5O1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMDZBOTk7XG59XG4uc2VjdGlvbi1rZXktc2VydmljZXMubmF2LXBpbGxzIGxpIC5uYXYtbGluayBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ua2V5LXNlcnZpY2VzIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFuYWdzZXJ2aWNlL2FzZDIucG5nKSBuby1yZXBlYXQgdG9wIHJpZ2h0ICNkM2VlZjc7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtd2VpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZWN1cmUtb3JnIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFuYWdzZXJ2aWNlL3NlY3VyZS1iZy5wbmcpIGJvdHRvbSBjZW50ZXI7XG59XG4uc2VjdXJlLW9yZyBoMiwgLnNlY3VyZS1vcmcgaDYsIC5zZWN1cmUtb3JnIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJpLWluZm8gaDIge1xuICBtYXJnaW46IDVweCAwcHggMjBweDtcbn1cbi5iaS1pbmZvIC5zZXJ2aWMtaW5mbyAuaWNvbi1jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjMTA1NDkxO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG4uYmktaW5mbyAuc2VydmljLWluZm8gLmljb24tY2lyY2xlIGkge1xuICBsaW5lLWhlaWdodDogMTQwcHg7XG59XG4uYmktaW5mbyAuc2VydmljLWluZm8gLmljb24tY2lyY2xlIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG4uYmktaW5mbyAuc2VydmljLWluZm8gcCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZHNhLXBvcHVwIC5zZXJ2aWMtaW5mbyAuaWNvbi1jaXJjbGUge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG4uZHNhLXBvcHVwIC5zZXJ2aWMtaW5mbyAuaWNvbi1jaXJjbGUuc2t5Ymx1ZSB7XG4gIGJhY2tncm91bmQ6ICM4MWRhZjY7XG59XG4uZHNhLXBvcHVwIC5zZXJ2aWMtaW5mbyAuaWNvbi1jaXJjbGUubGltZWdyZWVuIHtcbiAgYmFja2dyb3VuZDogI2I5ZTA4Nztcbn1cbi5kc2EtcG9wdXAgLnNlcnZpYy1pbmZvIC5pY29uLWNpcmNsZS55ZWxsb3cge1xuICBiYWNrZ3JvdW5kOiAjZWFiMTE5O1xufVxuLmRzYS1wb3B1cCAuc2VydmljLWluZm8gLmljb24tY2lyY2xlLnBpbmsge1xuICBiYWNrZ3JvdW5kOiAjZjFhMTk2O1xufVxuLmRzYS1wb3B1cCAuc2VydmljLWluZm8gLmljb24tY2lyY2xlIGkge1xuICBsaW5lLWhlaWdodDogMTUwcHg7XG59XG4uZHNhLXBvcHVwIC5zZXJ2aWMtaW5mbyAuaWNvbi1jaXJjbGUgc3ZnIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cbi5kc2EtcG9wdXAgaDIge1xuICBtYXJnaW46IDMwcHggMCA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRzLXBvcHVwIHtcbiAgcGFkZGluZzogMDtcbn1cbi5kcy1wb3B1cCAucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI2MHB4KTtcbn1cbi5kcy1wb3B1cCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTJweDtcbn1cbi5kcy1wb3B1cCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmRzLXBvcHVwIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zZXJ2aWMtaW5mbyAuaWNvbi1jaXJjbGUge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNlcnZpYy1pbmZvIC5pY29uLWNpcmNsZSBzdmcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuLnNlcnZpYy1pbmZvIC5pY29uLWNpcmNsZS5za3libHVlIHtcbiAgYmFja2dyb3VuZDogIzg4Y2VkYjtcbn1cbi5zZXJ2aWMtaW5mbyAuaWNvbi1jaXJjbGUubGltZWdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzc4YzI5YTtcbn1cbi5zZXJ2aWMtaW5mbyAuaWNvbi1jaXJjbGUueWVsbG93IHtcbiAgYmFja2dyb3VuZDogI2YxYmI1Nztcbn1cbi5zZXJ2aWMtaW5mbyAuaWNvbi1jaXJjbGUub3JhbmdlIHtcbiAgYmFja2dyb3VuZDogI2U5N2Y2MTtcbn1cbi5zZXJ2aWMtaW5mbyAuaWNvbi1jaXJjbGUuYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICM4OGNlZGI7XG59XG4uc2VydmljLWluZm8gLmljb24tY2lyY2xlLnB1cnBsZSB7XG4gIGJhY2tncm91bmQ6ICM3ODdmYzI7XG59XG5cbi5zZWN0aW9uLXNldmljZXMge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5hcnRmLWhlYWQge1xuICBwYWRkaW5nOiA0MHB4IDAgMDtcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjZTBlMGUwO1xufVxuLnNlY3Rpb24tc2V2aWNlczpub3QoLmF0Zikge1xuICBwYWRkaW5nOiAwcHggMHB4IDcwcHg7XG59XG4uc2VjdGlvbi1zZXZpY2VzOm5vdCguYXRmKSAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKTtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgaDUge1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMjVweCAwIDVweDtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIHAge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uc2VjdGlvbi1zZXZpY2VzIGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC52LWZsZXggaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweCAwO1xuICB9XG5cbiAgLnNlY3Rpb24ta2V5LXNlcnZpY2VzIHtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICB9XG4gIC5zZWN0aW9uLWtleS1zZXJ2aWNlcyBhOm5vdCguYWN0aXZlKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc2VjdGlvbi1rZXktc2VydmljZXMgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWN0aW9uLWtleS1zZXJ2aWNlcyBsaSBhIHtcbiAgICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLnNlY3Rpb24ta2V5LXNlcnZpY2VzLmRyb3AtZG93bi1hY3RpdmUgYTpub3QoLmFjdGl2ZSkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmtleS1zZXJ2aWNlcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/datamgmt/datamgmt.component.ts":
/*!************************************************!*\
  !*** ./src/app/datamgmt/datamgmt.component.ts ***!
  \************************************************/
/*! exports provided: DatamgmtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatamgmtComponent", function() { return DatamgmtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let DatamgmtComponent = class DatamgmtComponent {
    constructor(sharedservice, config, modalService) {
        this.sharedservice = sharedservice;
        this.modalService = modalService;
        this.closeResult = '';
        this.sevicesInfo = [
            { icon: '#icon_datastrategy', color: 'yellow', },
            { icon: '#icon_dataEng', color: 'limegreen', },
            { icon: '#data_science', color: 'skyblue', },
            { icon: '#data_cons', color: 'pink', }
        ];
        this.businessIntel = [
            { icon: '#icon_dataCol', title: `DATA
Collection`, },
            { icon: '#icon_dataModel', title: `Predictive
Modeling`, },
            { icon: '#icon_outCome', title: `Outcome
Analysis`, },
            { icon: '#icon_budgetAll', title: `Budget
Allocation`, },
        ];
        this.sevices = [
            {
                title: 'Consulting',
                description: `Scope identification, feasibility assessment, 
      choice of tools and algorithms`,
                icon: '#icon_consulting'
            },
            {
                title: 'Data Preparation',
                description: `Enriching the data set by missing value replacement,
      outlier analysis, categorical variable
      definition`,
                icon: '#icon_dataprep'
            },
            {
                title: 'Model generation',
                color: 'orange',
                description: `Generating the model, testing and refining
      on basis of validity of output`,
                icon: '#icon_Modelgen'
            },
            {
                title: 'Performance Tuning',
                description: `Enhancing model and scripts on ongoing basis,
      over and above model self-learning`,
                icon: '#icon_PerformanceTuning'
            },
            {
                title: 'Migration',
                description: `Migration of algorithms, models from one
      platform to the other, e.g., SAS to R`,
                icon: '#icon_migration'
            },
            {
                title: 'Training',
                description: `Training of business users as well as technical
      teams on SAS, Python and R`,
                icon: '#icon_training2'
            },
        ];
        this.sevicesArtf = [
            {
                title: 'Data Science & Analytics',
                description: 'Use state-of-the-art machine learning techniques to cut through the noise in the rapidly changing information landscape and find patterns in the data to monitor trends, predict, and gain insights.',
                icon: '#icon_dsa',
            },
            {
                title: 'Data Strategy',
                description: 'From data ingestion, processing, and the architecture & data engineering requirements to enable big data solutions. SFL Scientific can evaluate and provide the technology roadmap to achieve business goals.',
                icon: '#icon_ds',
                heading: "dataStrategy"
            },
            {
                title: 'Business Intelligence',
                description: 'Ingest, extract, and create powerful predictive visualizations for end users. Transform complex and unstructured data to derive pertinent insights required for growth from text, time-series, customer',
                icon: '#icon_bi',
                heading: "business"
            },
        ];
        this.dataMigration = [
            { list: 'DBMS / RDBMS' },
            { list: 'ERP' },
            { list: 'File System (TXT, XLS, CSV etc)' },
            { list: 'XML' },
            { list: 'SAP' },
            { list: 'CRM' }
        ];
        this.espendRequirement = [
            { list: 'Review / Understand the Client Business and Project Scope.' },
            { list: 'Identification of spends data sources & attributes (Internal & External Sources).' },
            { list: 'Assessment for completeness of data from multiple Sources.' },
            { list: 'Review of additional Information - Frequency, Exchange rates, languages, Profit Centers / Business units Information etc.' },
            { list: 'Finalize data file templates, taxonomy / schema for classification.' },
            { list: 'Review any client / industry specific classification needs / guidelines.' },
            { list: 'Setup of the client domain in the tool with client specific information' }
        ];
        this.dataCollection = [
            { list: 'Collect spend data (raw data) from various systems & sources. Coordinate discussions (if necessary) across time zones and languages' },
            { list: 'Review the completeness of data in terms of required fields, formats etc.' },
            { list: 'Work with client to setup semi-automated/automated data collection process' },
            { list: 'Create file based information summary for client review (spend numbers, records, currencies etc.)' },
            { list: 'File acceptance / rejection based on client feedback' },
            { list: 'Consolidate the data files from various templates to standard accepted template.' },
            { list: 'File upload into the tool for further data processing.' }
        ];
        this.dataCleansing = [
            { list: 'Review raw data files and transform data at attribute level if required.' },
            { list: 'Extract data from files and reconcile based on various data formats.' },
            { list: 'Normalize data for various attributes such as PC/BU, Company, date formats, etc.' },
            { list: 'Normalize currencies and perform currency conversion to normalize spend.' },
            { list: 'Cleanse the records from any noise (junk) characters for further processing.' },
            { list: 'Perform data validation for specific set of business rules.' },
            { list: 'Perform data clustering based on certain data attributes such as supplier name, GL description, material description, material / item group etc.' }
        ];
        this.classification = [
            { list: 'Memory Lookup for classification of clusters on historic intelligence.' },
            { list: 'AI based engine for supplier / item normalization, classification, and establishing corporate linkage.' },
            { list: 'Generate classification result summary based on regions, business unit, top categories, suppliers and spend amounts for sourcing expert verification.' },
            { list: 'Conduct feedback sessions with sourcing experts to finalize the spend classification.' },
            { list: 'Classifying the data into sourceable categories using the UNSPSC' },
        ];
        this.advancedData = [
            { list: 'Review the standard analytics report formats (measures and dimensions) and identify need for additional cubes or dimensions.' },
            { list: 'Define the format of additional analytics reports and create the analytics reports based on the OLAP data cubes.' },
            { list: 'Review the analytics reports and provide access to reports for client feedback.' },
            { list: 'Based on client feedback, incorporate any changes so as to enrich the spend data with business specific rules / information.' },
            { list: 'Reporting the analysis and findings to the decision makers within your organization.' },
            { list: 'Finalize the spend analysis reports and publish the "Spend Book"' },
        ];
        this.spendAnalytics = [
            { list: 'Provides insights on direct and indirect spending and business strategies' },
            { list: 'Data quality improvement & Operational efficiency' },
            { list: 'Converts raw data into knowledge capital' },
            { list: 'Rationalize and standardize products and services' },
            { list: 'Shows company spend across categories, supplier etc' },
            { list: 'Identifies savings opportunities for procurement' },
            { list: 'Consolidate spend across various business units to increase leverage in supplier negotiation' },
            { list: 'Enables strategic sourcing that helps reduce cost and maximize profits' },
            { list: 'Provides actionable insights and recommendations, which impacts the bottom line' },
            { list: 'Obtain visibility into how much money is spent with whom, on what and how' },
        ];
        this.obtainvisibility = [
            { list: 'Provides insights on direct and indirect spending and business strategies' },
            { list: 'Data quality improvement & Operational efficiency' },
            { list: 'Converts raw data into knowledge capital' },
            { list: 'Rationalize and standardize products and services' },
            { list: 'Shows company spend across categories, supplier etc' },
            { list: 'Identifies savings opportunities for procurement' },
            { list: 'Consolidate spend across various business units to increase leverage in supplier negotiation' },
            { list: 'Enables strategic sourcing that helps reduce cost and maximize profits' },
            { list: 'Provides actionable insights and recommendations, which impacts the bottom line' },
            { list: 'Obtain visibility into how much money is spent with whom, on what and how' }
        ];
        this.slideConfig = {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        this.solutions = [
            { title: `AntiVirus &
Patch Management`,
                description: 'We secure all ‘end points’ and network ‘entry’ points to provide protection.' },
            { title: `Anti-Spam
Policies`,
                description: 'Set out in clear terms the policies to combat unsolicited email, also known as spam.' },
            { title: `End Point
Security`,
                description: 'Address your critical needs in one integrated package with endpoint protection.' },
            { title: `Firewall Setup,
Monitor and Manage`,
                description: 'We help you setup, analyze the usage and effectiveness of the Firewall, and manage for optimal performance.' },
            { title: `Application
Vulnerability Testing`,
                description: 'Vulnerability assessments help you find potential weaknesses in your service.' },
            { title: `Security Audit &
Compliance`,
                description: 'Our consultants are qualified ISO 27001 Lead Auditors in delivering information security services.' }
        ];
        this.isOpen = true;
    }
    ngOnInit() {
        this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
        this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
    }
    title(i) {
        if (i === 1) {
            this.tabName = 'Data Engineering';
        }
        else if (i === 2) {
            this.tabName = 'Data Management';
        }
        else if (i === 3) {
            this.tabName = 'Data Science';
        }
        else if (i === 4) {
            this.tabName = 'Cloud Computing';
        }
    }
    drowDownToggle() {
        this.isOpen = !this.isOpen;
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title_1', size: 'lg', windowClass: 'datamgt-popup' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
DatamgmtComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
DatamgmtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datamgmt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datamgmt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datamgmt/datamgmt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datamgmt.component.scss */ "./src/app/datamgmt/datamgmt.component.scss")).default]
    })
], DatamgmtComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  background: #172947;\n  padding: 35px 0 0px;\n}\nfooter .logo {\n  margin-bottom: 15px;\n}\nfooter a {\n  text-transform: uppercase;\n  color: #fff;\n  font-size: 14px;\n}\nfooter p {\n  color: #fff;\n  font-size: 14px;\n}\nfooter address {\n  color: #dddddd;\n}\nfooter .copyright-note {\n  padding-bottom: 35px;\n}\nfooter h5 {\n  color: #fff;\n}\nfooter ul.footer-li {\n  list-style: none inside;\n  margin: 0;\n  padding: 10px 0;\n  clear: both;\n}\nfooter ul.footer-li li {\n  padding: 10px 0;\n  line-height: 12px;\n}\nfooter ul.footer-li li a.active, footer ul.footer-li li a:hover {\n  color: #eab119;\n  text-decoration: none;\n}\nfooter .social-net {\n  padding: 0;\n}\nfooter .social-net ul {\n  list-style: none inside;\n  margin-top: 20px;\n  padding: 0;\n  float: left;\n  width: 100%;\n}\nfooter .social-net ul li {\n  float: left;\n  margin-right: 15px;\n}\nfooter .social-net ul li a {\n  color: #fff;\n  font-size: 14px;\n}\nfooter .social-net ul li svg {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\nfooter .copyright {\n  background: #0d1a34;\n}\nfooter .copyright p {\n  text-align: center;\n  color: #ffffff;\n  padding: 5px 0;\n  margin: 0;\n  font-size: 12px;\n  display: flex;\n  justify-content: center;\n  align-content: space-between;\n}\nfooter .map img {\n  max-width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLG1CQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNFUjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQUk7RUFDSSxvQkFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0FDRVI7QURBSTtFQUNJLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRVI7QUREUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0daO0FERGdCO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDR3BCO0FERUk7RUFDSSxVQUFBO0FDQVI7QURDUTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDWjtBREFZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRWhCO0FERGdCO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNHcEI7QUREZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNHcEI7QURFSTtFQUNJLG1CQUFBO0FDQVI7QURDUTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDQ1I7QURHUTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTcyOTQ3O1xuICAgIHBhZGRpbmc6IDM1cHggMCAwcHg7XG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICBhIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIH1cbiAgICBhZGRyZXNzIHtcbiAgICAgICAgY29sb3I6ICNkZGRkZGQ7XG4gICAgfVxuICAgIC5jb3B5cmlnaHQtbm90ZXtcbiAgICAgICAgcGFkZGluZy1ib3R0b206MzVweDtcbiAgICB9XG4gICAgaDV7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgfVxuICAgIHVsLmZvb3Rlci1saSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSwgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2VhYjExOTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc29jaWFsLW5ldCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHVse1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZSBpbnNpZGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdmd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jb3B5cmlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kOiMwZDFhMzQ7XG4gICAgICAgIHB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6NXB4IDA7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgIH1cbiAgICAgLm1hcHtcbiAgICAgICAgaW1ne1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICB9XG59IiwiZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzE3Mjk0NztcbiAgcGFkZGluZzogMzVweCAwIDBweDtcbn1cbmZvb3RlciAubG9nbyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5mb290ZXIgYSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5mb290ZXIgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5mb290ZXIgYWRkcmVzcyB7XG4gIGNvbG9yOiAjZGRkZGRkO1xufVxuZm9vdGVyIC5jb3B5cmlnaHQtbm90ZSB7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuZm9vdGVyIGg1IHtcbiAgY29sb3I6ICNmZmY7XG59XG5mb290ZXIgdWwuZm9vdGVyLWxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZSBpbnNpZGU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBjbGVhcjogYm90aDtcbn1cbmZvb3RlciB1bC5mb290ZXItbGkgbGkge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuZm9vdGVyIHVsLmZvb3Rlci1saSBsaSBhLmFjdGl2ZSwgZm9vdGVyIHVsLmZvb3Rlci1saSBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNlYWIxMTk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB7XG4gIHBhZGRpbmc6IDA7XG59XG5mb290ZXIgLnNvY2lhbC1uZXQgdWwge1xuICBsaXN0LXN0eWxlOiBub25lIGluc2lkZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9vdGVyIC5zb2NpYWwtbmV0IHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmZvb3RlciAuc29jaWFsLW5ldCB1bCBsaSBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmaWxsOiAjZmZmO1xufVxuZm9vdGVyIC5jb3B5cmlnaHQge1xuICBiYWNrZ3JvdW5kOiAjMGQxYTM0O1xufVxuZm9vdGVyIC5jb3B5cmlnaHQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5mb290ZXIgLm1hcCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav.bg-light {\n  background-color: rgba(18, 80, 128, 0.9) !important;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9;\n  padding: 0;\n}\n\n.navbar-brand i, .navbar-brand div {\n  float: left;\n}\n\n.navbar-brand svg {\n  width: 40px;\n  height: 40px;\n}\n\n.navbar-brand div {\n  margin-left: 10px;\n}\n\n.navbar-brand div span {\n  color: #fff;\n  display: block;\n}\n\n.navbar-brand div span.company-name {\n  font-size: 25px;\n  line-height: 20px;\n  font-weight: bold;\n}\n\n.navbar-brand div span.company-type {\n  font-size: 15px;\n  line-height: 12px;\n  margin-top: 7px;\n}\n\n.navbar-nav-list {\n  float: right;\n  margin-left: auto;\n  list-style-type: none;\n  margin-bottom: 0;\n}\n\n.navbar-nav-list .nav-item {\n  font-size: 14px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item:nth-child(-n+4) {\n  text-transform: uppercase;\n  font-size: 16px;\n}\n\n.navbar-nav-list .nav-item:nth-child(5) {\n  margin-left: 50px;\n}\n\n.navbar-nav-list .nav-item.quick-link a {\n  padding-right: 0px;\n}\n\n.navbar-nav-list .nav-item.quick-link svg {\n  fill: #fff;\n  width: 30px;\n  height: 30px;\n}\n\n.navbar-nav-list .nav-item a {\n  color: #fff;\n  padding: 1.5rem 1rem;\n}\n\n.navbar-nav-list .nav-item a.active, .navbar-nav-list .nav-item a:hover {\n  color: #eab119;\n}\n\n.navbar-nav-list .nav-item svg {\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n}\n\n.navbar-nav-list .nav-item .sub-nav {\n  list-style-type: none;\n  border-top: 5px solid #276caa;\n  border-bottom: 2px solid #276caa;\n  position: absolute;\n  top: -155px;\n  left: 0px;\n  width: 100%;\n  height: 0px;\n  background: #fff;\n  transition: all 0.5s;\n  padding: 30px 0;\n  margin: 0px;\n  display: none;\n}\n\n.navbar-nav-list .nav-item .sub-nav img {\n  max-width: 100%;\n  height: 150px;\n  margin-bottom: 5px;\n}\n\n.navbar-nav-list .nav-item .sub-nav li.inner-list {\n  border-top: 1px dotted #ccc;\n  padding: 5px 0;\n  float: left;\n  display: block;\n  width: 100%;\n}\n\n.navbar-nav-list .nav-item .sub-nav li a {\n  color: #276caa;\n  padding: 0;\n  margin-top: 0px;\n  font-size: 12px;\n}\n\n.navbar-nav-list .nav-item .sub-nav a {\n  margin-top: 10px;\n  float: left;\n}\n\n.navbar-nav-list .nav-item .sub-nav h6 {\n  font-size: 14px;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover {\n  background: #276caa;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover .sub-nav {\n  height: auto;\n  top: 70px;\n  display: block;\n}\n\n.navbar-nav-list .nav-item.nav-dropdown-list:hover .sub-nav h6 {\n  text-transform: uppercase;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: #fff;\n}\n\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n  color: #fff;\n}\n\n.navbar-nav {\n  float: right;\n}\n\n.tele-no.email .nav-link {\n  padding: 1.5rem 5px 1.5rem 10px !important;\n}\n\n.tele-no svg {\n  fill: transparent;\n}\n\n.slider-menu {\n  width: 350px;\n  position: fixed;\n  height: calc(100vh);\n  top: 0;\n  background: #fff;\n  z-index: 20;\n  right: -350px;\n  transition: all 0.5s;\n  padding-bottom: 50px;\n}\n\n.slider-menu .slider-footer-contact {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  border-top: 1px solid #ccc;\n  padding: 5px 5px 5px 10px;\n}\n\n.slider-menu .slider-footer-contact a {\n  float: left;\n  font-size: 14px;\n  color: #555555;\n}\n\n.slider-menu .slider-footer-contact a svg {\n  margin-right: 5px;\n  fill: #276caa;\n  width: 20px;\n  height: 20px;\n}\n\n.slider-menu .slider-menu-header {\n  padding: 10px;\n}\n\n.slider-menu .close-slide {\n  float: right;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.slider-menu .close-slide svg {\n  width: 30px;\n  height: 30px;\n}\n\n.slider-menu.active {\n  right: 0px;\n}\n\n.slider-menu ul {\n  margin: 0;\n  padding: 0;\n  overflow-y: auto;\n  height: calc(100vh - 203px);\n}\n\n.slider-menu ul::-webkit-scrollbar {\n  width: 0.5em;\n}\n\n.slider-menu ul::-webkit-scrollbar-track {\n  background: rgba(194, 194, 194, 0.3);\n}\n\n.slider-menu ul::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n\n.slider-menu li.menu-list {\n  list-style-type: none;\n  border-bottom: 1px dotted #af9090;\n  position: relative;\n}\n\n.slider-menu li.menu-list::after {\n  content: \"\";\n  width: 0;\n  height: 3px;\n  display: block;\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  background-color: #276caa;\n  transition: width 0.2s;\n}\n\n.slider-menu li.menu-list:hover::after {\n  width: 100%;\n}\n\n.slider-menu li.menu-list a {\n  padding: 8px 25px;\n  font-size: 14px;\n  color: #555555;\n  display: block;\n  text-transform: capitalize;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.slider-menu li.menu-list a.active {\n  color: #276caa;\n}\n\n.slider-menu li.menu-list a:hover {\n  color: #276caa;\n}\n\n.slider-menu .navbar-brand {\n  margin: 10px 0 10px 10px;\n}\n\n.slider-menu .navbar-brand span.company-name {\n  color: #276caa;\n  font-size: 35px;\n  line-height: 30px;\n}\n\n.slider-menu .navbar-brand span.company-type {\n  color: #000;\n  font-size: 21px;\n  line-height: 15px;\n  margin-top: 5px;\n}\n\n.slider-menu .navbar-brand svg {\n  width: 50px;\n  height: 50px;\n}\n\n.overlay {\n  display: none;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  width: 100%;\n  height: calc(100vh);\n  top: 0;\n}\n\n.overlay.active {\n  display: block;\n  z-index: 10;\n}\n\n.contactUs svg {\n  fill: transparent;\n}\n\n@media (max-width: 576px) {\n  .navbar-nav-list .nav-item:not(:last-child) {\n    display: none;\n  }\n}\n\n@media (max-width: 1024px) {\n  .company-info, .tele-no {\n    display: none;\n  }\n\n  .navbar-nav-list .nav-item:nth-child(4) {\n    margin-left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxtREFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQVI7O0FES087RUFDSyxXQUFBO0FDRlo7O0FESVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0ZaOztBRElRO0VBQ0ksaUJBQUE7QUNGWjs7QURHWTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDRGhCOztBREVnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQXBCOztBREVnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBcEI7O0FETUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FESUk7RUFDSSxlQUFBO0VBa0JBLFdBQUE7QUNuQlI7O0FERVE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNBWjs7QURFUTtFQUNJLGlCQUFBO0FDQVo7O0FER1k7RUFDSSxrQkFBQTtBQ0RoQjs7QURHWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RoQjs7QURLUTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQ0haOztBRElZO0VBQ0ksY0FBQTtBQ0ZoQjs7QURLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNIWjs7QURNUztFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNKYjs7QURLYTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNIakI7O0FET2lCO0VBQ0csMkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDTHBCOztBRE9nQjtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNMcEI7O0FEUWE7RUFDRyxnQkFBQTtFQUNBLFdBQUE7QUNOaEI7O0FEU2E7RUFDSSxlQUFBO0FDUGpCOztBRFdpQjtFQUNBLG1CQUFBO0FDVGpCOztBRFVpQjtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ1JuQjs7QURTbUI7RUFDSSx5QkFBQTtBQ1B2Qjs7QURlQTtFQUNJLFdBQUE7QUNaSjs7QURjQTtFQUNJLFdBQUE7QUNYSjs7QURhQTtFQUNJLFlBQUE7QUNWSjs7QURnQlE7RUFDQywwQ0FBQTtBQ2JUOztBRGdCSTtFQUNJLGlCQUFBO0FDZFI7O0FEa0JBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ2ZKOztBRGdCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ2RSOztBRGVRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDYlo7O0FEY1k7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1poQjs7QURnQkk7RUFDSSxhQUFBO0FDZFI7O0FEZ0JJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ2RSOztBRGVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNiWjs7QURnQkk7RUFDSSxVQUFBO0FDZFI7O0FEZ0JJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDZFI7O0FEZVE7RUFDSSxZQUFBO0FDYlo7O0FEZ0JRO0VBQ0csb0NBQUE7QUNkWDs7QURpQlE7RUFDRSwwQkFBQTtFQUNBLDRCQUFBO0FDZlY7O0FEa0JJO0VBQ0kscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDaEJSOztBRGlCUTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ2ZaOztBRG1CZ0I7RUFDQyxXQUFBO0FDakJqQjs7QURxQlE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ25CUjs7QURvQlE7RUFDSSxjQUFBO0FDbEJaOztBRG9CUTtFQUNHLGNBQUE7QUNsQlg7O0FEc0JJO0VBQ0ksd0JBQUE7QUNwQlI7O0FEc0JhO0VBQ0csY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3BCaEI7O0FEc0JZO0VBQ0csV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNwQmY7O0FEdUJRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNyQlo7O0FEMkJBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7QUN4Qko7O0FEeUJJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUN2QlI7O0FEMkJJO0VBQ0ksaUJBQUE7QUN4QlI7O0FEOEJBO0VBR1c7SUFDSyxhQUFBO0VDN0JkO0FBQ0Y7O0FEa0NBO0VBQ0k7SUFDSSxhQUFBO0VDaENOOztFRG9DVTtJQUNJLGlCQUFBO0VDakNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgICAmLmJnLWxpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE4LCA4MCwgMTI4LCAwLjkpICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICB0b3A6MDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgcGFkZGluZzowO1xuICAgIH1cbiAgIFxufVxuLm5hdmJhci1icmFuZHtcbiAgICAgICBpLCBkaXYge1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgfVxuICAgICAgICBzdmd7XG4gICAgICAgICAgICB3aWR0aDo0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgICYuY29tcGFueS1uYW1le1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjVweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuY29tcGFueS10eXBle1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTJweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG5cbi5uYXZiYXItbmF2LWxpc3R7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAubmF2LWl0ZW17XG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAmOm50aC1jaGlsZCgtbis0KXtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDUpe1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NTBweDtcbiAgICAgICAgfVxuICAgICAgICAmLnF1aWNrLWxpbmt7XG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Zne1xuICAgICAgICAgICAgICAgIGZpbGw6I2ZmZjtcbiAgICAgICAgICAgICAgICB3aWR0aDozMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgcGFkZGluZzoxLjVyZW0gMXJlbTtcbiAgICAgICAgICAgICYuYWN0aXZlLCAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGNvbG9yOiNlYWIxMTk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3Zne1xuICAgICAgICAgICAgd2lkdGg6MjRweDtcbiAgICAgICAgICAgIGhlaWdodDoyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcbiAgICAgICAgIH1cblxuICAgICAgICAgLnN1Yi1uYXZ7XG4gICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgIGJvcmRlci10b3A6NXB4IHNvbGlkICMyNzZjYWE7XG4gICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzI3NmNhYTtcbiAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgdG9wOi0xNTVweDtcbiAgICAgICAgICAgICBsZWZ0OjBweDtcbiAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgIGhlaWdodDowcHg7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xuICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgICAgICAgcGFkZGluZzozMHB4IDA7XG4gICAgICAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICAgJi5pbm5lci1saXN0e1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOjFweCBkb3R0ZWQgI2NjYztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyNzZjYWE7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDsgIFxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICBoNntcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAmLm5hdi1kcm9wZG93bi1saXN0e1xuICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMjc2Y2FhO1xuICAgICAgICAgICAgICAgICAuc3ViLW5hdntcbiAgICAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcbiAgICAgICAgICAgICAgICAgICB0b3A6NzBweDtcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICBoNntcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgIH1cbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmt7XG4gICAgY29sb3I6I2ZmZjtcbn1cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlcntcbiAgICBjb2xvcjojZmZmO1xufVxuLm5hdmJhci1uYXZ7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cblxuLnRlbGUtbm97XG4gICAgJi5lbWFpbHtcbiAgICAgICAgLm5hdi1saW5re1xuICAgICAgICAgcGFkZGluZzoxLjVyZW0gNXB4IDEuNXJlbSAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgIH1cbiAgICBzdmd7XG4gICAgICAgIGZpbGw6dHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG4uc2xpZGVyLW1lbnV7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHJpZ2h0OiAtMzUwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICBwYWRkaW5nLWJvdHRvbTo1MHB4O1xuICAgIC5zbGlkZXItZm9vdGVyLWNvbnRhY3R7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICAgICAgICBhe1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgICAgY29sb3I6IzU1NTU1NTtcbiAgICAgICAgICAgIHN2Z3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NXB4O1xuICAgICAgICAgICAgICAgIGZpbGw6IzI3NmNhYTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNsaWRlci1tZW51LWhlYWRlcntcbiAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgIH1cbiAgICAuY2xvc2Utc2xpZGV7XG4gICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBzdmd7XG4gICAgICAgICAgICB3aWR0aDozMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5hY3RpdmV7XG4gICAgICAgIHJpZ2h0OjBweDtcbiAgICB9XG4gICAgdWx7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwM3B4KTtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgd2lkdGg6IC41ZW07XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgICAgIGJhY2tncm91bmQ6cmdiKDE5NCwgMTk0LCAxOTQsIC4zKTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbiAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGxpLm1lbnUtbGlzdHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNhZjkwOTA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJjo6YWZ0ZXJ7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtM3B4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xuICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBhe1xuICAgICAgICBwYWRkaW5nOiA4cHggMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjojNTU1NTU1O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAmLmFjdGl2ZXtcbiAgICAgICAgICAgIGNvbG9yOiMyNzZjYWE7ICAgXG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgY29sb3I6IzI3NmNhYTsgICBcbiAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG4gICAgLm5hdmJhci1icmFuZHtcbiAgICAgICAgbWFyZ2luOjEwcHggMCAxMHB4IDEwcHg7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICAgJi5jb21wYW55LW5hbWV7XG4gICAgICAgICAgICAgICAgY29sb3I6IzI3NmNhYTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmNvbXBhbnktdHlwZXtcbiAgICAgICAgICAgICAgIGNvbG9yOiMwMDA7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgc3Zne1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLm92ZXJsYXl7XG4gICAgZGlzcGxheTpub25lO1xuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICAgIHRvcDowO1xuICAgICYuYWN0aXZle1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICB6LWluZGV4OjEwO1xuICAgIH1cbn1cbi5jb250YWN0VXN7XG4gICAgc3Zne1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xuICAgIC5uYXZiYXItbmF2LWxpc3R7XG4gICAgICAgIC5uYXYtaXRlbXtcbiAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgLmNvbXBhbnktaW5mbywgLnRlbGUtbm97XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gICAgLm5hdmJhci1uYXYtbGlzdHsgXG4gICAgICAgIC5uYXYtaXRlbXtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDQpe1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgICAgICAgICB9XG4gICAgfX1cbiAgIFxufSIsIm5hdi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDgwLCAxMjgsIDAuOSkgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubmF2YmFyLWJyYW5kIGksIC5uYXZiYXItYnJhbmQgZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyLWJyYW5kIHN2ZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ubmF2YmFyLWJyYW5kIGRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm5hdmJhci1icmFuZCBkaXYgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXZiYXItYnJhbmQgZGl2IHNwYW4uY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubmF2YmFyLWJyYW5kIGRpdiBzcGFuLmNvbXBhbnktdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLm5hdmJhci1uYXYtbGlzdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtOm50aC1jaGlsZCgtbis0KSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtOm50aC1jaGlsZCg1KSB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ucXVpY2stbGluayBhIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0ucXVpY2stbGluayBzdmcge1xuICBmaWxsOiAjZmZmO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIGEuYWN0aXZlLCAubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSBhOmhvdmVyIHtcbiAgY29sb3I6ICNlYWIxMTk7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgIzI3NmNhYTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzZjYWE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTU1cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgcGFkZGluZzogMzBweCAwO1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtIC5zdWItbmF2IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gLnN1Yi1uYXYgbGkuaW5uZXItbGlzdCB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI2NjYztcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbSAuc3ViLW5hdiBsaSBhIHtcbiAgY29sb3I6ICMyNzZjYWE7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gLnN1Yi1uYXYgYSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW0gLnN1Yi1uYXYgaDYge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbS5uYXYtZHJvcGRvd24tbGlzdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyNzZjYWE7XG59XG4ubmF2YmFyLW5hdi1saXN0IC5uYXYtaXRlbS5uYXYtZHJvcGRvd24tbGlzdDpob3ZlciAuc3ViLW5hdiB7XG4gIGhlaWdodDogYXV0bztcbiAgdG9wOiA3MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtLm5hdi1kcm9wZG93bi1saXN0OmhvdmVyIC5zdWItbmF2IGg2IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMsIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItbmF2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udGVsZS1uby5lbWFpbCAubmF2LWxpbmsge1xuICBwYWRkaW5nOiAxLjVyZW0gNXB4IDEuNXJlbSAxMHB4ICFpbXBvcnRhbnQ7XG59XG4udGVsZS1ubyBzdmcge1xuICBmaWxsOiB0cmFuc3BhcmVudDtcbn1cblxuLnNsaWRlci1tZW51IHtcbiAgd2lkdGg6IDM1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogY2FsYygxMDB2aCk7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogMjA7XG4gIHJpZ2h0OiAtMzUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5zbGlkZXItbWVudSAuc2xpZGVyLWZvb3Rlci1jb250YWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG59XG4uc2xpZGVyLW1lbnUgLnNsaWRlci1mb290ZXItY29udGFjdCBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1NTU1NTU7XG59XG4uc2xpZGVyLW1lbnUgLnNsaWRlci1mb290ZXItY29udGFjdCBhIHN2ZyB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmaWxsOiAjMjc2Y2FhO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLnNsaWRlci1tZW51IC5zbGlkZXItbWVudS1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNsaWRlci1tZW51IC5jbG9zZS1zbGlkZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zbGlkZXItbWVudSAuY2xvc2Utc2xpZGUgc3ZnIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5zbGlkZXItbWVudS5hY3RpdmUge1xuICByaWdodDogMHB4O1xufVxuLnNsaWRlci1tZW51IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDNweCk7XG59XG4uc2xpZGVyLW1lbnUgdWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDAuNWVtO1xufVxuLnNsaWRlci1tZW51IHVsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTk0LCAxOTQsIDE5NCwgMC4zKTtcbn1cbi5zbGlkZXItbWVudSB1bDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcbn1cbi5zbGlkZXItbWVudSBsaS5tZW51LWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2FmOTA5MDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNsaWRlci1tZW51IGxpLm1lbnUtbGlzdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTNweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NmNhYTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcbn1cbi5zbGlkZXItbWVudSBsaS5tZW51LWxpc3Q6aG92ZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2xpZGVyLW1lbnUgbGkubWVudS1saXN0IGEge1xuICBwYWRkaW5nOiA4cHggMjVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNsaWRlci1tZW51IGxpLm1lbnUtbGlzdCBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMjc2Y2FhO1xufVxuLnNsaWRlci1tZW51IGxpLm1lbnUtbGlzdCBhOmhvdmVyIHtcbiAgY29sb3I6ICMyNzZjYWE7XG59XG4uc2xpZGVyLW1lbnUgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMTBweDtcbn1cbi5zbGlkZXItbWVudSAubmF2YmFyLWJyYW5kIHNwYW4uY29tcGFueS1uYW1lIHtcbiAgY29sb3I6ICMyNzZjYWE7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2xpZGVyLW1lbnUgLm5hdmJhci1icmFuZCBzcGFuLmNvbXBhbnktdHlwZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2xpZGVyLW1lbnUgLm5hdmJhci1icmFuZCBzdmcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgdG9wOiAwO1xufVxuLm92ZXJsYXkuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY29udGFjdFVzIHN2ZyB7XG4gIGZpbGw6IHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm5hdmJhci1uYXYtbGlzdCAubmF2LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY29tcGFueS1pbmZvLCAudGVsZS1ubyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5uYXZiYXItbmF2LWxpc3QgLm5hdi1pdGVtOm50aC1jaGlsZCg0KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(sharedservice) {
        this.sharedservice = sharedservice;
        this.isOpen = true;
        this.isSlideOpen = true;
        this.list = [
            { name: 'AboutArkedge' },
            { name: 'OurHappyClients' },
            { name: 'NewsAndEventUpdate' },
            { name: 'TestimonialClientSpeaks' },
            { name: 'Industries' },
            { name: 'Technology' },
            { name: 'Career' },
            { name: 'Sitemap' }
        ];
        this.managedService = [
            { name: 'SoftwareEngineering',
                managedServiceList: [
                    { name: 'ProductEngineering' },
                    { name: 'ApplicationDevelopment' },
                    { name: 'Ux/UiDevelopment' },
                    { name: 'SoftwareTesting & Qa' }
                ] },
            { name: 'DataServices',
                managedServiceList: [
                    { name: 'DataEngineering' },
                    { name: 'DataManagement' },
                    { name: 'DataScience' },
                    { name: 'CloudComputing' },
                ] },
            { name: 'ItStafingAndServices',
                managedServiceList: [
                    { name: 'StaffingServices' },
                    { name: 'StaffingIndustry' },
                    { name: 'It Training' },
                    { name: 'ProgramSchedule' }
                ] }
        ];
    }
    slideToggel() {
        const body = document.getElementsByTagName('body')[0];
        this.isOpen = !this.isOpen;
        if (!this.isOpen) {
            body.classList.add('remove-scroll');
        }
        else {
            body.classList.remove('remove-scroll');
        }
    }
    ngOnInit() {
    }
    changeStyle() {
        this.dropDown.nativeElement.hidden = false;
    }
    getUrl(i, title) {
        this.dropDown.nativeElement.hidden = true;
        this.sharedservice.nextMessage(i, title);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dropDown", { static: true })
], HeaderComponent.prototype, "dropDown", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .main-banner .carousel {\n  margin-top: -60px;\n  z-index: 1;\n}\n::ng-deep .main-banner .container {\n  position: relative;\n  height: 800px;\n  overflow: hidden;\n}\n::ng-deep .main-banner .carousel-item {\n  display: block;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption {\n  top: 50%;\n  left: -100%;\n  z-index: 10;\n  color: #fff;\n  text-align: left;\n  width: 750px;\n  transform: translateY(-50%);\n  transition: all 1s;\n  opacity: 0;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption h1 {\n  color: #FFC100;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n  font-size: 38px;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption .btn {\n  border: 2px solid #fff;\n  margin-right: 15px;\n  margin-top: 50px;\n}\n::ng-deep .main-banner .carousel-item .carousel-caption h3 {\n  color: #fff;\n}\n::ng-deep .main-banner .carousel-item .info-img {\n  position: absolute;\n  right: -100%;\n  top: 55%;\n  transform: translateY(-55%);\n  z-index: 1;\n  transition: all 1s;\n  opacity: 0;\n  width: 450px;\n  height: 450px;\n}\n::ng-deep .main-banner .carousel-item .info-img .icon-big svg {\n  width: 550px;\n  height: 550px;\n}\n::ng-deep .main-banner .carousel-item.active .carousel-caption {\n  left: 15px;\n  opacity: 0.9;\n}\n::ng-deep .main-banner .carousel-item.active .info-img {\n  right: 15px;\n  opacity: 0.9;\n}\n::ng-deep .main-banner .carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n::ng-deep .main-banner .picsum-img-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n::ng-deep .main-banner .picsum-img-wrapper::after {\n  content: \"\";\n  background: rgba(16, 80, 128, 0.9);\n  width: 100%;\n  height: 100%;\n  opacity: 0.9;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n::ng-deep .main-banner .picsum-img-wrapper img {\n  width: 100%;\n}\nngb-carousel {\n  outline: none;\n}\n.section-short-info {\n  background: #14336e;\n  padding: 25px 0;\n}\n.section-short-info p {\n  margin: 0px;\n  color: #fff;\n}\n.section-short-info .col {\n  border-right: 1px solid rgba(255, 255, 255, 0.5);\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.section-short-info .col:last-child {\n  border-right: none;\n}\n.cookies-setting {\n  position: fixed;\n  background: rgba(5, 27, 72, 0.7);\n  bottom: 0;\n  left: 0;\n  padding: 10px 0;\n}\n.cookies-setting p {\n  color: #fff;\n  margin: 0;\n}\n.cookies-setting.hide {\n  display: none;\n}\n.panel-heading, .panel-body {\n  border: none;\n  text-align: center;\n}\n.clients, .section-projects, .section-sevices, .testimonials, .section-info, .contact-info {\n  padding: 70px 0;\n}\n.clients {\n  background-color: #f7f7f7;\n}\n.clients h6 {\n  margin-bottom: 50px;\n}\n.clear-float {\n  clear: both;\n  float: none;\n}\n.contact-info .social-net ul {\n  padding: 0;\n  margin: 0;\n}\n.contact-info .social-net ul li {\n  list-style-type: none;\n  margin-bottom: 10px;\n}\n.contact-info .social-net ul li span {\n  margin-left: 15px;\n  color: #555555;\n}\n.contact-info .social-net ul li svg {\n  width: 20px;\n  height: 20px;\n}\n.contact-info .set-part {\n  margin: 40px 0;\n}\n.contact-info h6 {\n  color: #555;\n  font-weight: bold;\n}\n.contact-info form {\n  margin-top: 42px;\n}\n.contact-info form .btn {\n  margin-top: 0px;\n}\n.contact-info .email-link {\n  color: #276caa;\n}\n.icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.icon-circle i {\n  line-height: 90px;\n}\n.section-info .panel-container {\n  min-height: 330px;\n  margin-bottom: 15px;\n  perspective: 1000px;\n  overflow: hidden;\n}\n.section-info .panel-container:hover .panel {\n  transform: rotateX(180deg);\n}\n.section-info .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 1s ease;\n  transform-style: preserve-3d;\n  cursor: pointer;\n}\n.section-info .panel .panel-front {\n  border-top: 5px solid;\n  padding-top: 25px;\n  z-index: 1;\n}\n.section-info .panel .panel-front::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n.section-info .panel .panel-front.red {\n  background: url('1.jpg') no-repeat top center;\n  border-color: #b9646e;\n}\n.section-info .panel .panel-front.red p {\n  color: #fff;\n}\n.section-info .panel .panel-front.red .circle-bg {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-front.blue {\n  background: url('2.jpg') no-repeat top center;\n  border-color: #276caa;\n}\n.section-info .panel .panel-front.blue .circle-bg {\n  background-color: #276caa;\n}\n.section-info .panel .panel-front.green {\n  background: url('3.jpg') no-repeat top center;\n  border-color: #4bbb57;\n}\n.section-info .panel .panel-front.green .circle-bg {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-back {\n  padding-top: 25px;\n}\n.section-info .panel .panel-back.red {\n  background-color: #b9646e;\n}\n.section-info .panel .panel-back.red p {\n  color: #fff;\n}\n.section-info .panel .panel-back.blue {\n  background-color: #276caa;\n}\n.section-info .panel .panel-back.green {\n  background-color: #4bbb57;\n}\n.section-info .panel .panel-front, .section-info .panel .panel-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.section-info .panel .panel-back {\n  transform: rotateX(180deg);\n}\n.section-info .panel .panel-back p {\n  padding: 25px;\n}\n.section-info .panel h5 {\n  margin: 20px 0;\n  color: #fff;\n}\n.section-info .panel p {\n  margin: 0;\n}\n.section-info h6 {\n  margin-bottom: 40px;\n}\n.section-info svg {\n  fill: #fff;\n}\n.section-sevices {\n  background-color: rgba(204, 204, 204, 0.2);\n}\n.section-sevices .panel {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  padding: 15px 0;\n}\n.section-sevices .panel h5 {\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n.section-sevices .panel p {\n  padding: 0 20px;\n}\n.section-sevices .panel .icon-circle {\n  margin: 15px auto;\n}\n.section-sevices .panel .icon-circle svg {\n  height: 80px;\n  width: 80px;\n}\n.section-sevices .panel .icon-circle.skyblue {\n  background: #88cedb;\n}\n.section-sevices .panel .icon-circle.limegreen {\n  background: #78c29a;\n}\n.section-sevices .panel .icon-circle.yellow {\n  background: #f1bb57;\n}\n.section-sevices .panel .icon-circle.orange {\n  background: #e97f61;\n}\n.section-sevices .panel .icon-circle.blue {\n  background: #88cedb;\n}\n.section-sevices .panel .icon-circle.purple {\n  background: #787fc2;\n}\n.section-sevices h6 {\n  margin-bottom: 40px;\n}\n::ng-deep .testimonials {\n  position: relative;\n  overflow: hidden;\n}\n::ng-deep .testimonials img {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n::ng-deep .testimonials h1 {\n  color: #fff;\n  margin-bottom: 20px;\n}\n::ng-deep .testimonials p {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 5px;\n}\n::ng-deep .testimonials p:last-child {\n  margin-top: 35px;\n}\n::ng-deep .testimonials .carousel {\n  margin-top: 0;\n  z-index: 1;\n}\n::ng-deep .testimonials .carousel-inner {\n  height: 282px;\n}\n::ng-deep .testimonials .carousel-indicators li {\n  height: 10px;\n  border-radius: 10px;\n  border: 1px solid #fff;\n  background: transparent;\n}\n::ng-deep .testimonials .carousel-indicators li.active {\n  background: #fff;\n}\n::ng-deep .testimonials .carousel-item {\n  transition: opacity 1s ease !important;\n  position: absolute !important;\n  display: block !important;\n  opacity: 0;\n}\n::ng-deep .testimonials .carousel-item.active {\n  position: relative !important;\n  opacity: 1;\n}\n.section-projects {\n  position: relative;\n  float: left;\n  width: 100%;\n}\n.section-projects h6 {\n  margin: 35px 0 40px;\n}\n.section-projects .project-grid li {\n  width: 25%;\n  float: left;\n  list-style-type: none;\n}\n.section-projects .project-grid li figure {\n  margin: 0 0 2px 0;\n}\n.section-projects .project-grid li:first-child {\n  width: 50%;\n}\n.section-projects .project-grid li:first-child figure {\n  margin: 0;\n}\n.section-projects .project-grid li:nth-child(4) figure, .section-projects .project-grid li:nth-child(5) figure {\n  margin: 0;\n}\n.section-projects .project-grid button {\n  background: none;\n  border: 2px solid #fff;\n}\n.section-projects .p1 {\n  padding: 1px;\n}\n.section-projects figure {\n  position: relative;\n  float: left;\n  overflow: hidden;\n  width: calc(100% - 2px);\n  background-color: #fff;\n  margin: 0;\n  cursor: pointer;\n}\n.section-projects figure img {\n  position: relative;\n  display: block;\n  transform: scale(1);\n  transition: 0.5s ease-in-out;\n  max-width: 100%;\n  height: auto;\n}\n.section-projects figure .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 23%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 68%, rgba(0, 0, 0, 0) 81%, rgba(0, 0, 0, 0) 92%, rgba(0, 0, 0, 0) 100%) repeat scroll 0 0;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translateY(100%);\n  transition: all 0.5s ease 0s;\n}\n.section-projects figure figcaption {\n  webkit-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0px;\n  left: 20px;\n  right: 20px;\n  max-height: 40px;\n  transition: 0.5s ease-in-out;\n  z-index: 2;\n}\n.section-projects figure .show_more-title {\n  color: #fff;\n  font-size: 21px;\n  line-height: 30px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.section-projects figure .show_more-desc {\n  color: #fff;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 300;\n}\n.section-projects figure::after {\n  content: \"\";\n  background: rgba(0, 0, 0, 0.3);\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.section-projects figure:hover img {\n  transform: scale(1.1);\n}\n.section-projects figure:hover .show-more-overlay {\n  background: rgba(0, 0, 0, 0) linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 100%) repeat scroll 0 0;\n  transform: translateY(0px);\n}\n.section-projects figure:hover figcaption {\n  height: auto;\n  max-height: 200px;\n  bottom: 50px;\n}\n.section-our-products {\n  padding: 0 0 70px;\n}\n.section-our-products .panel {\n  padding: 0 15px;\n  margin-bottom: 15px;\n  background: rgba(204, 204, 204, 0.2);\n}\n.section-our-products .panel h5 {\n  font-weight: bold;\n}\n.section-our-products .panel .row div:first-child {\n  background: #276caa;\n  padding: 0px;\n}\n.section-our-products .panel .row div img {\n  align-self: center;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.section-our-products .panel .row div:nth-child(2) {\n  padding: 25px;\n}\n.section-our-products .panel .row div:nth-child(2) ul {\n  margin-bottom: 20px;\n}\n.section-our-products .panel .row div:nth-child(2) ul li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n.section-our-products .panel .row div:nth-child(2) ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n@media (max-width: 576px) {\n  .main-banner {\n    display: none;\n  }\n\n  .section-projects .project-grid li {\n    width: 100%;\n  }\n  .section-projects .project-grid li figure {\n    margin: 0 0 15px;\n  }\n  .section-projects .project-grid li:first-child {\n    width: 100%;\n  }\n  .section-projects .project-grid li:first-child figure {\n    margin: 0 0 15px;\n  }\n  .section-projects .project-grid li:nth-child(4) figure, .section-projects .project-grid li:nth-child(5) figure {\n    margin-bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsaUJBQUE7RUFDQSxVQUFBO0FDQUY7QURFQztFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQUY7QURFQztFQUNDLGNBQUE7QUNBRjtBRENDO0VBQ0MsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7QURBRTtFQUNDLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNFSDtBREFFO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtFQUNHLGdCQUFBO0FDRU47QURBRTtFQUNDLFdBQUE7QUNFSDtBRENDO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDQ0g7QURJRTtFQUNDLFVBQUE7RUFDQSxZQUFBO0FDRkg7QURJRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDRkg7QURPRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMSDtBRFFDO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTkY7QURRRTtFQUNDLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUNOSDtBRFFFO0VBQ0MsV0FBQTtBQ05IO0FEWUE7RUFDQyxhQUFBO0FDVEQ7QURZQTtFQUNDLG1CQUFBO0VBQ0EsZUFBQTtBQ1REO0FEVUM7RUFDQyxXQUFBO0VBQ0EsV0FBQTtBQ1JGO0FEVUM7RUFDQyxnREFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNSRjtBRFNFO0VBQ0Msa0JBQUE7QUNQSDtBRFlBO0VBQ0MsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FDVEQ7QURVQztFQUNDLFdBQUE7RUFDQSxTQUFBO0FDUkY7QURVQztFQUNDLGFBQUE7QUNSRjtBRFlBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FDVEQ7QURZQTtFQUNDLGVBQUE7QUNURDtBRFlBO0VBQ0MseUJBQUE7QUNURDtBRFVDO0VBQ0MsbUJBQUE7QUNSRjtBRFlBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNURDtBRGNFO0VBQ0MsVUFBQTtFQUNBLFNBQUE7QUNYSDtBRFlHO0VBQ0MscUJBQUE7RUFDQSxtQkFBQTtBQ1ZKO0FEV0c7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNUTDtBRFdJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNUTDtBRGVDO0VBQ0UsY0FBQTtBQ2JIO0FEZ0JDO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0FDZEY7QURnQkM7RUFDQyxnQkFBQTtBQ2RGO0FEZUU7RUFDQyxlQUFBO0FDYkg7QURnQkM7RUFDQyxjQUFBO0FDZEY7QURzQkE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ25CRDtBRG9CQztFQUNDLGlCQUFBO0FDbEJGO0FEd0JDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QURzQkU7RUFDQywwQkFBQTtBQ3BCSDtBRHVCQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ3JCRjtBRHNCRTtFQUNDLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDcEJIO0FEcUJHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ25CSjtBRHFCRztFQUlDLDZDQUFBO0VBQ0EscUJBckRDO0FDK0JMO0FEa0JJO0VBQ0MsV0FBQTtBQ2hCTDtBRG9CSTtFQUNDLHlCQXZEQTtBQ3FDTDtBRHNCRztFQUNDLDZDQUFBO0VBQ0EscUJBNURFO0FDd0NOO0FEcUJJO0VBQ0MseUJBOURDO0FDMkNOO0FEdUJHO0VBQ0MsNkNBQUE7RUFDQSxxQkFuRUc7QUM4Q1A7QURzQkk7RUFDQyx5QkFyRUU7QUNpRFA7QUR5QkU7RUFDQyxpQkFBQTtBQ3ZCSDtBRHdCRztFQUNDLHlCQS9FQztBQ3lETDtBRHVCSTtFQUNDLFdBQUE7QUNyQkw7QUR5Qkc7RUFDQyx5QkFyRkU7QUM4RE47QUQwQkc7RUFDQyx5QkF4Rkc7QUNnRVA7QUQ0QkU7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQzFCSDtBRDRCRTtFQUVDLDBCQUFBO0FDM0JIO0FENEJHO0VBQ0MsYUFBQTtBQzFCSjtBRDZCRTtFQUNDLGNBQUE7RUFDQSxXQUFBO0FDM0JIO0FENkJFO0VBQ0MsU0FBQTtBQzNCSDtBRCtCQztFQUNDLG1CQUFBO0FDN0JGO0FEZ0NDO0VBQ0MsVUFBQTtBQzlCRjtBRHlDQTtFQUNDLDBDQUFBO0FDdENEO0FEdUNDO0VBQ0MsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDckNGO0FEc0NFO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNwQ0g7QUR1Q0U7RUFDQyxlQUFBO0FDckNIO0FEdUNFO0VBQ0MsaUJBQUE7QUNyQ0g7QURzQ0c7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQ3BDSjtBRHNDRztFQUNDLG1CQS9CSztBQ0xUO0FEc0NHO0VBQ0MsbUJBL0JPO0FDTFg7QURzQ0c7RUFDQyxtQkFwQ0k7QUNBUjtBRHNDRztFQUNDLG1CQXRDSTtBQ0VSO0FEc0NHO0VBQ0MsbUJBdkNFO0FDR047QURzQ0c7RUFDQyxtQkF6Q0k7QUNLUjtBRHlDQztFQUNDLG1CQUFBO0FDdkNGO0FEMkNBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQ3hDRDtBRHlDQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDdkNGO0FEeUNDO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0FDdkNGO0FEeUNDO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDdkNGO0FEd0NFO0VBQ0MsZ0JBQUE7QUN0Q0g7QUR5Q0M7RUFDQyxhQUFBO0VBQ0EsVUFBQTtBQ3ZDRjtBRHlDQztFQUNDLGFBQUE7QUN2Q0Y7QUR5Q0M7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDdkNGO0FEd0NFO0VBQ0MsZ0JBQUE7QUN0Q0g7QUR5Q0M7RUFDQyxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDdkNGO0FEd0NFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FDdENKO0FEMkNBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ3hDRDtBRHlDQztFQUNDLG1CQUFBO0FDdkNGO0FEMENFO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ3hDSDtBRHlDRztFQUNDLGlCQUFBO0FDdkNKO0FEeUNHO0VBQ0MsVUFBQTtBQ3ZDSjtBRHdDSTtFQUNDLFNBQUE7QUN0Q0w7QUQwQ0k7RUFDQyxTQUFBO0FDeENMO0FENENFO0VBQ0MsZ0JBQUE7RUFDQSxzQkFBQTtBQzFDSDtBRDZDQztFQUNDLFlBQUE7QUMzQ0Y7QUQ2Q0M7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQzNDRjtBRDRDRTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLG1CQUFBO0VBRUEsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQzFDSDtBRDRDRTtFQUNDLHFOQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQzFDSDtBRDZDRTtFQUNDLGtDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSw0QkFBQTtFQUNBLFVBQUE7QUMzQ0g7QUQ2Q0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzNDSDtBRDZDRTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzNDSDtBRDZDRTtFQUNDLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUMzQ0g7QUQ4Q0c7RUFFQyxxQkFBQTtBQzVDSjtBRDhDRztFQUVDLHVHQUFBO0VBQ0EsMEJBQUE7QUM3Q0o7QUQrQ0c7RUFFQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDOUNKO0FEcURBO0VBQ0MsaUJBQUE7QUNsREQ7QURtREM7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQ2pERjtBRGtERTtFQUNDLGlCQUFBO0FDaERIO0FEb0RJO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0FDbERMO0FEb0RJO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNsREw7QURvREk7RUFDQyxhQUFBO0FDbERMO0FEbURLO0VBQ0MsbUJBQUE7QUNqRE47QURrRE07RUFDQyxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNoRFA7QURpRE87RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUMvQ1I7QUQ2REE7RUFDQztJQUNDLGFBQUE7RUMxREE7O0VEOERBO0lBQ0MsV0FBQTtFQzNERDtFRDREQztJQUNDLGdCQUFBO0VDMURGO0VENERDO0lBQ0MsV0FBQTtFQzFERjtFRDJEQztJQUNDLGdCQUFBO0VDekRGO0VENkRFO0lBQ0MsbUJBQUE7RUMzREg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWFpbi1iYW5uZXJ7XG5cdC5jYXJvdXNlbHtcblx0XHRtYXJnaW4tdG9wOi02MHB4O1xuXHRcdHotaW5kZXg6MTtcblx0fVxuXHQuY29udGFpbmVye1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRoZWlnaHQ6IDgwMHB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdH1cblx0LmNhcm91c2VsLWl0ZW17XG5cdFx0ZGlzcGxheTpibG9jaztcblx0LmNhcm91c2VsLWNhcHRpb24ge1xuXHRcdHRvcDogNTAlO1xuXHRcdGxlZnQ6IC0xMDAlO1xuXHRcdHotaW5kZXg6IDEwO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0d2lkdGg6IDc1MHB4O1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMXM7XG5cdFx0b3BhY2l0eTowO1xuXHRcdGgxe1xuXHRcdFx0Y29sb3I6I0ZGQzEwMDtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRmb250LXdlaWdodDpib2xkO1xuXHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRmb250LXNpemU6MzhweDtcblx0XHR9XG5cdFx0LmJ0bntcblx0XHRcdGJvcmRlcjoycHggc29saWQgI2ZmZjtcblx0XHRcdG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBcdFx0bWFyZ2luLXRvcDogNTBweDtcblx0XHR9XG5cdFx0aDN7XG5cdFx0XHRjb2xvcjojZmZmO1xuXHRcdH1cblx0fVxuXHQuaW5mby1pbWd7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHJpZ2h0Oi0xMDAlO1xuXHRcdHRvcDo1NSU7XG5cdFx0dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTU1JSk7XG5cdFx0ei1pbmRleDoxO1xuXHRcdHRyYW5zaXRpb246IGFsbCAxcztcblx0XHRvcGFjaXR5OjA7XG5cdFx0d2lkdGg6NDUwcHg7XG5cdFx0aGVpZ2h0OjQ1MHB4O1xuXHRcdC5pY29uLWJpZ3tcblx0XHRzdmd7XG5cdFx0XHR3aWR0aDo1NTBweDtcblx0XHRcdGhlaWdodDo1NTBweDtcblx0XHR9XG5cdFx0fVxuXHR9XG5cdCYuYWN0aXZle1xuXHRcdC5jYXJvdXNlbC1jYXB0aW9ue1xuXHRcdFx0bGVmdDoxNXB4O1xuXHRcdFx0b3BhY2l0eTouOTtcblx0XHR9XG5cdFx0LmluZm8taW1ne1xuXHRcdFx0cmlnaHQ6MTVweDtcdFxuXHRcdFx0b3BhY2l0eTouOTtcblx0XHR9XG5cdH1cbn1cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcblx0XHRsaXtcblx0XHRcdHdpZHRoOiAxMHB4O1xuXHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdH1cblx0fVxuXHQucGljc3VtLWltZy13cmFwcGVye1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6MDtcblx0XHRsZWZ0OjA7XG5cdFx0aGVpZ2h0OjEwMCU7XG5cdFx0d2lkdGg6MTAwJTtcblx0XHRcblx0XHQmOjphZnRlcntcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMTYsODAsMTI4LDAuOSk7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdG9wYWNpdHk6IDAuOTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR0b3A6IDA7XG5cdFx0fVxuXHRcdGltZ3tcblx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcblx0XHR9XG5cdH1cbn1cblxubmdiLWNhcm91c2Vse1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG4uc2VjdGlvbi1zaG9ydC1pbmZve1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDIwLCA1MSwgMTEwLCAxKTtcblx0cGFkZGluZzoyNXB4IDA7XG5cdHB7XG5cdFx0bWFyZ2luOjBweDtcblx0XHRjb2xvcjojZmZmO1xuXHR9XG5cdC5jb2x7XG5cdFx0Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdFx0cGFkZGluZy10b3A6MTBweDtcblx0XHRwYWRkaW5nLWJvdHRvbToxMHB4O1xuXHRcdCY6bGFzdC1jaGlsZHtcblx0XHRcdGJvcmRlci1yaWdodDpub25lO1xuXHRcdH1cblx0fVxufVxuXG4uY29va2llcy1zZXR0aW5ne1xuXHRwb3NpdGlvbjpmaXhlZDtcblx0YmFja2dyb3VuZDogcmdiYSg1LCAyNywgNzIsIDAuNyk7XG5cdGJvdHRvbTowO1xuXHRsZWZ0OjA7XG5cdHBhZGRpbmc6MTBweCAwO1xuXHRwe1xuXHRcdGNvbG9yOiNmZmY7XG5cdFx0bWFyZ2luOjA7XG5cdH1cblx0Ji5oaWRle1xuXHRcdGRpc3BsYXk6bm9uZTtcblx0fVxufVxuXG4ucGFuZWwtaGVhZGluZywgLnBhbmVsLWJvZHkgIHtcblx0Ym9yZGVyOiBub25lO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbGllbnRzLCAuc2VjdGlvbi1wcm9qZWN0cywgLnNlY3Rpb24tc2V2aWNlcywgLnRlc3RpbW9uaWFscywgLnNlY3Rpb24taW5mbywgLmNvbnRhY3QtaW5mb3tcblx0cGFkZGluZzo3MHB4IDA7XG59XG5cbi5jbGllbnRze1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDEpO1xuXHRoNntcblx0XHRtYXJnaW4tYm90dG9tOjUwcHg7XG5cdH1cbn1cblxuLmNsZWFyLWZsb2F0e1xuXHRjbGVhcjpib3RoO1xuXHRmbG9hdDpub25lO1xufVxuXG4uY29udGFjdC1pbmZve1xuXHQuc29jaWFsLW5ldHtcblx0XHR1bHtcblx0XHRcdHBhZGRpbmc6MDtcblx0XHRcdG1hcmdpbjowO1xuXHRcdFx0bGl7XG5cdFx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbToxMHB4O1xuXHRcdFx0c3Bhbntcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDoxNXB4O1xuXHRcdFx0XHRcdGNvbG9yOiM1NTU1NTU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Zne1xuXHRcdFx0XHRcdHdpZHRoOjIwcHg7XG5cdFx0XHRcdFx0aGVpZ2h0OjIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC5zZXQtcGFydHtcblx0XHRcdG1hcmdpbjo0MHB4IDA7XG5cdFx0fVxuXHRcblx0aDZ7XG5cdFx0Y29sb3I6IzU1NTtcblx0XHRmb250LXdlaWdodDpib2xkO1xuXHR9XG5cdGZvcm17XG5cdFx0bWFyZ2luLXRvcDo0MnB4O1xuXHRcdC5idG57XG5cdFx0XHRtYXJnaW4tdG9wOjBweDtcblx0XHR9XG5cdH1cblx0LmVtYWlsLWxpbmt7XG5cdFx0Y29sb3I6IzI3NmNhYTtcblx0fVxufVxuXG4kcmVkOiNiOTY0NmU7XG4kYmx1ZTojMjc2Y2FhO1xuJGdyZWVuOiM0YmJiNTc7XG5cbi5pY29uLWNpcmNsZXtcblx0aGVpZ2h0OjkwcHg7XG5cdHdpZHRoOjkwcHg7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHRtYXJnaW46MCBhdXRvO1xuXHRpe1xuXHRcdGxpbmUtaGVpZ2h0OjkwcHg7XG5cdH1cblx0XG59XG5cbi5zZWN0aW9uLWluZm97XG5cdC5wYW5lbC1jb250YWluZXJ7XG5cdFx0bWluLWhlaWdodDogMzMwcHg7XG5cdFx0bWFyZ2luLWJvdHRvbToxNXB4O1xuXHRcdHBlcnNwZWN0aXZlOiAxMDAwcHg7XG5cdFx0b3ZlcmZsb3c6aGlkZGVuO1xuXHRcdCY6aG92ZXIgLnBhbmVse1xuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdFx0fVxuXHR9XG5cdC5wYW5lbHtcblx0XHRjb2xvcjojZmZmO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xuXHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cdFx0Y3Vyc29yOnBvaW50ZXI7XG5cdFx0LnBhbmVsLWZyb250e1xuXHRcdFx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkO1xuXHRcdFx0cGFkZGluZy10b3A6IDI1cHg7XG5cdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0Jjo6YWZ0ZXJ7XG5cdFx0XHRcdGNvbnRlbnQ6Jyc7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0aGVpZ2h0OjEwMCU7XG5cdFx0XHRcdGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0ei1pbmRleDogLTE7XG5cdFx0XHR9XG5cdFx0XHQmLnJlZHtcblx0XHRcdFx0cHtcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMS5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICRyZWQ7XG5cdFx0XHRcdC5jaXJjbGUtYmd7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokcmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdCYuYmx1ZXtcblx0XHRcdFx0YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8yLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGJsdWU7XG5cdFx0XHRcdC5jaXJjbGUtYmd7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokYmx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQmLmdyZWVue1xuXHRcdFx0XHRiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzMuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkZ3JlZW47XG5cdFx0XHRcdC5jaXJjbGUtYmd7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokZ3JlZW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQucGFuZWwtYmFja3tcblx0XHRcdHBhZGRpbmctdG9wOiAyNXB4O1xuXHRcdFx0Ji5yZWR7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6JHJlZDtcblx0XHRcdFx0cHtcblx0XHRcdFx0XHRjb2xvcjojZmZmO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdCYuYmx1ZXtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokYmx1ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ji5ncmVlbntcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjokZ3JlZW47XG5cdFx0XHR9XG5cdFx0fVxuXHRcblx0XHQucGFuZWwtZnJvbnQsIC5wYW5lbC1iYWNre1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHR9XG5cdFx0LnBhbmVsLWJhY2tcblx0XHR7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0XHRcdHB7XG5cdFx0XHRcdHBhZGRpbmc6MjVweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aDV7XG5cdFx0XHRtYXJnaW46MjBweCAwO1xuXHRcdFx0Y29sb3I6I2ZmZjtcblx0XHR9XG5cdFx0cHtcblx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XG5cdFx0fVxuXHR9XG5cdGg2e1xuXHRcdG1hcmdpbi1ib3R0b206NDBweDtcblx0fVxuXG5cdHN2Z3tcblx0XHRmaWxsOiNmZmY7XG5cdH1cbn1cblxuJHNreWJsdWU6Izg4Y2VkYjtcbiR5ZWxsb3c6I2YxYmI1NztcbiRvcmFuZ2U6I2U5N2Y2MTtcbiRsaW1lZ3JlZW46Izc4YzI5YTtcbiRibHVlOiM4OGNlZGI7XG4kcHVycGxlOiM3ODdmYzI7XG5cbi5zZWN0aW9uLXNldmljZXN7XG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpO1xuXHQucGFuZWx7XG5cdFx0YmFja2dyb3VuZDojZmZmO1xuXHRcdGJvcmRlcjoxcHggc29saWQgcmdiYSgyMjQsIDIyNCwgMjI0LCAxKTtcblx0XHRib3JkZXItcmFkaXVzOjVweDtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdHBhZGRpbmc6IDE1cHggMDtcblx0XHRoNXtcblx0XHRcdGNvbG9yOiMzMzMzMzM7XG5cdFx0XHRmb250LXdlaWdodDpib2xkO1xuXHRcdFx0bWFyZ2luLWJvdHRvbToyNXB4O1xuXHRcdH1cblx0XHRcblx0XHRwe1xuXHRcdFx0cGFkZGluZzowIDIwcHg7XG5cdFx0fVxuXHRcdC5pY29uLWNpcmNsZXtcblx0XHRcdG1hcmdpbjogMTVweCBhdXRvO1xuXHRcdFx0c3Zne1xuXHRcdFx0XHRoZWlnaHQ6ODBweDtcblx0XHRcdFx0d2lkdGg6ODBweDtcblx0XHRcdH1cblx0XHRcdCYuc2t5Ymx1ZXtcblx0XHRcdFx0YmFja2dyb3VuZDokc2t5Ymx1ZTtcblx0XHRcdH1cblx0XHRcdCYubGltZWdyZWVue1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiRsaW1lZ3JlZW47XG5cdFx0XHR9XG5cdFx0XHQmLnllbGxvd3tcblx0XHRcdFx0YmFja2dyb3VuZDokeWVsbG93O1xuXHRcdFx0fVxuXHRcdFx0Ji5vcmFuZ2V7XG5cdFx0XHRcdGJhY2tncm91bmQ6JG9yYW5nZTtcblx0XHRcdH1cblx0XHRcdCYuYmx1ZXtcblx0XHRcdFx0YmFja2dyb3VuZDokYmx1ZTtcblx0XHRcdH1cblx0XHRcdCYucHVycGxle1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiRwdXJwbGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aDZ7XG5cdFx0bWFyZ2luLWJvdHRvbTo0MHB4O1xuXHR9XG59XG5cbjo6bmctZGVlcCAudGVzdGltb25pYWxze1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0aW1ne1xuXHRcdHdpZHRoOjEwMCU7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDowO1xuXHRcdGxlZnQ6MDtcblx0fVxuXHRoMXtcblx0XHRjb2xvcjojZmZmO1xuXHRcdG1hcmdpbi1ib3R0b206MjBweDtcblx0fVxuXHRwe1xuXHRcdGZvbnQtc2l6ZToxOHB4O1xuXHRcdGZvbnQtd2VpZ2h0OjcwMDtcblx0XHRjb2xvcjojZmZmO1xuXHRcdG1hcmdpbi1ib3R0b206NXB4O1xuXHRcdCY6bGFzdC1jaGlsZHtcblx0XHRcdG1hcmdpbi10b3A6MzVweDtcblx0XHR9XG5cdH1cblx0LmNhcm91c2Vse1xuXHRcdG1hcmdpbi10b3A6MDtcblx0XHR6LWluZGV4OjE7XG5cdH1cblx0LmNhcm91c2VsLWlubmVye1xuXHRcdGhlaWdodDoyODJweDtcblx0fVxuXHQuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaXtcblx0XHRoZWlnaHQ6MTBweDtcblx0XHRib3JkZXItcmFkaXVzOjEwcHg7XG5cdFx0Ym9yZGVyOjFweCBzb2xpZCAjZmZmO1xuXHRcdGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG5cdFx0Ji5hY3RpdmV7XG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XG5cdFx0fVxuXHR9XG5cdC5jYXJvdXNlbC1pdGVtIHtcblx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgIWltcG9ydGFudDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcblx0XHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcblx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdCAgfVxuXHQgIH1cbn1cblxuLnNlY3Rpb24tcHJvamVjdHMge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZsb2F0OiBsZWZ0O1xuXHR3aWR0aDogMTAwJTtcblx0aDZ7XG5cdFx0bWFyZ2luOiAzNXB4IDAgNDBweDtcblx0fVxuXHQucHJvamVjdC1ncmlke1xuXHRcdGxpe1xuXHRcdFx0d2lkdGg6MjUlO1xuXHRcdFx0ZmxvYXQ6bGVmdDtcblx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0XHRcdGZpZ3VyZXtcblx0XHRcdFx0bWFyZ2luOjAgMCAycHggMDtcblx0XHRcdH1cblx0XHRcdCY6Zmlyc3QtY2hpbGR7XG5cdFx0XHRcdHdpZHRoOjUwJTtcblx0XHRcdFx0ZmlndXJle1xuXHRcdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQmOm50aC1jaGlsZCg0KSwgJjpudGgtY2hpbGQoNSl7XG5cdFx0XHRcdGZpZ3VyZXtcblx0XHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRidXR0b257XG5cdFx0XHRiYWNrZ3JvdW5kOm5vbmU7XG5cdFx0XHRib3JkZXI6MnB4IHNvbGlkICNmZmY7XG5cdFx0fVxuXHR9XG5cdC5wMXtcblx0XHRwYWRkaW5nOjFweDtcblx0fVxuXHRmaWd1cmUge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRmbG9hdDogbGVmdDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0bWFyZ2luOjA7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdGltZyB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcblx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHR9XG5cdFx0LnNob3ctbW9yZS1vdmVybGF5IHtcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjIpIDIzJSwgcmdiYSgwLCAwLCAwLCAwKSA0MCUsIHJnYmEoMCwgMCwgMCwgMCkgNjglLCByZ2JhKDAsIDAsIDAsIDApIDgxJSwgcmdiYSgwLCAwLCAwLCAwKSA5MiUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSkgcmVwZWF0IHNjcm9sbCAwIDA7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xuXHRcdH1cblx0XHRcblx0XHRmaWdjYXB0aW9uIHtcblx0XHRcdHdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRib3R0b206IDBweDtcblx0XHRcdGxlZnQ6IDIwcHg7XG5cdFx0XHRyaWdodDogMjBweDtcblx0XHRcdG1heC1oZWlnaHQ6IDQwcHg7XG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcblx0XHRcdHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcblx0XHRcdHotaW5kZXg6IDI7XG5cdFx0fVxuXHRcdC5zaG93X21vcmUtdGl0bGUge1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRmb250LXNpemU6IDIxcHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMzBweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdH1cblx0XHQuc2hvd19tb3JlLWRlc2Mge1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0fVxuXHRcdCY6OmFmdGVye1xuXHRcdFx0Y29udGVudDonJztcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDoxMDAlO1xuXHRcdFx0ei1pbmRleDogMTtcblx0XHR9XG5cdFx0Jjpob3Zlcntcblx0XHRcdGltZ3tcblx0XHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcblx0XHRcdH1cblx0XHRcdC5zaG93LW1vcmUtb3ZlcmxheVxuXHRcdFx0e1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2IoMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSAxMDAlKSByZXBlYXQgc2Nyb2xsIDAgMDtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG5cdFx0XHR9XG5cdFx0XHRmaWdjYXB0aW9uXG5cdFx0XHR7XG5cdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0bWF4LWhlaWdodDogMjAwcHg7XG5cdFx0XHRcdGJvdHRvbTogNTBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuXG4uc2VjdGlvbi1vdXItcHJvZHVjdHN7XG5cdHBhZGRpbmc6MCAwIDcwcHg7XG5cdC5wYW5lbHtcblx0XHRwYWRkaW5nOjAgMTVweDtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdGJhY2tncm91bmQ6cmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpO1xuXHRcdGg1e1xuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0XHR9XG5cdFx0LnJvd3tcblx0XHRcdGRpdntcblx0XHRcdFx0JjpmaXJzdC1jaGlsZHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiMyNzZjYWE7XG5cdFx0XHRcdFx0cGFkZGluZzowcHg7IFxuXHRcdFx0XHR9XG5cdFx0XHRcdGltZ3tcblx0XHRcdFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6MTAwJTtcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHQmOm50aC1jaGlsZCgyKXtcblx0XHRcdFx0XHRwYWRkaW5nOjI1cHg7XG5cdFx0XHRcdFx0dWx7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjIwcHg7XG5cdFx0XHRcdFx0XHRsaXtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDEwcHggMjBweDtcblx0XHRcdFx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0XHRcdFx0XHRcdFx0Jjo6YmVmb3Jle1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMyMTRmN2E7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdFx0dG9wOjhweDtcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OjBweDtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6MTBweDtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdH1cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xuXHQubWFpbi1iYW5uZXJ7XG5cdFx0ZGlzcGxheTpub25lO1xuXHR9XG5cdC5zZWN0aW9uLXByb2plY3Rze1xuXHQucHJvamVjdC1ncmlke1xuXHRcdGxpe1xuXHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdGZpZ3VyZXtcblx0XHRcdFx0bWFyZ2luOjAgMCAxNXB4O1xuXHRcdFx0fVxuXHRcdFx0JjpmaXJzdC1jaGlsZHtcblx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdGZpZ3VyZXtcblx0XHRcdFx0bWFyZ2luOjAgMCAxNXB4O1xuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0JjpudGgtY2hpbGQoNCksICY6bnRoLWNoaWxkKDUpe1xuXHRcdFx0XHRmaWd1cmV7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbToxNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG59IiwiOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwge1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgei1pbmRleDogMTtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24ge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTEwMCU7XG4gIHotaW5kZXg6IDEwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDc1MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgb3BhY2l0eTogMDtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gaDEge1xuICBjb2xvcjogI0ZGQzEwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAzOHB4O1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiAuYnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBoMyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwtaXRlbSAuaW5mby1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTAwJTtcbiAgdG9wOiA1NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTUlKTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogNDUwcHg7XG4gIGhlaWdodDogNDUwcHg7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jYXJvdXNlbC1pdGVtIC5pbmZvLWltZyAuaWNvbi1iaWcgc3ZnIHtcbiAgd2lkdGg6IDU1MHB4O1xuICBoZWlnaHQ6IDU1MHB4O1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUgLmNhcm91c2VsLWNhcHRpb24ge1xuICBsZWZ0OiAxNXB4O1xuICBvcGFjaXR5OiAwLjk7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSAuaW5mby1pbWcge1xuICByaWdodDogMTVweDtcbiAgb3BhY2l0eTogMC45O1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbjo6bmctZGVlcCAubWFpbi1iYW5uZXIgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5tYWluLWJhbm5lciAucGljc3VtLWltZy13cmFwcGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTYsIDgwLCAxMjgsIDAuOSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG46Om5nLWRlZXAgLm1haW4tYmFubmVyIC5waWNzdW0taW1nLXdyYXBwZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWN0aW9uLXNob3J0LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjMTQzMzZlO1xuICBwYWRkaW5nOiAyNXB4IDA7XG59XG4uc2VjdGlvbi1zaG9ydC1pbmZvIHAge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1zaG9ydC1pbmZvIC5jb2wge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5zZWN0aW9uLXNob3J0LWluZm8gLmNvbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uY29va2llcy1zZXR0aW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUsIDI3LCA3MiwgMC43KTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uY29va2llcy1zZXR0aW5nIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwO1xufVxuLmNvb2tpZXMtc2V0dGluZy5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBhbmVsLWhlYWRpbmcsIC5wYW5lbC1ib2R5IHtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbGllbnRzLCAuc2VjdGlvbi1wcm9qZWN0cywgLnNlY3Rpb24tc2V2aWNlcywgLnRlc3RpbW9uaWFscywgLnNlY3Rpb24taW5mbywgLmNvbnRhY3QtaW5mbyB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cblxuLmNsaWVudHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuLmNsaWVudHMgaDYge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uY2xlYXItZmxvYXQge1xuICBjbGVhcjogYm90aDtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi5jb250YWN0LWluZm8gLnNvY2lhbC1uZXQgdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY29udGFjdC1pbmZvIC5zb2NpYWwtbmV0IHVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB1bCBsaSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xufVxuLmNvbnRhY3QtaW5mbyAuc29jaWFsLW5ldCB1bCBsaSBzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmNvbnRhY3QtaW5mbyAuc2V0LXBhcnQge1xuICBtYXJnaW46IDQwcHggMDtcbn1cbi5jb250YWN0LWluZm8gaDYge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFjdC1pbmZvIGZvcm0ge1xuICBtYXJnaW4tdG9wOiA0MnB4O1xufVxuLmNvbnRhY3QtaW5mbyBmb3JtIC5idG4ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uY29udGFjdC1pbmZvIC5lbWFpbC1saW5rIHtcbiAgY29sb3I6ICMyNzZjYWE7XG59XG5cbi5pY29uLWNpcmNsZSB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaWNvbi1jaXJjbGUgaSB7XG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xufVxuXG4uc2VjdGlvbi1pbmZvIC5wYW5lbC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAzMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsLWNvbnRhaW5lcjpob3ZlciAucGFuZWwge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250IHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgei1pbmRleDogMTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5yZWQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8xLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogI2I5NjQ2ZTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5yZWQgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LnJlZCAuY2lyY2xlLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5NjQ2ZTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5ibHVlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvMi5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBib3JkZXItY29sb3I6ICMyNzZjYWE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQuYmx1ZSAuY2lyY2xlLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NmNhYTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1mcm9udC5ncmVlbiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzMuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjNGJiYjU3O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWZyb250LmdyZWVuIC5jaXJjbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiYjU3O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sge1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTY0NmU7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjay5yZWQgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2suYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzZjYWE7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtYmFjay5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmJiNTc7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCAucGFuZWwtZnJvbnQsIC5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgLnBhbmVsLWJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbn1cbi5zZWN0aW9uLWluZm8gLnBhbmVsIC5wYW5lbC1iYWNrIHAge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuLnNlY3Rpb24taW5mbyAucGFuZWwgaDUge1xuICBtYXJnaW46IDIwcHggMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1pbmZvIC5wYW5lbCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnNlY3Rpb24taW5mbyBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uc2VjdGlvbi1pbmZvIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG59XG5cbi5zZWN0aW9uLXNldmljZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMik7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgaDUge1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCBwIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlIHtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUgc3ZnIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS5za3libHVlIHtcbiAgYmFja2dyb3VuZDogIzg4Y2VkYjtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS5saW1lZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjNzhjMjlhO1xufVxuLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLnllbGxvdyB7XG4gIGJhY2tncm91bmQ6ICNmMWJiNTc7XG59XG4uc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUub3JhbmdlIHtcbiAgYmFja2dyb3VuZDogI2U5N2Y2MTtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS5ibHVlIHtcbiAgYmFja2dyb3VuZDogIzg4Y2VkYjtcbn1cbi5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS5wdXJwbGUge1xuICBiYWNrZ3JvdW5kOiAjNzg3ZmMyO1xufVxuLnNlY3Rpb24tc2V2aWNlcyBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbjo6bmctZGVlcCAudGVzdGltb25pYWxzIC5jYXJvdXNlbC1pbm5lciB7XG4gIGhlaWdodDogMjgycHg7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuOjpuZy1kZWVwIC50ZXN0aW1vbmlhbHMgLmNhcm91c2VsLWl0ZW0ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDA7XG59XG46Om5nLWRlZXAgLnRlc3RpbW9uaWFscyAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlY3Rpb24tcHJvamVjdHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGg2IHtcbiAgbWFyZ2luOiAzNXB4IDAgNDBweDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaSBmaWd1cmUge1xuICBtYXJnaW46IDAgMCAycHggMDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpmaXJzdC1jaGlsZCBmaWd1cmUge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyAucHJvamVjdC1ncmlkIGxpOm50aC1jaGlsZCg0KSBmaWd1cmUsIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6bnRoLWNoaWxkKDUpIGZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbn1cbi5zZWN0aW9uLXByb2plY3RzIC5wMSB7XG4gIHBhZGRpbmc6IDFweDtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZSBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmUgLnNob3ctbW9yZS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQoMGRlZywgYmxhY2sgMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSAyMyUsIHJnYmEoMCwgMCwgMCwgMCkgNDAlLCByZ2JhKDAsIDAsIDAsIDApIDY4JSwgcmdiYSgwLCAwLCAwLCAwKSA4MSUsIHJnYmEoMCwgMCwgMCwgMCkgOTIlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlIGZpZ2NhcHRpb24ge1xuICB3ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDI7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmUgLnNob3dfbW9yZS10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlIC5zaG93X21vcmUtZGVzYyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnNlY3Rpb24tcHJvamVjdHMgZmlndXJlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG4uc2VjdGlvbi1wcm9qZWN0cyBmaWd1cmU6aG92ZXIgaW1nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZTpob3ZlciAuc2hvdy1tb3JlLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIGxpbmVhci1ncmFkaWVudCgwZGVnLCBibGFjayAwJSwgcmdiYSgwLCAwLCAwLCAwLjIpIDEwMCUpIHJlcGVhdCBzY3JvbGwgMCAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbn1cbi5zZWN0aW9uLXByb2plY3RzIGZpZ3VyZTpob3ZlciBmaWdjYXB0aW9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgYm90dG9tOiA1MHB4O1xufVxuXG4uc2VjdGlvbi1vdXItcHJvZHVjdHMge1xuICBwYWRkaW5nOiAwIDAgNzBweDtcbn1cbi5zZWN0aW9uLW91ci1wcm9kdWN0cyAucGFuZWwge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKTtcbn1cbi5zZWN0aW9uLW91ci1wcm9kdWN0cyAucGFuZWwgaDUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLW91ci1wcm9kdWN0cyAucGFuZWwgLnJvdyBkaXY6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjMjc2Y2FhO1xuICBwYWRkaW5nOiAwcHg7XG59XG4uc2VjdGlvbi1vdXItcHJvZHVjdHMgLnBhbmVsIC5yb3cgZGl2IGltZyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc2VjdGlvbi1vdXItcHJvZHVjdHMgLnBhbmVsIC5yb3cgZGl2Om50aC1jaGlsZCgyKSB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG4uc2VjdGlvbi1vdXItcHJvZHVjdHMgLnBhbmVsIC5yb3cgZGl2Om50aC1jaGlsZCgyKSB1bCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2VjdGlvbi1vdXItcHJvZHVjdHMgLnBhbmVsIC5yb3cgZGl2Om50aC1jaGlsZCgyKSB1bCBsaSB7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tb3VyLXByb2R1Y3RzIC5wYW5lbCAucm93IGRpdjpudGgtY2hpbGQoMikgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5tYWluLWJhbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGkgZmlndXJlIHtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICB9XG4gIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6Zmlyc3QtY2hpbGQgZmlndXJlIHtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICB9XG4gIC5zZWN0aW9uLXByb2plY3RzIC5wcm9qZWN0LWdyaWQgbGk6bnRoLWNoaWxkKDQpIGZpZ3VyZSwgLnNlY3Rpb24tcHJvamVjdHMgLnByb2plY3QtZ3JpZCBsaTpudGgtY2hpbGQoNSkgZmlndXJlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");





let HomeComponent = class HomeComponent {
    constructor(router, sharedservice) {
        this.router = router;
        this.sharedservice = sharedservice;
        this.isOpen = true;
        this.showNavigationArrows = false;
        this.slideConfig = {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        this.slideConfig2 = {
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: `<div class='slick-prev slick-arrow'>  <i class="icon icon-large">
    <svg focusable="false">
      <use xlink:href="#icon_arrowLeft"></use>
    </svg>
  </i></div>`,
            prevArrow: `<div class='slick-next slick-arrow'>  <i class="icon icon-large">
    <svg focusable="false">
      <use xlink:href="#icon_arrowRight"></use>
    </svg>
  </i></div>`,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.banner = [
            {
                title: 'Customized Solutions',
                title_2: 'For Dynamic Business!',
                description: 'Offers cutting edge technology solutions for specific business needs!',
                icon: "#icon_banner_1"
            },
            {
                title: 'Cloud & DevOps Tech Services to keep your business ahead of the curve!',
                title_2: '',
                description: 'Digital business solutions built for a strong growth with Personal attention of Project Management at Super accessible prices!',
                icon: "#icon_banner_2"
            },
            {
                title: 'Designing digital-first ',
                title_2: 'technologies for the Future Growth!',
                description: `We create digitally connected innovative solutions to enable Business Growth with emerging technologies!
      Talk to our expert`,
                icon: "#icon_banner_3"
            },
            {
                title: 'Product Engineering & Experience Design for delightful user experience!',
                title_2: '',
                description: 'Digital business solutions built for a strong growth with Personal attention of Project Management at Super accessible prices!',
                icon: "#icon_banner_4"
            }
        ];
        this.client = [
            { img: 'assets/images/client' },
            { img: 'assets/images/client' },
            { img: 'assets/images/client' },
            { img: 'assets/images/client' },
            { img: 'assets/images/client' }
        ];
        this.testimonials = [
            {
                clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
                clientView_2: ' Due to our close relationships and constant interactions with clients,',
                clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
                clientName: 'test Company'
            },
            {
                clientView_1: ' Consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
                clientView_2: ' Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
                clientView_3: ' lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.',
                clientName: 'test Company'
            },
            {
                clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
                clientView_2: ' Due to our close relationships and constant interactions with clients,',
                clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
                clientName: 'test Company'
            },
            {
                clientView_1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                clientView_2: ' Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo',
                clientView_3: ' Proin sodales pulvinar tempor.',
                clientName: 'test Company'
            },
        ];
        this.projects = [
            {
                gridClass: 'col-lg-6 col-md-6 col-sm-6 col-xs-12',
                imgPath: 'assets/images/project',
                title: 'DATANEST',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
                imgPath: 'assets/images/project',
                title: 'DATANEST',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
                imgPath: 'assets/images/project',
                title: 'DATANEST',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
                imgPath: 'assets/images/project',
                title: 'DATANEST',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
                imgPath: 'assets/images/project',
                title: 'DATANEST',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            }
        ];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.btnClick = function () {
            this.router.navigateByUrl('/Contactus', { skipLocationChange: true });
        };
        this.viewMore = function () {
            this.router.navigateByUrl('/Industries', { skipLocationChange: true });
        };
        this.btnOurProduct = function () {
            this.router.navigateByUrl('/OurProduct', { skipLocationChange: true });
        };
        this.lernmore = function (url) {
            this.router.navigateByUrl('/ManagedServices', { skipLocationChange: true });
        };
        this.sevices = [
            {
                title: 'IT, telecom and software',
                color: 'skyblue',
                description: '',
                icon: '#icon_telecom'
            },
            {
                title: 'ITES - BPO & KPO',
                color: 'yellow ',
                description: '',
                icon: '#icon_customerService'
            },
            {
                title: 'Engineering & Manufacturing',
                color: 'orange',
                description: '',
                icon: '#icon_engineeringMgf'
            },
            {
                title: 'Consumer goods and retail',
                color: 'limegreen',
                description: '',
                icon: '#icon_retail'
            },
            {
                title: 'Financial services and insurance',
                color: 'purple',
                description: '',
                icon: '#icon_finervice'
            },
            {
                title: 'Health care & Pharmaceuticals',
                color: 'blue',
                description: '',
                icon: '#icon_healthCare'
            },
        ];
        this.solution = [
            {
                title: 'Software Engineering',
                titlelink: 'ProductEngineering',
                color: 'blue',
                list: [
                    { name: 'Product Engineering' },
                    { name: 'Application Development' },
                    { name: 'UX/UI Development' },
                    { name: 'Software Testing & QA' }
                ],
                description: 'Software engineering is a concept in and of itself, but to better understand it, you need to know what each part of the term means before you can fully understand how they operate together. It can be difficult to understand, even though it does seem straightforward.',
                icon: '#icon_softEngg'
            },
            {
                title: 'Data Services',
                titlelink: 'DataEngineering',
                color: 'red',
                list: [
                    { name: 'Data Engineering' },
                    { name: 'Data Management' },
                    { name: 'Data Science' },
                    { name: 'Cloud Computing' }
                ],
                description: 'Data Services is the practice of collecting, keeping, and using data securely, efficiently, and cost-effectively. The goal of data management is to help people, organizations, and connected things optimize the use of data within the bounds of policy and regulation.',
                icon: '#icon_mgmt'
            },
            {
                title: 'IT Staffing & Training',
                titlelink: 'StaffingServices',
                color: 'green',
                list: [
                    { name: 'Staffing Services' },
                    { name: 'Industries' },
                    { name: 'Courses' },
                    { name: 'Program Calendar' }
                ],
                description: `Develop the skills your workforce needs to compete and win. Our curated learning pathways help close knowledge gaps and drive measurable outcomes. Whether you're a team of 5 or 50,000, We offers flexible options to work with your eLearning goals and budgets.`,
                icon: '#icon_training'
            },
        ];
        this.shortInfo = [
            {
                description: `Delivered 150+ Complex products & Projects`
            },
            {
                description: `Over 50 Satisfied Customers across Globe`
            },
            {
                description: `Highly Experienced Quality Professionals Team`
            },
            {
                description: `Expertise 100+ modern Tools and Technologies`
            }
        ];
    }
    getUrl(i, title) {
        if (title == 'ProductEngineering') {
            this.router.navigateByUrl('/SoftwareEngineering', { skipLocationChange: true });
            this.sharedservice.nextMessage(i, 'ProductEngineering');
        }
        else if (title == 'DataEngineering') {
            this.router.navigateByUrl('/DataServices', { skipLocationChange: true });
            this.sharedservice.nextMessage(i, 'DataEngineering');
        }
        else if (title == 'StaffingServices') {
            this.router.navigateByUrl('/ItStafingAndServices', { skipLocationChange: true });
            this.sharedservice.nextMessage(i, 'StaffingServices');
        }
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    addCookies() {
        this.isOpen = !this.isOpen;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', { static: true })
], HomeComponent.prototype, "carousel", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/industries/industries.component.scss":
/*!******************************************************!*\
  !*** ./src/app/industries/industries.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-industy-info {\n  padding-top: 0px;\n}\n.section-industy-info .section-sevices .panel {\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  padding: 15px 0;\n}\n.section-industy-info .section-sevices .panel h5 {\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n.section-industy-info .section-sevices .panel p {\n  padding: 0 20px;\n}\n.section-industy-info .section-sevices .panel .icon-circle {\n  margin: 15px auto;\n}\n.section-industy-info .section-sevices .panel .icon-circle svg {\n  height: 80px;\n  width: 80px;\n}\n.section-industy-info .section-sevices .panel .icon-circle.skyblue {\n  background: #88cedb;\n}\n.section-industy-info .section-sevices .panel .icon-circle.limegreen {\n  background: #78c29a;\n}\n.section-industy-info .section-sevices .panel .icon-circle.yellow {\n  background: #f1bb57;\n}\n.section-industy-info .section-sevices .panel .icon-circle.orange {\n  background: #e97f61;\n}\n.section-industy-info .section-sevices .panel .icon-circle.blue {\n  background: #88cedb;\n}\n.section-industy-info .section-sevices .panel .icon-circle.purple {\n  background: #787fc2;\n}\n.section-industy-info .section-sevices h6 {\n  margin-bottom: 40px;\n}\n.section-industy-info .section-sevices .icon-circle {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.section-industy-info .section-sevices .icon-circle i {\n  line-height: 90px;\n}\nul li a {\n  padding: 15px;\n  margin-bottom: 15px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\nul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL2luZHVzdHJpZXMvaW5kdXN0cmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5kdXN0cmllcy9pbmR1c3RyaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRDhDQztFQUNDLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQzVDRjtBRDZDRTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDM0NIO0FEOENFO0VBQ0MsZUFBQTtBQzVDSDtBRDhDRTtFQUNDLGlCQUFBO0FDNUNIO0FENkNHO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUMzQ0o7QUQ2Q0c7RUFDQyxtQkE5Qks7QUNiVDtBRDZDRztFQUNDLG1CQTlCTztBQ2JYO0FENkNHO0VBQ0MsbUJBbkNJO0FDUlI7QUQ2Q0c7RUFDQyxtQkFyQ0k7QUNOUjtBRDZDRztFQUNDLG1CQXRDRTtBQ0xOO0FENkNHO0VBQ0MsbUJBeENJO0FDSFI7QURnREM7RUFDQyxtQkFBQTtBQzlDRjtBRGlESTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDL0NSO0FEZ0RRO0VBQ0ksaUJBQUE7QUM5Q1o7QUQwRFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDdkRaO0FEd0RZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDdERoQiIsImZpbGUiOiJzcmMvYXBwL2luZHVzdHJpZXMvaW5kdXN0cmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWluZHVzdHktaW5mb3tcbiAgICBwYWRkaW5nLXRvcDowcHg7XG4gICAgLy8gLnBhbmVse1xuICAgIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gICAgIC5wYW5lbC1oZWFkaW5ne1xuICAgIC8vICAgICAgICAgd2lkdGg6MTUwcHg7XG4gICAgLy8gICAgICAgICBoZWlnaHQ6MTUwcHg7XG4gICAgLy8gICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAvLyAgICAgICAgIGJvcmRlcjoycHggc29saWQgIzIxNGY3YTtcbiAgICAvLyAgICAgICAgIG1hcmdpbjowIGF1dG8gMTVweDtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgcHtcbiAgICAvLyAgICAgICAgY29sb3I6ICMyMTRmN2E7XG4gICAgLy8gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgLy8gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGl7XG4gICAgLy8gICAgICAgICBsaW5lLWhlaWdodDogMTM1cHg7XG4gICAgLy8gICAgICAgICBzdmd7XG4gICAgLy8gICAgICAgICAgICAgZmlsbDogIzIxNGY3YTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAucGFuZWwtaGVhZGluZ3tcbiAgICAvLyAgICAgICAgICY6aG92ZXJ7XG4gICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZDojMjE0ZjdhO1xuICAgIC8vICAgICAgICAgICAgIHN2Z3tcbiAgICAvLyAgICAgICAgICAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gLmNvbHtcbiAgICAvLyAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIC8vICAgICY6bGFzdC1jaGlsZHtcbiAgICAvLyAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAvLyAgICB9IFxuICAgIC8vIH1cblxuXG4kc2t5Ymx1ZTojODhjZWRiO1xuJHllbGxvdzojZjFiYjU3O1xuJG9yYW5nZTojZTk3ZjYxO1xuJGxpbWVncmVlbjojNzhjMjlhO1xuJGJsdWU6Izg4Y2VkYjtcbiRwdXJwbGU6Izc4N2ZjMjtcblxuLnNlY3Rpb24tc2V2aWNlc3tcblx0LnBhbmVse1xuXHRcdGJhY2tncm91bmQ6I2ZmZjtcblx0XHRib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjI0LCAyMjQsIDIyNCwgMSk7XG5cdFx0Ym9yZGVyLXJhZGl1czo1cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0XHRwYWRkaW5nOiAxNXB4IDA7XG5cdFx0aDV7XG5cdFx0XHRjb2xvcjojMzMzMzMzO1xuXHRcdFx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0XHRcdG1hcmdpbi1ib3R0b206MjVweDtcblx0XHR9XG5cdFx0XG5cdFx0cHtcblx0XHRcdHBhZGRpbmc6MCAyMHB4O1xuXHRcdH1cblx0XHQuaWNvbi1jaXJjbGV7XG5cdFx0XHRtYXJnaW46IDE1cHggYXV0bztcblx0XHRcdHN2Z3tcblx0XHRcdFx0aGVpZ2h0OjgwcHg7XG5cdFx0XHRcdHdpZHRoOjgwcHg7XG5cdFx0XHR9XG5cdFx0XHQmLnNreWJsdWV7XG5cdFx0XHRcdGJhY2tncm91bmQ6JHNreWJsdWU7XG5cdFx0XHR9XG5cdFx0XHQmLmxpbWVncmVlbntcblx0XHRcdFx0YmFja2dyb3VuZDokbGltZWdyZWVuO1xuXHRcdFx0fVxuXHRcdFx0Ji55ZWxsb3d7XG5cdFx0XHRcdGJhY2tncm91bmQ6JHllbGxvdztcblx0XHRcdH1cblx0XHRcdCYub3Jhbmdle1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiRvcmFuZ2U7XG5cdFx0XHR9XG5cdFx0XHQmLmJsdWV7XG5cdFx0XHRcdGJhY2tncm91bmQ6JGJsdWU7XG5cdFx0XHR9XG5cdFx0XHQmLnB1cnBsZXtcblx0XHRcdFx0YmFja2dyb3VuZDokcHVycGxlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGg2e1xuXHRcdG1hcmdpbi1ib3R0b206NDBweDtcbiAgICB9XG4gICAgXG4gICAgLmljb24tY2lyY2xle1xuICAgICAgICBoZWlnaHQ6OTBweDtcbiAgICAgICAgd2lkdGg6OTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgICAgIGl7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDo5MHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbn1cblxuXG59XG5cbnVse1xuICAgIGxpe1xuICAgICAgICBhe1xuICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDojZTVlNWU1O1xuICAgICAgICAgICAgY29sb3I6IzMzMzMzMztcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAmLmFjdGl2ZXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMyMTRmN2E7XG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgfVxufSIsIi5zZWN0aW9uLWluZHVzdHktaW5mbyB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAuc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCBoNSB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAuc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCBwIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZSB7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZSBzdmcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5zZWN0aW9uLXNldmljZXMgLnBhbmVsIC5pY29uLWNpcmNsZS5za3libHVlIHtcbiAgYmFja2dyb3VuZDogIzg4Y2VkYjtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAuc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUubGltZWdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzc4YzI5YTtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAuc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUueWVsbG93IHtcbiAgYmFja2dyb3VuZDogI2YxYmI1Nztcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAuc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUub3JhbmdlIHtcbiAgYmFja2dyb3VuZDogI2U5N2Y2MTtcbn1cbi5zZWN0aW9uLWluZHVzdHktaW5mbyAuc2VjdGlvbi1zZXZpY2VzIC5wYW5lbCAuaWNvbi1jaXJjbGUuYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICM4OGNlZGI7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnNlY3Rpb24tc2V2aWNlcyAucGFuZWwgLmljb24tY2lyY2xlLnB1cnBsZSB7XG4gIGJhY2tncm91bmQ6ICM3ODdmYzI7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnNlY3Rpb24tc2V2aWNlcyBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uc2VjdGlvbi1pbmR1c3R5LWluZm8gLnNlY3Rpb24tc2V2aWNlcyAuaWNvbi1jaXJjbGUge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNlY3Rpb24taW5kdXN0eS1pbmZvIC5zZWN0aW9uLXNldmljZXMgLmljb24tY2lyY2xlIGkge1xuICBsaW5lLWhlaWdodDogOTBweDtcbn1cblxudWwgbGkgYSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbnVsIGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/industries/industries.component.ts":
/*!****************************************************!*\
  !*** ./src/app/industries/industries.component.ts ***!
  \****************************************************/
/*! exports provided: IndustriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustriesComponent", function() { return IndustriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndustriesComponent = class IndustriesComponent {
    constructor() {
        this.industryInfo = [
            { title: 'IT, Telecom & Software', icon: 'icon_itsoftware' },
            { title: 'Telecom', icon: 'icon_teletower' },
            { title: 'ITES - BPO & KPO', icon: 'icon_bpoKpo' },
            { title: 'Engineering & Manufacturing', icon: 'icon_egmg' },
            { title: 'Consumer Goods & Retail', icon: 'icon_retailflat' },
            { title: 'Banking Financial Services & Insurance', icon: 'icon_accountflat' },
            { title: 'Health Care & Pharmaceuticals', icon: 'icon_vaccineflat' }
        ];
        this.sevices = [
            {
                title: 'IT, telecom and software',
                color: 'skyblue',
                description: ' ',
                icon: '#icon_telecom'
            },
            {
                title: 'ITES - BPO & KPO',
                color: 'yellow ',
                description: ' ',
                icon: '#icon_customerService'
            },
            {
                title: 'Engineering & Manufacturing',
                color: 'orange',
                description: ' ',
                icon: '#icon_engineeringMgf'
            },
            {
                title: 'Consumer goods and retail',
                color: 'limegreen',
                description: ' ',
                icon: '#icon_retail'
            },
            {
                title: 'Financial services and insurance',
                color: 'purple',
                description: ' ',
                icon: '#icon_finervice'
            },
            {
                title: 'Health care & Pharmaceuticals',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Consumer Packaged Goods',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Energy & Utilities',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Financial Services',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Government & Nonprofit',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Industrial Manufacturing',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Media & Technology',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Oil & Gas',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Pharma, Health & Life Sciences',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Retail',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Technology',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Telecom',
                color: 'blue',
                description: ' ',
                icon: '#icon_healthCare'
            },
            {
                title: 'Travel & Hospitality',
                color: 'blue',
                description: ' ',
                icon: '#icon_travel'
            },
        ];
    }
    ngOnInit() {
    }
};
IndustriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-industries',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./industries.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/industries/industries.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./industries.component.scss */ "./src/app/industries/industries.component.scss")).default]
    })
], IndustriesComponent);



/***/ }),

/***/ "./src/app/managedservice/managedservice.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/managedservice/managedservice.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-manage-service h5 {\n  font-weight: bold;\n  text-align: center;\n  margin: 70px 0;\n}\n.section-manage-service ul {\n  margin-top: 35px;\n}\n.section-manage-service ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  font-weight: bold;\n  position: relative;\n}\n.section-manage-service ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.section-manage-service img {\n  width: auto;\n}\n.section-manage-service .row:last-child {\n  margin-top: 70px;\n}\n.section-manage-service .panel-container {\n  margin-bottom: 25px;\n}\n.section-manage-service .panel {\n  color: #fff;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.section-manage-service .panel .panel-body {\n  position: absolute;\n  bottom: 5px;\n  right: 15px;\n}\n.section-manage-service .panel .panel-front {\n  z-index: 1;\n  background: #e6f0fa;\n  height: 100%;\n  padding: 15px;\n  padding-bottom: 100px;\n}\n.section-manage-service .panel .panel-back {\n  webkit-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  transition: 0.5s ease-in-out;\n  z-index: 2;\n  height: 0;\n}\n.section-manage-service .panel .panel-back p {\n  padding: 10px;\n  color: #555;\n  text-align: left;\n}\n.section-manage-service .panel .panel-back h5 {\n  margin: 0;\n  padding: 20px 10px;\n  text-align: left;\n  color: #555;\n}\n.section-manage-service .panel p {\n  margin: 0;\n  text-align: right;\n  color: #333333;\n  padding: 10px;\n  width: 250px;\n  font-weight: bold;\n}\n.section-manage-service .panel:hover .panel-back {\n  background: #214f7a;\n  height: 100%;\n}\n.section-manage-service .panel:hover .panel-back p {\n  color: #fff;\n}\n.section-manage-service .panel:hover .panel-back h5 {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL21hbmFnZWRzZXJ2aWNlL21hbmFnZWRzZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYW5hZ2Vkc2VydmljZS9tYW5hZ2Vkc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQVI7QURFSTtFQUNGLGdCQUFBO0FDQUY7QURDRztFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDUyxlQUFBO0VBQ0EsaUJBQUE7RUFDVCxrQkFBQTtBQ0NIO0FEQUc7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREVJO0VBQ0ksV0FBQTtBQ0FSO0FER1E7RUFDSSxnQkFBQTtBQ0RaO0FESUk7RUFDRixtQkFBQTtBQ0ZGO0FES0k7RUFDRixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSEY7QURJRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNGSDtBRElFO0VBQ0MsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0ZIO0FESUU7RUFDQyxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0csU0FBQTtBQ0ZOO0FER0c7RUFDWSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRGY7QURHWTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0RaO0FETUU7RUFDQyxTQUFBO0VBQ1MsaUJBQUE7RUFDQSxjQUFBO0VBQ1QsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0pIO0FEUUc7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNOSDtBRFFHO0VBQ0MsV0FBQTtBQ05KO0FEUUc7RUFDQyxXQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2Vkc2VydmljZS9tYW5hZ2Vkc2VydmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNle1xuICAgIGg1e1xuICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjo3MHB4IDA7XG4gICAgfVxuICAgIHVse1xuXHRcdG1hcmdpbi10b3A6MzVweDtcblx0XHQgbGl7XG5cdFx0XHRwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xuXHRcdFx0bGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHQmOjpiZWZvcmV7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XG5cdFx0XHRcdHRvcDo4cHg7XG5cdFx0XHRcdGxlZnQ6MHB4O1xuXHRcdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdFx0aGVpZ2h0OjEwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6YXV0bztcbiAgICB9XG4gICAgLnJvd3tcbiAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgbWFyZ2luLXRvcDo3MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wYW5lbC1jb250YWluZXJ7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjVweDtcblx0XHRcblx0fVxuICAgIC5wYW5lbHtcblx0XHRjb2xvcjojZmZmO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHQucGFuZWwtYm9keXtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGJvdHRvbTo1cHg7XG5cdFx0XHRyaWdodDoxNXB4O1xuXHRcdH1cblx0IC5wYW5lbC1mcm9udHtcblx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRiYWNrZ3JvdW5kOiNlNmYwZmE7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0cGFkZGluZy1ib3R0b206IDEwMHB4O1xuXHRcdH1cblx0XHQucGFuZWwtYmFja3tcblx0XHRcdHdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0XHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGJvdHRvbTogMHB4O1xuXHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG5cdFx0XHR6LWluZGV4OiAyO1xuXHRcdCAgICBoZWlnaHQ6IDA7XG5cdFx0XHRwe1xuICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgICAgY29sb3I6IzU1NTtcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg1e1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICBwYWRkaW5nOjIwcHggMTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgIGNvbG9yOiM1NTU7XG5cdFx0fVxuXHRcdFxuXHRcdH1cblx0XHRcblx0XHRwe1xuXHRcdFx0bWFyZ2luOjA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiMzMzMzMzM7XG5cdFx0XHRwYWRkaW5nOjEwcHg7XG5cdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHR9XG5cblx0XHQmOmhvdmVye1xuXHRcdFx0LnBhbmVsLWJhY2t7XG5cdFx0XHRiYWNrZ3JvdW5kOiMyMTRmN2E7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcblx0XHRcdHB7XG5cdFx0XHRcdGNvbG9yOiNmZmY7XHRcblx0XHRcdH1cblx0XHRcdGg1e1xuXHRcdFx0XHRjb2xvcjojZmZmO1x0XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG4gICAgfVxufSIsIi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIGg1IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA3MHB4IDA7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSB1bCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSB1bCBsaSB7XG4gIHBhZGRpbmc6IDAgMCAyMHB4IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnJvdzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbC1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiAxNXB4O1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsIC5wYW5lbC1mcm9udCB7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNlNmYwZmE7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsIC5wYW5lbC1iYWNrIHtcbiAgd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMDtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbCAucGFuZWwtYmFjayBwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM1NTU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucGFuZWwgLnBhbmVsLWJhY2sgaDUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM1NTU7XG59XG4uc2VjdGlvbi1tYW5hZ2Utc2VydmljZSAucGFuZWwgcCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsOmhvdmVyIC5wYW5lbC1iYWNrIHtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNlY3Rpb24tbWFuYWdlLXNlcnZpY2UgLnBhbmVsOmhvdmVyIC5wYW5lbC1iYWNrIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWN0aW9uLW1hbmFnZS1zZXJ2aWNlIC5wYW5lbDpob3ZlciAucGFuZWwtYmFjayBoNSB7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/managedservice/managedservice.component.ts":
/*!************************************************************!*\
  !*** ./src/app/managedservice/managedservice.component.ts ***!
  \************************************************************/
/*! exports provided: ManagedserviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagedserviceComponent", function() { return ManagedserviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManagedserviceComponent = class ManagedserviceComponent {
    constructor() {
        this.solution = [
            {
                title: 'Mixed Multimedia Content',
                description: 'Mixed Multimedia Content',
                description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
            },
            {
                title: 'Control Your Portfolio Size, Dimension & Size of Your Margin',
                description: 'Control Your Portfolio Size, Dimension & Size of Your Margin',
                description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
            },
            {
                title: 'Portfolio Item Block Size',
                description: 'Portfolio Item Block Size',
                description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
            },
            {
                title: 'Ajax Expand, Extended Portfolio, or Side Content',
                description: 'Ajax Expand, Extended Portfolio, or Side Content',
                description_2: 'Tired with only single type content? with Jkreativ you have ability to mix your content such as youtube, vimeo, sound cloud also self hosted HTML 5 video.',
            }
        ];
    }
    ngOnInit() {
    }
};
ManagedserviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-managedservice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./managedservice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/managedservice/managedservice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./managedservice.component.scss */ "./src/app/managedservice/managedservice.component.scss")).default]
    })
], ManagedserviceComponent);



/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-news .nav-tabs {\n  width: 100%;\n}\n.section-news .nav-tabs .nav-link {\n  border: none;\n  color: #214f7a;\n}\n.section-news .nav-tabs .nav-link.active {\n  border-bottom: 2px solid #214f7a;\n  font-weight: bold;\n}\n.section-news li.grid-li {\n  width: 25%;\n  float: left;\n  list-style-type: none;\n}\n.section-news li.grid-li p {\n  margin: 0;\n}\n.section-news li.grid-li .panel {\n  margin: 0 0 10px 10px;\n  border: 1px solid #ccc;\n}\n.section-news li.grid-li .panel .panel-body {\n  padding: 15px;\n}\n.section-news li.grid-li img {\n  width: 100%;\n}\n.section-news li.grid-li:first-child {\n  width: 50%;\n}\n.section-news li.grid-li:first-child .panel {\n  background: #e5f0fa;\n  border: none;\n  margin-left: 0;\n}\n.section-news li.grid-li:first-child .panel p {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n.section-news li.grid-li:first-child .panel p:first-child {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  font-size: 18px;\n}\n.news-video {\n  padding: 70px 0;\n  background: #e5f0fa;\n}\n.news-video .video {\n  margin-bottom: 70px;\n}\n.news-video .video iframe {\n  margin: 0 auto;\n  display: block;\n}\n.press-release-section .div-1 {\n  background-color: #c3d04e;\n}\n.press-release-section .div-2 {\n  background-color: #8778d9;\n}\n.press-release-section .div-3 {\n  background-color: #ffab00;\n}\n.press-release-section .div-4 {\n  background-color: #ff5630;\n}\n.press-release-section .div-5 {\n  background-color: #02b8d9;\n}\n.press-release-section .div-6 {\n  background-color: #5391ee;\n}\n.press-release-section section {\n  padding: 70px 0 55px;\n}\n.press-release-section .press-release-info {\n  padding: 0;\n}\n.press-release-section .press-release-info .col-sm-12 {\n  border-top: 1px dotted #af9090;\n  padding-bottom: 40px;\n}\n.press-release-section .press-release-info .col-sm-12:nth-child(even) .span {\n  float: right;\n  margin: 0 0 0 40px;\n}\n.press-release-section .press-release-info p {\n  padding-top: 40px;\n}\n.press-release-section .press-release-info p a {\n  color: #214f7a;\n  font-weight: bold;\n}\n.press-release-section .press-release-info p .span {\n  float: left;\n  margin: 0 40px 0 0;\n}\n.press-release-section .press-release-info p img {\n  width: 50%;\n  display: block;\n  margin: 0 auto 30px;\n}\n.press-release-section .press-release-info p .title-name {\n  font-size: 25px;\n  font-weight: bold;\n  text-align: center;\n  display: block;\n}\n.press-release-section .press-release-info p .title-info {\n  font-size: 16px;\n  color: #5C5C5C;\n  text-align: center;\n  display: block;\n}\n.press-release-section .press-release-info p .v-text-align {\n  height: 100%;\n  display: flex;\n}\n.press-release-section .press-release-info p .v-text-align p {\n  align-self: center;\n}\n.press-release-section .press-release-info .btn {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 12px;\n}\n.video-gallery .video {\n  margin-bottom: 40px;\n}\n@media (max-width: 576px) {\n  .press-release-section .press-release-info .col-sm-12 .span {\n    width: 100%;\n    margin: 0;\n    float: none;\n  }\n  .press-release-section .press-release-info .col-sm-12 .span img {\n    margin: 0 auto 30px;\n  }\n  .press-release-section .press-release-info .col-sm-12 .v-text-align {\n    height: auto;\n    display: block;\n  }\n  .press-release-section .press-release-info .col-sm-12 .v-text-align p {\n    align-self: center;\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtBQ0FSO0FEQ1E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0NaO0FEQVk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FDRWhCO0FESUk7RUFDSSxVQUFBO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0FDRlQ7QURHUztFQUNJLFNBQUE7QUNEYjtBREdTO0VBQ0cscUJBQUE7RUFDQyxzQkFBQTtBQ0RiO0FERWE7RUFDSSxhQUFBO0FDQWpCO0FESVM7RUFDSSxXQUFBO0FDRmI7QURJUztFQUNJLFVBQUE7QUNGYjtBREdhO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0RqQjtBREVpQjtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0FyQjtBRENxQjtFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ3hCO0FEU0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRE9JO0VBQ0ksbUJBQUE7QUNMUjtBRE1PO0VBQ0MsY0FBQTtFQUNBLGNBQUE7QUNKUjtBRGVRO0VBQ0kseUJBQUE7QUNaWjtBRFdRO0VBQ0kseUJBQUE7QUNUWjtBRFFRO0VBQ0kseUJBQUE7QUNOWjtBREtRO0VBQ0kseUJBQUE7QUNIWjtBREVRO0VBQ0kseUJBQUE7QUNBWjtBRERRO0VBQ0kseUJBQUE7QUNHWjtBRENJO0VBQ0ksb0JBQUE7QUNDUjtBREVJO0VBQ0ksVUFBQTtBQ0FSO0FERVE7RUFDSSw4QkFBQTtFQUNBLG9CQUFBO0FDQVo7QURFWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0FoQjtBRElJO0VBQ0ksaUJBQUE7QUNGUjtBREdRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDRFo7QURHUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0RaO0FESUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRlI7QURNSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pSO0FETUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pSO0FET0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0xSO0FETVE7RUFDSSxrQkFBQTtBQ0paO0FEU0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDUFI7QURhSTtFQUNJLG1CQUFBO0FDVlI7QURjQTtFQUtjO0lBQ00sV0FBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VDZmxCO0VEZ0JrQjtJQUNJLG1CQUFBO0VDZHRCO0VEaUJjO0lBQ0ksWUFBQTtJQUNBLGNBQUE7RUNmbEI7RURnQmtCO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0VDZHRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1uZXdze1xuICAgIC5uYXYtdGFic3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5uYXYtbGlua3tcbiAgICAgICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICAgICAgY29sb3I6IzIxNGY3YTtcbiAgICAgICAgICAgICYuYWN0aXZle1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMyMTRmN2E7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsaVxuICAge1xuICAgICYuZ3JpZC1saXtcbiAgICAgICAgd2lkdGg6MjUlO1xuICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgIHB7XG4gICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICB9XG4gICAgICAgICAucGFuZWx7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDEwcHg7O1xuICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAucGFuZWwtYm9keXtcbiAgICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICB9XG4gICAgICAgICBpbWd7XG4gICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgIH1cbiAgICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICAgICAgIC5wYW5lbHtcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MThweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICBcbiB9XG4gICB9XG4gICBcbn1cbi5uZXdzLXZpZGVve1xuICAgIHBhZGRpbmc6NzBweCAwO1xuICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcbiAgICAudmlkZW97XG4gICAgICAgIG1hcmdpbi1ib3R0b206NzBweDtcbiAgICAgICBpZnJhbWV7XG4gICAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgIH1cbiAgICB9XG59XG5cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb257XG5cblxuICAgICRyYW5kb21CZzojYzNkMDRlLCAjODc3OGQ5LCAjZmZhYjAwLCAjZmY1NjMwLCAjMDJiOGQ5LCAjNTM5MWVlO1xuXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJHJhbmRvbUJnKSB7XG4gICAgICAgIC5kaXYtI3skaX0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbnRoKCRyYW5kb21CZywgJGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiA3MHB4IDAgNTVweDtcbiAgICB9XG4gICAgXG4gICAgLnByZXNzLXJlbGVhc2UtaW5mb3tcbiAgICAgICAgcGFkZGluZzowO1x0XG4gICAgXG4gICAgICAgIC5jb2wtc20tMTJ7XG4gICAgICAgICAgICBib3JkZXItdG9wOjFweCBkb3R0ZWQgI2FmOTA5MDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjQwcHg7XG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xuICAgICAgICAgICAgLnNwYW57XG4gICAgICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgMCAwIDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgXG4gICAgcHtcbiAgICAgICAgcGFkZGluZy10b3A6NDBweDtcbiAgICAgICAgYXtcbiAgICAgICAgICAgIGNvbG9yOiMyMTRmN2E7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5zcGFue1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjogMCA0MHB4IDAgMDtcbiAgICAgICAgfVxuICAgIFxuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICBtYXJnaW46MCBhdXRvIDMwcHg7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIC50aXRsZS1uYW1le1xuICAgICAgICBmb250LXNpemU6MjVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbiAgICAudGl0bGUtaW5mb3tcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgIGNvbG9yOiM1QzVDNUM7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICB9XG4gICAgXG4gICAgLnYtdGV4dC1hbGlnbntcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgfVxuICAgIC5idG57XG4gICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIH1cbiAgICB9XG59XG5cbi52aWRlby1nYWxsZXJ5e1xuICAgIC52aWRlb3tcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo0MHB4O31cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpe1xuICAgICAgICBcbiAgICAucHJlc3MtcmVsZWFzZS1zZWN0aW9ue1xuICAgICAgICAucHJlc3MtcmVsZWFzZS1pbmZve1xuICAgICAgICAgICAgLmNvbC1zbS0xMntcbiAgICAgICAgICAgICAgLnNwYW57XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0byAzMHB4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnYtdGV4dC1hbGlnbntcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuc2VjdGlvbi1uZXdzIC5uYXYtdGFicyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlY3Rpb24tbmV3cyAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzIxNGY3YTtcbn1cbi5zZWN0aW9uLW5ld3MgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpIHAge1xuICBtYXJnaW46IDA7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkgLnBhbmVsIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpIC5wYW5lbCAucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGk6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNTAlO1xufVxuLnNlY3Rpb24tbmV3cyBsaS5ncmlkLWxpOmZpcnN0LWNoaWxkIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGk6Zmlyc3QtY2hpbGQgLnBhbmVsIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2VjdGlvbi1uZXdzIGxpLmdyaWQtbGk6Zmlyc3QtY2hpbGQgLnBhbmVsIHA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5uZXdzLXZpZGVvIHtcbiAgcGFkZGluZzogNzBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xufVxuLm5ld3MtdmlkZW8gLnZpZGVvIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi5uZXdzLXZpZGVvIC52aWRlbyBpZnJhbWUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLmRpdi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzZDA0ZTtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLmRpdi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3NzhkOTtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLmRpdi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWIwMDtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLmRpdi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTYzMDtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLmRpdi01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYjhkOTtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLmRpdi02IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzOTFlZTtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcwcHggMCA1NXB4O1xufVxuLnByZXNzLXJlbGVhc2Utc2VjdGlvbiAucHJlc3MtcmVsZWFzZS1pbmZvIHtcbiAgcGFkZGluZzogMDtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLnByZXNzLXJlbGVhc2UtaW5mbyAuY29sLXNtLTEyIHtcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjYWY5MDkwO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLnByZXNzLXJlbGVhc2UtaW5mbyAuY29sLXNtLTEyOm50aC1jaGlsZChldmVuKSAuc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwIDAgMCA0MHB4O1xufVxuLnByZXNzLXJlbGVhc2Utc2VjdGlvbiAucHJlc3MtcmVsZWFzZS1pbmZvIHAge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLnByZXNzLXJlbGVhc2UtaW5mbyBwIGEge1xuICBjb2xvcjogIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gcCAuc3BhbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgNDBweCAwIDA7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gcCBpbWcge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLnByZXNzLXJlbGVhc2UtaW5mbyBwIC50aXRsZS1uYW1lIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLnByZXNzLXJlbGVhc2UtaW5mbyBwIC50aXRsZS1pbmZvIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLnByZXNzLXJlbGVhc2UtaW5mbyBwIC52LXRleHQtYWxpZ24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gcCAudi10ZXh0LWFsaWduIHAge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gLmJ0biB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udmlkZW8tZ2FsbGVyeSAudmlkZW8ge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnByZXNzLXJlbGVhc2Utc2VjdGlvbiAucHJlc3MtcmVsZWFzZS1pbmZvIC5jb2wtc20tMTIgLnNwYW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAucHJlc3MtcmVsZWFzZS1zZWN0aW9uIC5wcmVzcy1yZWxlYXNlLWluZm8gLmNvbC1zbS0xMiAuc3BhbiBpbWcge1xuICAgIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gIH1cbiAgLnByZXNzLXJlbGVhc2Utc2VjdGlvbiAucHJlc3MtcmVsZWFzZS1pbmZvIC5jb2wtc20tMTIgLnYtdGV4dC1hbGlnbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5wcmVzcy1yZWxlYXNlLXNlY3Rpb24gLnByZXNzLXJlbGVhc2UtaW5mbyAuY29sLXNtLTEyIC52LXRleHQtYWxpZ24gcCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsComponent = class NewsComponent {
    constructor() {
        this.news = [
            { img: 'assets/images/news', desc_1: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018.', desc_2: 'Arkedge Technologies has schedule to launch Survey ans Poll product on 05 January 2018... Please click on news and read the details of news section. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
            { img: 'assets/images/news', desc_1: 'Arkedge', desc_2: 'Technologies bags new Spend Analysis project...' },
        ];
        this.pressRelease = [
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            }
        ];
    }
    ngOnInit() {
    }
};
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/ourproduct/ourproduct.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ourproduct/ourproduct.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-product {\n  background: #e5f0fa;\n  padding: 60px 0;\n}\n\n.section-product-detail h2 {\n  margin-bottom: 25px;\n  font-weight: bold;\n}\n\n.section-product-detail ul {\n  margin-bottom: 15px;\n}\n\n.section-product-detail ul li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n\n.section-product-detail ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.section-product-detail img {\n  max-width: 100%;\n  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.2);\n}\n\n.section-product-detail .row + .row {\n  margin-top: 100px;\n}\n\n.slick-slide {\n  position: relative;\n  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  margin: 12px;\n  box-sizing: border-box;\n}\n\n.slick-slide p {\n  opacity: 0;\n  position: absolute;\n  bottom: -55px;\n  left: 0;\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: bold;\n}\n\n.slick-slide.slick-current + .slick-active {\n  transform: scale(1.2);\n  transition: all 0.5s;\n  z-index: 1;\n  position: relative;\n}\n\n.slick-slide.slick-current + .slick-active img, .slick-slide.slick-current + .slick-active p {\n  opacity: 1;\n}\n\n.slick-slide.slick-slide img {\n  opacity: 0.3;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL291cnByb2R1Y3Qvb3VycHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3VycHJvZHVjdC9vdXJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxtQkFBQTtBQ0NSOztBREFRO0VBQ0wsc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDUyxrQkFBQTtFQUNBLGlCQUFBO0FDRVo7O0FEREc7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURDSTtFQUNJLGVBQUE7RUFDQSwrQ0FBQTtBQ0NSOztBRENJO0VBQ0ksaUJBQUE7QUNDUjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0RKOztBREVJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0FSOztBREVJO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRENRO0VBQ0ksVUFBQTtBQ0NaOztBREdPO0VBQ0MsWUFBQTtFQUNBLFlBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL291cnByb2R1Y3Qvb3VycHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXByb2R1Y3R7XG4gICAgYmFja2dyb3VuZDojZTVmMGZhO1xuICAgIHBhZGRpbmc6NjBweCAwO1xufVxuLnNlY3Rpb24tcHJvZHVjdC1kZXRhaWx7XG4gICAgaDJ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICB1bHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xuICAgICAgICBsaXtcblx0XHRcdHBhZGRpbmc6IDAgMCAxMHB4IDIwcHg7XG5cdFx0XHRsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuXHRcdFx0Jjo6YmVmb3Jle1xuXHRcdFx0XHRjb250ZW50OiBcIiBcIjtcblx0XHRcdFx0YmFja2dyb3VuZDogIzIxNGY3YTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xuXHRcdFx0XHR0b3A6OHB4O1xuXHRcdFx0XHRsZWZ0OjBweDtcblx0XHRcdFx0d2lkdGg6IDEwcHg7XG5cdFx0XHRcdGhlaWdodDoxMHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdH1cblx0XHR9XG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAtMXB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG4gICAgLnJvdyArIC5yb3d7XG4gICAgICAgIG1hcmdpbi10b3A6MTAwcHg7XG4gICAgfVxuICBcbn1cblxuLnNsaWNrLXNsaWRle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiAtMXB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgbWFyZ2luOjEycHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwe1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTotNTVweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgJi5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZXtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjVzO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGltZywgcHtcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgICAgfVxuICAgIH1cbiAgICAmLnNsaWNrLXNsaWRle1xuICAgICAgIGltZ3tcbiAgICAgICAgb3BhY2l0eTouMztcbiAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgfVxuICAgIH1cblxufVxuXG4iLCIuc2VjdGlvbi1wcm9kdWN0IHtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgcGFkZGluZzogNjBweCAwO1xufVxuXG4uc2VjdGlvbi1wcm9kdWN0LWRldGFpbCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlY3Rpb24tcHJvZHVjdC1kZXRhaWwgdWwge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnNlY3Rpb24tcHJvZHVjdC1kZXRhaWwgdWwgbGkge1xuICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLXByb2R1Y3QtZGV0YWlsIHVsIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2VjdGlvbi1wcm9kdWN0LWRldGFpbCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IC0xcHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnNlY3Rpb24tcHJvZHVjdC1kZXRhaWwgLnJvdyArIC5yb3cge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLnNsaWNrLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAtMXB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAxMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnNsaWNrLXNsaWRlIHAge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTU1cHg7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNsaWNrLXNsaWRlLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNsaWNrLXNsaWRlLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIGltZywgLnNsaWNrLXNsaWRlLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIHAge1xuICBvcGFjaXR5OiAxO1xufVxuLnNsaWNrLXNsaWRlLnNsaWNrLXNsaWRlIGltZyB7XG4gIG9wYWNpdHk6IDAuMztcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ourproduct/ourproduct.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ourproduct/ourproduct.component.ts ***!
  \****************************************************/
/*! exports provided: OurproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurproductComponent", function() { return OurproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




let OurproductComponent = class OurproductComponent {
    constructor(router, sharedservice) {
        this.router = router;
        this.sharedservice = sharedservice;
        this.slideConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        this.products = [
            { title: 'Looking for automation to drive performance and profitability' },
            { title: 'helps enterprises rapidly build the infrastructure and capabilities' },
            { title: 'Arkedge unified approach — encompassing strategy, software and managed services ' },
            { title: 'Looking for automation to drive performance and profitability' },
            { title: 'helps enterprises rapidly build the infrastructure and capabilities' },
        ];
        this.inquery = function () {
            this.router.navigateByUrl('/Contactus', { skipLocationChange: true });
        };
    }
    getUrl(i, title) {
        this.router.navigateByUrl('/productDetail', { skipLocationChange: true });
        this.sharedservice.nextMessage(i, title);
    }
    ngOnInit() {
    }
};
OurproductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
];
OurproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ourproduct',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ourproduct.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ourproduct/ourproduct.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ourproduct.component.scss */ "./src/app/ourproduct/ourproduct.component.scss")).default]
    })
], OurproductComponent);



/***/ }),

/***/ "./src/app/productDetail/productDetail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/productDetail/productDetail.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blue {\n  color: #0070c0;\n}\n\n.red {\n  color: #ff0000;\n}\n\n.green {\n  color: #70ad47;\n}\n\n.product-detail {\n  padding: 0px;\n}\n\n.product-detail img {\n  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.2);\n}\n\n.product-detail .info-bar {\n  margin-top: 30px;\n}\n\n.section-header {\n  background: #e5f0fa;\n  padding: 60px 0;\n  margin-bottom: 60px;\n  margin-top: -70px;\n}\n\nul.info-bar {\n  margin-left: 5px;\n  align-self: center;\n}\n\nul.info-bar li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n\nul.info-bar li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\nul.info-bar li p {\n  font-weight: normal;\n}\n\n.section-product .slick-slide {\n  position: relative;\n  box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  margin: 12px;\n  box-sizing: border-box;\n}\n\n.section-product .slick-slide p {\n  opacity: 0;\n  position: absolute;\n  bottom: -55px;\n  left: 0;\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: bold;\n}\n\n.section-product .slick-slide.slick-current + .slick-active {\n  transform: scale(1.2);\n  transition: all 0.5s;\n  z-index: 1;\n  position: relative;\n}\n\n.section-product .slick-slide.slick-current + .slick-active img, .section-product .slick-slide.slick-current + .slick-active p {\n  opacity: 1;\n}\n\n.section-product .slick-slide.slick-slide img {\n  opacity: 0.3;\n  height: auto;\n}\n\n.section-product h1 {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL3Byb2R1Y3REZXRhaWwvcHJvZHVjdERldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdERldGFpbC9wcm9kdWN0RGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtBQ0dKOztBREFBO0VBQ0ksWUFBQTtBQ0dKOztBREZJO0VBQ0ksK0NBQUE7QUNJUjs7QURGSTtFQUNJLGdCQUFBO0FDSVI7O0FEREE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FESEk7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNLUjs7QURKUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ01aOztBREpRO0VBQ0ksbUJBQUE7QUNNWjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0dSOztBREZRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0laOztBREZRO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0laOztBREhZO0VBQ0ksVUFBQTtBQ0toQjs7QUREVztFQUNDLFlBQUE7RUFDQSxZQUFBO0FDR1o7O0FEQ0k7RUFDSSxtQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdERldGFpbC9wcm9kdWN0RGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWV7XG4gICAgY29sb3I6IzAwNzBjMDtcbn1cbi5yZWR7XG4gICAgY29sb3I6I2ZmMDAwMDtcbn1cbi5ncmVlbntcbiAgICBjb2xvcjogIzcwYWQ0Nztcbn1cblxuLnByb2R1Y3QtZGV0YWlse1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIGltZ3tcbiAgICAgICAgYm94LXNoYWRvdzogLTFweCAycHggNXB4IDFweCByZ2IoMCAwIDAgLyAyMCUpO1xuICAgIH1cbiAgICAuaW5mby1iYXJ7XG4gICAgICAgIG1hcmdpbi10b3A6MzBweDtcbiAgICB9XG59XG4uc2VjdGlvbi1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZDojZTVmMGZhO1xuICAgIHBhZGRpbmc6NjBweCAwO1xuICAgIG1hcmdpbi1ib3R0b206NjBweDtcbiAgICBtYXJnaW4tdG9wOi03MHB4O1xufVxuXG51bC5pbmZvLWJhcntcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBsaXtcbiAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMjBweDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICY6OmJlZm9yZXtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6OHB4O1xuICAgICAgICAgICAgbGVmdDowcHg7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDoxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VjdGlvbi1wcm9kdWN0e1xuICAgIC5zbGljay1zbGlkZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2hhZG93OiAtMXB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xuICAgICAgICBtYXJnaW46MTJweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206LTU1cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgICYuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmV7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjVzO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGltZywgcHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5zbGljay1zbGlkZXtcbiAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgb3BhY2l0eTouMztcbiAgICAgICAgICAgIGhlaWdodDphdXRvO1xuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaDF7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcbiAgICB9XG59XG5cblxuIiwiLmJsdWUge1xuICBjb2xvcjogIzAwNzBjMDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjZmYwMDAwO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogIzcwYWQ0Nztcbn1cblxuLnByb2R1Y3QtZGV0YWlsIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsIGltZyB7XG4gIGJveC1zaGFkb3c6IC0xcHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnByb2R1Y3QtZGV0YWlsIC5pbmZvLWJhciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG4gIHBhZGRpbmc6IDYwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgbWFyZ2luLXRvcDogLTcwcHg7XG59XG5cbnVsLmluZm8tYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxudWwuaW5mby1iYXIgbGkge1xuICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnVsLmluZm8tYmFyIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG51bC5pbmZvLWJhciBsaSBwIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnNlY3Rpb24tcHJvZHVjdCAuc2xpY2stc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IC0xcHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDEycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uc2VjdGlvbi1wcm9kdWN0IC5zbGljay1zbGlkZSBwIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01NXB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWN0aW9uLXByb2R1Y3QgLnNsaWNrLXNsaWRlLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tcHJvZHVjdCAuc2xpY2stc2xpZGUuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmUgaW1nLCAuc2VjdGlvbi1wcm9kdWN0IC5zbGljay1zbGlkZS5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSBwIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5zZWN0aW9uLXByb2R1Y3QgLnNsaWNrLXNsaWRlLnNsaWNrLXNsaWRlIGltZyB7XG4gIG9wYWNpdHk6IDAuMztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnNlY3Rpb24tcHJvZHVjdCBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/productDetail/productDetail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/productDetail/productDetail.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _space_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../space.pipe */ "./src/app/space.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ProductDetailComponent = class ProductDetailComponent {
    constructor(sharedservice, config, modalService, router) {
        this.sharedservice = sharedservice;
        this.modalService = modalService;
        this.router = router;
        this.closeResult = '';
        this.revenueMaximizer = [
            {
                title: 'Flexible subscription offering to bundle just the right plan for your organization budget ',
            },
            {
                title: 'Responsive web application platform with rich feature modules to efficiently work on missing predictions',
            },
            {
                title: 'Powerful recommendation engine built on top of AI models assisted with rule engine to accurately identify anomalies',
            },
            {
                title: 'Inbuilt knowledge repository for data exploration and view lineages of past accounts and take quick decisions',
            },
            {
                title: 'Configurable modules to manage features efficiently by the administrator through web interface',
            },
            {
                title: 'Rich set of reports and dashboard for admin and supervisors to have holistic view of system performance',
            },
            {
                title: 'A flexible notification module to setup and manage business communication in the system',
            }
        ];
        this.studioedge = [
            {
                title: 'Highly scalable set of product modules to design, deploy and extract business insights in single integrated ecosystem',
            },
            {
                title: 'Rich set of data enrichment modules to identify data pattern, design parallel workflows for various use cases and develop end to end solution',
            },
            {
                title: 'Flexibility to build custom solutions from scratch or leverage existing AI enabled models to expedite development cycle',
            },
            {
                title: 'Version supported rich module repository to create a curated solution bundle aligned with your organizational needs',
            },
            {
                title: 'Rich dashboard to monitor solution insights in real-time and notify stakeholders for any alert when system identifies a threshold breach',
            },
            {
                title: 'Fully scaled integration capability with downstream systems to cater for business reporting consumptions or prepare further analytical models',
            }
        ];
        this.dataflow = [
            {
                title: 'Configurable feature options to build custom data pipeline relevant for business needs',
            },
            {
                title: 'A rich set of connectors integrating with various system to ingest and work on data',
            },
            {
                title: 'Provides elastic AI capability to toggle ML models as per need of your data pipeline',
            },
            {
                title: 'Powerful monitoring tool to view, analyse and act on data in real time',
            },
            {
                title: 'A rich dashboard to view data flow performance and recommendation for the optimization',
            }
        ];
        this.inquery = function () {
            this.router.navigateByUrl('/Contactus', { skipLocationChange: true });
        };
        this.slideConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        this.revenuemaximizerProd = [
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
        ];
        this.studioedgeProd = [
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
        ];
        this.dataflowProd = [
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
        ];
    }
    open(content) {
        this.modalService.open(content, { windowClass: 'staffing-popup' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngOnInit() {
        this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
        this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
    }
    title(i) {
        if (i === 1) {
            this.tabName = 'Revenue Maximizer';
        }
        else if (i === 2) {
            this.tabName = 'Studio Edge';
        }
        else if (i === 3) {
            this.tabName = 'Data Flow';
        }
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productDetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productDetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productDetail/productDetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./productDetail.component.scss */ "./src/app/productDetail/productDetail.component.scss")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _space_pipe__WEBPACK_IMPORTED_MODULE_3__["CreateSpace"]
        ]
    })
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/projectengineering/projectengineering.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/projectengineering/projectengineering.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-project-engineering {\n  padding: 0 0 70px;\n}\n\n.section-project-engineering ul li {\n  padding: 0 15px 15px;\n}\n\n.quotes {\n  background: #70b603;\n  border-radius: 0 0 50px 50px;\n  padding: 25px 30px;\n  font-size: 18px;\n  text-align: center;\n  font-weight: 600;\n  color: #fff;\n}\n\n.methodologies {\n  position: relative;\n}\n\n.methodologies .icon-circle {\n  width: 100px;\n  height: 100px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.methodologies .icon-circle i {\n  line-height: 90px;\n}\n\n.methodologies .icon-circle i svg {\n  fill: #fff;\n}\n\n.methodologies ul {\n  position: relative;\n  width: 100%;\n}\n\n.methodologies ul li {\n  float: left;\n  width: 20%;\n  padding: 50px 0;\n}\n\n.methodologies ul li ul {\n  display: none;\n  position: absolute;\n  top: 180px;\n  left: 0;\n  text-align: center;\n  width: 100%;\n}\n\n.methodologies ul li ul li {\n  float: none;\n  width: 100%;\n}\n\n.methodologies ul li h6 {\n  padding-bottom: 15px;\n}\n\n.methodologies ul li:hover .icon-circle {\n  border-color: #ffc100;\n}\n\n.methodologies ul li:hover .icon-circle svg {\n  fill: #ffc100;\n}\n\n.methodologies ul li:hover h6 {\n  color: #ffc100;\n  position: relative;\n  padding-bottom: 0;\n}\n\n.methodologies ul li:hover h6::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid #ffc100;\n  margin: 0 auto;\n  display: block;\n}\n\n.methodologies ul li:hover ul {\n  display: block;\n}\n\n.methodologies img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n}\n\n.methodologies h6, .methodologies li, .methodologies h1 {\n  color: #fff;\n  text-align: center;\n}\n\nsection.engeering-grap img {\n  width: auto;\n}\n\n.our-services-section {\n  padding: 0;\n}\n\n.our-services {\n  background: #e5f0fa;\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n.our-services .triangle {\n  background: #ffc100;\n  position: relative;\n  min-height: 400px;\n  display: flex;\n}\n\n.our-services .triangle .v-center {\n  align-self: center;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.our-services .triangle .v-center .logo-circle {\n  width: 120px;\n  height: 120px;\n  background: #0860aa;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n.our-services .triangle .v-center h5 {\n  font-size: bold;\n  margin-top: 15px;\n}\n\n.our-services .triangle::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 200px solid transparent;\n  border-bottom: 200px solid transparent;\n  border-left: 50px solid #ffc100;\n  right: -50px;\n  top: 0;\n}\n\n.our-services .v-flex {\n  display: flex;\n}\n\n.our-services ul {\n  padding: 0 0 0 100px;\n  align-self: center;\n}\n\n.our-services ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 18px;\n  position: relative;\n  font-weight: bold;\n}\n\n.our-services ul li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.manage-service-tab .app-development {\n  padding-bottom: 70px;\n}\n\n.manage-service-tab .app-development img {\n  width: auto;\n}\n\n.about-key-diff {\n  background: url('about.jpg') no-repeat bottom center #1d4b76;\n  padding: 70px 0;\n}\n\n.about-key-diff h1 {\n  color: #fff;\n  font-weight: normal;\n}\n\n.about-key-diff ul {\n  margin-top: 35px;\n}\n\n.about-key-diff ul li {\n  padding: 0 0 20px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  color: #fff;\n}\n\n.about-key-diff ul li::before {\n  content: \" \";\n  background: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.v-flex img {\n  align-self: center;\n}\n\n.skyblue {\n  background: #4d90dd;\n  color: #4d90dd;\n}\n\n.pink {\n  background: #e7534b;\n  color: #e7534b;\n}\n\n.orange {\n  background: #f09836;\n  color: #f09836;\n}\n\n.limegreen {\n  background: #349889;\n  color: #349889;\n}\n\n.purple {\n  background: #5b4da0;\n  color: #5b4da0;\n}\n\n.ui-ux-process h3 {\n  background: none !important;\n}\n\n.ui-ux-process .card {\n  border-radius: 0px;\n  border: none;\n  padding-right: 10px;\n}\n\n.ui-ux-info .panel {\n  height: 100%;\n  border-radius: 15px;\n  padding: 25px;\n}\n\n.ui-ux-info .panel h5, .ui-ux-info .panel p {\n  margin: 0;\n  color: #fff;\n}\n\n.ui-ux-info .panel p {\n  white-space: pre;\n  margin-top: 10px;\n}\n\n.ui-ux-info h5 {\n  font-weight: bold;\n  margin: 30px 0 15px;\n}\n\n.ui-ux-info svg {\n  fill: #214f7a;\n}\n\n.ui-ux-process {\n  padding: 30px 0;\n}\n\n.ui-ux-process .icon-circle {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #e5f0fa;\n}\n\n.ui-ux-process .icon-circle i {\n  line-height: 135px;\n  margin: 0 auto;\n  display: table;\n}\n\n.ui-ux-process .icon-circle i svg {\n  fill: #214f7a;\n}\n\n.ui-ux-process .row {\n  margin-bottom: 40px;\n}\n\n.ui-ux-process .row h6 {\n  font-weight: bold;\n}\n\n.data-eng .icon-circle {\n  margin-bottom: 25px;\n}\n\n.data-eng .panel-body {\n  margin-bottom: 25px;\n}\n\n.qa-testing img {\n  width: auto;\n  vertical-align: top;\n  margin-left: 70px;\n}\n\n.manage-space {\n  margin: 30px 0;\n}\n\n.qa-info {\n  margin-bottom: 50px;\n}\n\n.qa-testing-info {\n  margin-bottom: 40px;\n}\n\n.qa-testing-info h6 {\n  font-weight: bold;\n}\n\n.qa-testing-info .icon-circle {\n  width: 250px;\n  height: 250px;\n  background: #e5f0fa;\n  margin: 0 auto;\n  align-self: center;\n  border-radius: 50%;\n}\n\n.qa-testing-info .icon-circle i {\n  line-height: 250px;\n  margin: 0 auto;\n  display: table;\n}\n\n.qa-testing-info .icon-circle i svg {\n  fill: #214f7a;\n  width: 150px;\n  height: 150px;\n}\n\n.qa-testing-info ul.qa-test-info {\n  margin-left: 5px;\n  align-self: center;\n}\n\n.qa-testing-info ul.qa-test-info li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n\n.qa-testing-info ul.qa-test-info li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n@media (max-width: 576px) {\n  .methodologies ul {\n    position: static;\n  }\n  .methodologies ul li {\n    width: 100%;\n    position: relative;\n  }\n\n  .app-development img {\n    width: 100%;\n  }\n\n  .qa-testing img {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL3Byb2plY3RlbmdpbmVlcmluZy9wcm9qZWN0ZW5naW5lZXJpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RlbmdpbmVlcmluZy9wcm9qZWN0ZW5naW5lZXJpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREdRO0VBQ0ksb0JBQUE7QUNBWjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QURFSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBUjs7QURDUTtFQUNJLGlCQUFBO0FDQ1o7O0FEQVk7RUFDSSxVQUFBO0FDRWhCOztBREVHO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDUjs7QURBUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRVo7O0FERFk7RUFDRyxXQUFBO0VBQ0EsV0FBQTtBQ0dmOztBREFRO0VBQ0ksb0JBQUE7QUNFWjs7QURDWTtFQUVJLHFCQUFBO0FDQWhCOztBRENnQjtFQUNJLGFBQUE7QUNDcEI7O0FERVk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FoQjs7QURDZ0I7RUFDSSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NwQjs7QURHWTtFQUNJLGNBQUE7QUNEaEI7O0FETUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDSlI7O0FETUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNKUjs7QURTUTtFQUNJLFdBQUE7QUNOWjs7QURXQTtFQUNJLFVBQUE7QUNSSjs7QURXQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1JKOztBRFNJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ1BSOztBRFFRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNOWjs7QURPWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNMaEI7O0FET1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNMaEI7O0FEUVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0FDTlo7O0FEU0k7RUFDSSxhQUFBO0FDUFI7O0FEU0k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDUFI7O0FEUVE7RUFDTCxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNTLGtCQUFBO0VBQ0EsaUJBQUE7QUNOWjs7QURPRztFQUNDLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFdBO0VBQ0ksb0JBQUE7QUNSSjs7QURTSTtFQUNJLFdBQUE7QUNQUjs7QURZQTtFQUNJLDREQUFBO0VBQ0EsZUFBQTtBQ1RKOztBRFVJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDUlI7O0FEVUk7RUFDRixnQkFBQTtBQ1JGOztBRFNRO0VBQ0wsc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDUyxrQkFBQTtFQUNBLFdBQUE7QUNQWjs7QURRRztFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ05KOztBRGFJO0VBQ0ksa0JBQUE7QUNWUjs7QURvQkE7RUFDSSxtQkFQSztFQVFMLGNBUks7QUNUVDs7QURtQkE7RUFDSSxtQkFWRTtFQVdGLGNBWEU7QUNMTjs7QURrQkE7RUFDSSxtQkFiSTtFQWNKLGNBZEk7QUNEUjs7QURpQkE7RUFDSSxtQkFoQk87RUFpQlAsY0FqQk87QUNHWDs7QURnQkE7RUFDSSxtQkFuQkk7RUFvQkosY0FwQkk7QUNPUjs7QURpQkk7RUFDSSwyQkFBQTtBQ2RSOztBRGdCSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDZFI7O0FEbUJBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ2hCSjs7QURpQkk7RUFDSSxTQUFBO0VBQ0EsV0FBQTtBQ2ZSOztBRGlCSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNmUjs7QURrQkk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDaEJSOztBRGtCSTtFQUNJLGFBQUE7QUNoQlI7O0FEb0JBO0VBQ0ksZUFBQTtBQ2pCSjs7QURrQkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNoQlI7O0FEaUJRO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ2ZaOztBRGdCWTtFQUNJLGFBQUE7QUNkaEI7O0FEa0JJO0VBQ0ksbUJBQUE7QUNoQlI7O0FEaUJRO0VBQ0ksaUJBQUE7QUNmWjs7QURxQkk7RUFDSSxtQkFBQTtBQ2xCUjs7QURvQkk7RUFDSSxtQkFBQTtBQ2xCUjs7QUR1Qkk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ3BCUjs7QUR3QkE7RUFDSSxjQUFBO0FDckJKOztBRHdCQTtFQUNJLG1CQUFBO0FDckJKOztBRHdCQTtFQUNJLG1CQUFBO0FDckJKOztBRHNCSTtFQUNJLGlCQUFBO0FDcEJSOztBRHVCSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3JCUjs7QURzQlE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDcEJaOztBRHFCWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ25CaEI7O0FEdUJJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ3JCUjs7QURzQlE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNwQlo7O0FEcUJZO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbkJoQjs7QUQ0QkE7RUFFUTtJQUNJLGdCQUFBO0VDMUJWO0VEMkJTO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VDekJiOztFRDhCTTtJQUNJLFdBQUE7RUMzQlY7O0VEK0JNO0lBQ0ssZ0JBQUE7RUM1Qlg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RlbmdpbmVlcmluZy9wcm9qZWN0ZW5naW5lZXJpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1wcm9qZWN0LWVuZ2luZWVyaW5ne1xuICAgIHBhZGRpbmc6MCAwIDcwcHg7XG59XG4uc2VjdGlvbi1wcm9qZWN0LWVuZ2luZWVyaW5ne1xuICAgdWx7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgcGFkZGluZzowIDE1cHggMTVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnF1b3Rlc3tcbiAgICBiYWNrZ3JvdW5kOiAjNzBiNjAzO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1MHB4IDUwcHg7XG4gICAgcGFkZGluZzogMjVweCAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjojZmZmO1xufVxuLm1ldGhvZG9sb2dpZXN7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5pY29uLWNpcmNsZXtcbiAgICAgICAgd2lkdGg6MTAwcHg7XG4gICAgICAgIGhlaWdodDoxMDBweDtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgaXtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgc3Zne1xuICAgICAgICAgICAgICAgIGZpbGw6I2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgIHVse1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGxpe1xuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICB3aWR0aDoyMCU7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAgICAgdWx7XG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6MTgwcHg7XG4gICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICBmbG9hdDpub25lO1xuICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoNntcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIC5pY29uLWNpcmNsZVxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6I2ZmYzEwMDtcbiAgICAgICAgICAgICAgICBzdmd7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6I2ZmYzEwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNntcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZjMTAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjA7XG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwOyBcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZmZjMTAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICB1bHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgfVxuICAgIGltZ3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgbGVmdDowcHg7XG4gICAgICAgIHRvcDowcHg7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICBoNiwgbGksIGgxe1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICB9XG59XG5zZWN0aW9ue1xuICAgJi5lbmdlZXJpbmctZ3JhcHtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6YXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm91ci1zZXJ2aWNlcy1zZWN0aW9ue1xuICAgIHBhZGRpbmc6MDtcbn1cblxuLm91ci1zZXJ2aWNlc3tcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC50cmlhbmdsZXtcbiAgICAgICAgYmFja2dyb3VuZDojZmZjMTAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6NDAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC52LWNlbnRlcntcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgLmxvZ28tY2lyY2xle1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwODYwYWE7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOmJvbGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6OmFmdGVye1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAwOyBcbiAgICAgICAgICAgIGhlaWdodDogMDsgXG4gICAgICAgICAgICBib3JkZXItdG9wOiAyMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDIwMHB4IHNvbGlkIHRyYW5zcGFyZW50OyBcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OjUwcHggc29saWQgI2ZmYzEwMDtcbiAgICAgICAgICAgIHJpZ2h0Oi01MHB4O1xuICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnYtZmxleHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgdWx7XG4gICAgICAgIHBhZGRpbmc6MCAwIDAgMTAwcHg7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgbGl7XG5cdFx0XHRwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xuXHRcdFx0bGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHQmOjpiZWZvcmV7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XG5cdFx0XHRcdHRvcDo4cHg7XG5cdFx0XHRcdGxlZnQ6MHB4O1xuXHRcdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdFx0aGVpZ2h0OjEwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0fVxuXHRcdH1cbiAgICB9XG59XG4ubWFuYWdlLXNlcnZpY2UtdGFie1xuLmFwcC1kZXZlbG9wbWVudHtcbiAgICBwYWRkaW5nLWJvdHRvbTo3MHB4O1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6YXV0bztcbiAgICB9XG59XG59XG5cbi5hYm91dC1rZXktZGlmZntcbiAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LmpwZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXIgIzFkNGI3NjtcbiAgICBwYWRkaW5nOjcwcHggMDtcbiAgICBoMXtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgIH1cbiAgICB1bHtcblx0XHRtYXJnaW4tdG9wOjM1cHg7XG4gICAgICAgIGxpe1xuXHRcdFx0cGFkZGluZzogMCAwIDIwcHggMjBweDtcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XG5cdFx0XHQmOjpiZWZvcmV7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiIFwiO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XG5cdFx0XHRcdHRvcDo4cHg7XG5cdFx0XHRcdGxlZnQ6MHB4O1xuXHRcdFx0XHR3aWR0aDogMTBweDsgXG5cdFx0XHRcdGhlaWdodDoxMHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdH1cblx0XHR9XG4gICAgfVxufVxuXG4udi1mbGV4e1xuICAgIGltZ3tcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbn1cblxuJHNreWJsdWU6IzRkOTBkZDtcbiRwaW5rOiNlNzUzNGI7XG4kb3JhbmdlOiNmMDk4MzY7XG4kbGltZWdyZWVuOiMzNDk4ODk7XG4kcHVycGxlOiM1YjRkYTA7XG5cbi5za3libHVle1xuICAgIGJhY2tncm91bmQ6JHNreWJsdWU7XG4gICAgY29sb3I6JHNreWJsdWU7XG59XG4ucGlua3tcbiAgICBiYWNrZ3JvdW5kOiRwaW5rO1xuICAgIGNvbG9yOiRwaW5rO1xufVxuLm9yYW5nZXtcbiAgICBiYWNrZ3JvdW5kOiRvcmFuZ2U7XG4gICAgY29sb3I6JG9yYW5nZTtcbn1cbi5saW1lZ3JlZW57XG4gICAgYmFja2dyb3VuZDokbGltZWdyZWVuO1xuICAgIGNvbG9yOiRsaW1lZ3JlZW47XG59XG4ucHVycGxle1xuICAgIGJhY2tncm91bmQ6JHB1cnBsZTtcbiAgICBjb2xvcjokcHVycGxlO1xufVxuXG4udWktdXgtcHJvY2Vzc3tcbiAgICBoM3tcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2FyZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgcGFkZGluZy1yaWdodDoxMHB4O1xuICAgIH1cbn1cblxuLnVpLXV4LWluZm97XG4ucGFuZWx7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgIHBhZGRpbmc6MjVweDtcbiAgICBoNSwgcHtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICB9XG59ICAgIFxuICAgIGg1e1xuICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICBtYXJnaW46MzBweCAwIDE1cHg7XG4gICAgfVxuICAgIHN2Z3tcbiAgICAgICAgZmlsbDojMjE0ZjdhO1xuICAgIH1cbn1cblxuLnVpLXV4LXByb2Nlc3N7XG4gICAgcGFkZGluZzozMHB4IDA7XG4gICAgLmljb24tY2lyY2xle1xuICAgICAgICB3aWR0aDoxNTBweDtcbiAgICAgICAgaGVpZ2h0OjE1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgYmFja2dyb3VuZDojZTVmMGZhO1xuICAgICAgICBpe1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgIHN2Z3tcbiAgICAgICAgICAgICAgICBmaWxsOiMyMTRmN2E7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJvd3tcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xuICAgICAgICBoNntcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kYXRhLWVuZ3tcbiAgICAuaWNvbi1jaXJjbGV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuICAgIC5wYW5lbC1ib2R5e1xuICAgICAgICBtYXJnaW4tYm90dG9tOjI1cHg7XG4gICAgfVxufVxuXG4ucWEtdGVzdGluZ3tcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOmF1dG87XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjcwcHg7XG4gICAgfVxufVxuXG4ubWFuYWdlLXNwYWNle1xuICAgIG1hcmdpbjozMHB4IDA7XG59XG5cbi5xYS1pbmZve1xuICAgIG1hcmdpbi1ib3R0b206NTBweDtcbn1cblxuLnFhLXRlc3RpbmctaW5mb3tcbiAgICBtYXJnaW4tYm90dG9tOjQwcHg7XG4gICAgaDZ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgfVxuXG4gICAgLmljb24tY2lyY2xle1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgaXtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgICBzdmd7XG4gICAgICAgICAgICAgICAgZmlsbDogIzIxNGY3YTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1bC5xYS10ZXN0LWluZm97XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAmOjpiZWZvcmV7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6OHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDoxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XG4gICAgLm1ldGhvZG9sb2dpZXN7XG4gICAgICAgIHVse1xuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5hcHAtZGV2ZWxvcG1lbnR7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnFhLXRlc3Rpbmd7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuc2VjdGlvbi1wcm9qZWN0LWVuZ2luZWVyaW5nIHtcbiAgcGFkZGluZzogMCAwIDcwcHg7XG59XG5cbi5zZWN0aW9uLXByb2plY3QtZW5naW5lZXJpbmcgdWwgbGkge1xuICBwYWRkaW5nOiAwIDE1cHggMTVweDtcbn1cblxuLnF1b3RlcyB7XG4gIGJhY2tncm91bmQ6ICM3MGI2MDM7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1MHB4IDUwcHg7XG4gIHBhZGRpbmc6IDI1cHggMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWV0aG9kb2xvZ2llcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZXRob2RvbG9naWVzIC5pY29uLWNpcmNsZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tZXRob2RvbG9naWVzIC5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG59XG4ubWV0aG9kb2xvZ2llcyAuaWNvbi1jaXJjbGUgaSBzdmcge1xuICBmaWxsOiAjZmZmO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLm1ldGhvZG9sb2dpZXMgdWwgbGkgdWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTgwcHg7XG4gIGxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaSB1bCBsaSB7XG4gIGZsb2F0OiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpIGg2IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciAuaWNvbi1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICNmZmMxMDA7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciAuaWNvbi1jaXJjbGUgc3ZnIHtcbiAgZmlsbDogI2ZmYzEwMDtcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpOmhvdmVyIGg2IHtcbiAgY29sb3I6ICNmZmMxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ubWV0aG9kb2xvZ2llcyB1bCBsaTpob3ZlciBoNjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNmZmMxMDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZXRob2RvbG9naWVzIHVsIGxpOmhvdmVyIHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWV0aG9kb2xvZ2llcyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuLm1ldGhvZG9sb2dpZXMgaDYsIC5tZXRob2RvbG9naWVzIGxpLCAubWV0aG9kb2xvZ2llcyBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24uZW5nZWVyaW5nLWdyYXAgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5vdXItc2VydmljZXMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5vdXItc2VydmljZXMge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm91ci1zZXJ2aWNlcyAudHJpYW5nbGUge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm91ci1zZXJ2aWNlcyAudHJpYW5nbGUgLnYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm91ci1zZXJ2aWNlcyAudHJpYW5nbGUgLnYtY2VudGVyIC5sb2dvLWNpcmNsZSB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZDogIzA4NjBhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5vdXItc2VydmljZXMgLnRyaWFuZ2xlIC52LWNlbnRlciBoNSB7XG4gIGZvbnQtc2l6ZTogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5vdXItc2VydmljZXMgLnRyaWFuZ2xlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMjAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDIwMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjZmZjMTAwO1xuICByaWdodDogLTUwcHg7XG4gIHRvcDogMDtcbn1cbi5vdXItc2VydmljZXMgLnYtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ub3VyLXNlcnZpY2VzIHVsIHtcbiAgcGFkZGluZzogMCAwIDAgMTAwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5vdXItc2VydmljZXMgdWwgbGkge1xuICBwYWRkaW5nOiAwIDAgMjBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5vdXItc2VydmljZXMgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjMjE0ZjdhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1hbmFnZS1zZXJ2aWNlLXRhYiAuYXBwLWRldmVsb3BtZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG4ubWFuYWdlLXNlcnZpY2UtdGFiIC5hcHAtZGV2ZWxvcG1lbnQgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5hYm91dC1rZXktZGlmZiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LmpwZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXIgIzFkNGI3NjtcbiAgcGFkZGluZzogNzBweCAwO1xufVxuLmFib3V0LWtleS1kaWZmIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYWJvdXQta2V5LWRpZmYgdWwge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLmFib3V0LWtleS1kaWZmIHVsIGxpIHtcbiAgcGFkZGluZzogMCAwIDIwcHggMjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uYWJvdXQta2V5LWRpZmYgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnYtZmxleCBpbWcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5za3libHVlIHtcbiAgYmFja2dyb3VuZDogIzRkOTBkZDtcbiAgY29sb3I6ICM0ZDkwZGQ7XG59XG5cbi5waW5rIHtcbiAgYmFja2dyb3VuZDogI2U3NTM0YjtcbiAgY29sb3I6ICNlNzUzNGI7XG59XG5cbi5vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZjA5ODM2O1xuICBjb2xvcjogI2YwOTgzNjtcbn1cblxuLmxpbWVncmVlbiB7XG4gIGJhY2tncm91bmQ6ICMzNDk4ODk7XG4gIGNvbG9yOiAjMzQ5ODg5O1xufVxuXG4ucHVycGxlIHtcbiAgYmFja2dyb3VuZDogIzViNGRhMDtcbiAgY29sb3I6ICM1YjRkYTA7XG59XG5cbi51aS11eC1wcm9jZXNzIGgzIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuLnVpLXV4LXByb2Nlc3MgLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnVpLXV4LWluZm8gLnBhbmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAyNXB4O1xufVxuLnVpLXV4LWluZm8gLnBhbmVsIGg1LCAudWktdXgtaW5mbyAucGFuZWwgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZmY7XG59XG4udWktdXgtaW5mbyAucGFuZWwgcCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udWktdXgtaW5mbyBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDMwcHggMCAxNXB4O1xufVxuLnVpLXV4LWluZm8gc3ZnIHtcbiAgZmlsbDogIzIxNGY3YTtcbn1cblxuLnVpLXV4LXByb2Nlc3Mge1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG4udWktdXgtcHJvY2VzcyAuaWNvbi1jaXJjbGUge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbn1cbi51aS11eC1wcm9jZXNzIC5pY29uLWNpcmNsZSBpIHtcbiAgbGluZS1oZWlnaHQ6IDEzNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogdGFibGU7XG59XG4udWktdXgtcHJvY2VzcyAuaWNvbi1jaXJjbGUgaSBzdmcge1xuICBmaWxsOiAjMjE0ZjdhO1xufVxuLnVpLXV4LXByb2Nlc3MgLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4udWktdXgtcHJvY2VzcyAucm93IGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kYXRhLWVuZyAuaWNvbi1jaXJjbGUge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmRhdGEtZW5nIC5wYW5lbC1ib2R5IHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnFhLXRlc3RpbmcgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuXG4ubWFuYWdlLXNwYWNlIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbi5xYS1pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnFhLXRlc3RpbmctaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucWEtdGVzdGluZy1pbmZvIGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucWEtdGVzdGluZy1pbmZvIC5pY29uLWNpcmNsZSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnFhLXRlc3RpbmctaW5mbyAuaWNvbi1jaXJjbGUgaSB7XG4gIGxpbmUtaGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnFhLXRlc3RpbmctaW5mbyAuaWNvbi1jaXJjbGUgaSBzdmcge1xuICBmaWxsOiAjMjE0ZjdhO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG4ucWEtdGVzdGluZy1pbmZvIHVsLnFhLXRlc3QtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5xYS10ZXN0aW5nLWluZm8gdWwucWEtdGVzdC1pbmZvIGxpIHtcbiAgcGFkZGluZzogMCAwIDEwcHggMjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucWEtdGVzdGluZy1pbmZvIHVsLnFhLXRlc3QtaW5mbyBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1ldGhvZG9sb2dpZXMgdWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgLm1ldGhvZG9sb2dpZXMgdWwgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5hcHAtZGV2ZWxvcG1lbnQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5xYS10ZXN0aW5nIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/projectengineering/projectengineering.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/projectengineering/projectengineering.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectengineeringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectengineeringComponent", function() { return ProjectengineeringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



let ProjectengineeringComponent = class ProjectengineeringComponent {
    constructor(sharedservice) {
        this.sharedservice = sharedservice;
        this.solution = [
            {
                title: 'Idea',
                info: 'Our idealogy text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
                icon: '#icon_Idea'
            },
            {
                title: 'Concept',
                info: 'Concept text will come, Lorem ipsum dolor sit.',
                icon: '#icon_Concept'
            },
            {
                title: 'Design',
                info: 'Design text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
                icon: '#icon_Design'
            },
            {
                title: 'Develop',
                info: 'Develop text will come, Lorem ipsum dolor.',
                icon: '#icon_Develop'
            },
            {
                title: 'Test',
                info: 'Test text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
                icon: '#icon_Test'
            }
        ];
        this.keydiff = [
            { list: 'New application development' },
            { list: 'Existing application enhancement' },
            { list: 'Application maintenance' },
            { list: 'Application migration' },
            { list: 'Production and post production support' },
            { list: 'Application testing' }
        ];
        this.uiUxInfo = [
            { title: 'Strategy',
                description: `Stakeholder Discusstions
Product Vision / Goals
Brand Strategy
Measure of Success
Project Priority`,
                color: "purple"
            },
            { title: 'Discovery',
                description: `Bysiness Requirements
Analytics Review
Content Interviews
Surveys
User Testing`,
                color: "orange"
            },
            { title: 'Analysis',
                description: `Use Cases
Persona Creation
Story Boards
Experience Map
Workflow Diagram`,
                color: "pink"
            },
            { title: 'Design',
                description: `Mood Board
Sitemap
Sketching
Wireframing
Prototyping
Usertesting`,
                color: "limegreen"
            },
            { title: 'Production',
                description: `Prototyping
Beta Launch
User Testing
Release / Launch`,
                color: "skyblue"
            }
        ];
        this.uiUxProcess = [
            { title: 'Set Design Strategy',
                description: `Strategy is important from the outset because it articulates the brand, guiding principles, and long-term vision of an organisation. The strategy underpinning a UX project will shape the goals of the project—what the organisation is hoping to achieve with the project, how its success should be measured, and what priority it should have in the grand scheme of things.`,
                color: "purple",
            },
            { title: 'Research',
                description: `Often referred to as the Discovery phase, the Research phase is probably the most variable between projects. Complex projects will comprise significant user and competitor research activities, while small startup websites may skip all research activities other than some informal interviews and a survey. In many people’s eyes, the Research phase is key to creating an informed user experience, however it is also the phase most often skipped—especially by proponents of a “Lean UX” approach.`,
                color: "orange"
            },
            { title: 'Analysis',
                description: `The aim of the Analysis phase is to draw insights from data collected during the Research phase. Capturing, organising and making inferences from the “what” can help UX Designers begin to understand the “why”. Communicating the designer’s understanding back to end-users helps to confirm that any assumptions being made are valid.`,
                color: "pink"
            },
            { title: 'Design',
                description: `The Design phase of a UX project is collaborative (involving input and ideas from different people) and iterative (meaning that it cycles back upon itself to validate ideas and assumptions). Building on the user feedback loop established in previous phases, the premise of the Design phase is to put ideas in front of users, get their feedback, refine them, and repeat. These ideas may be represented by paper prototypes, interactive wireframes, or semi-functioning prototypes, all deliberately created in low-fidelity to delay any conversation relating to graphic identity, branding or visual details.`,
                color: "limegreen"
            },
            { title: 'Production',
                description: `The Production phase is where the high-fidelity design is fleshed out, content and digital assets are created, and a high-fidelity version of the product is validated with stakeholders and end-users through user testing sessions. The role of the UX Designer shifts from creating and validating ideas to collaborating with developers to guide and champion the vision.`,
                color: "skyblue"
            }
        ];
        this.dataEngi = [
            {
                icon: '#icon_daycare',
                title: 'Advisory & Architecture Design',
                description: 'Leverage from Scalable Enterprise Data Architecture Models'
            },
            {
                icon: '#icon_iteration',
                title: 'Data Analytics & BI Enablement',
                description: 'Leverage from an enterprise-ready Business Intelligence Platform'
            },
            {
                icon: '#icon_explor',
                title: 'Data Management & Governance',
                description: 'Deploy Effective Data Governance Solutions'
            },
            {
                icon: '#icon_explor',
                title: 'Data Movement & ETL',
                description: 'Collect, Combine and Synthesize your enterprise data at speed'
            },
            {
                icon: '#icon_explor',
                title: 'ML Engineering',
                description: 'Build and Automate a full stack of Machine Learning applications'
            },
            {
                icon: '#icon_explor',
                title: 'ML EngineeringData & Analytics Platforms Support',
                description: 'Configure, Implement, and Support Big Data and Cloud Infrastructure'
            }
        ];
        this.qaInfo = [
            {
                title: 'Cost of the Quality',
                info: 'For optimal return on investment the rule is fix bugs before the release, not after. Smart technology companies know that instead of focusing on patching defects, they must ensure that defects are taken care of before the consumer finds them. Well planned and executed test engineering not only reduces the risks of defects, but helps to ensure project costs stay within budget and timeframe.'
            },
            {
                title: 'Testing Categories / Types',
                info: 'Arkedge Software Testing Services offerings are based on disciplined test methodologies and processes, state of the art infrastructure and industry leading tools, as well as highly skilled and experienced professional staff.'
            },
        ];
        this.qafunctionTest = [
            { info: 'Unit Testing' },
            { info: 'Smoke / Sanity Testing' },
            { info: 'ntegration Testing' },
            { info: 'Interface & Usability Testing' },
            { info: 'System testing' },
            { info: 'Regression Testing' },
            { info: 'User Acceptance Testing' }
        ];
        this.qanonfunctionTest = [
            { info: 'Load & Performance Testing' },
            { info: 'Stress & Volume Testing' },
            { info: 'Security Testing' },
            { info: 'Interoperability Testing' },
            { info: 'Reliability / Availability Test' },
            { info: 'Installation Testing' },
            { info: 'Compatibility Testing' }
        ];
        this.qalabfunctionTest = [
            { info: 'Unit Test' },
            { info: 'Functional Test' },
            { info: 'Regression Test' },
            { info: 'Test Data Creation' },
            { info: 'Load Testing' },
            { info: 'Stress Testing' },
            { info: 'Volume Testing' }
        ];
    }
    ngOnInit() {
        this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
        this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
    }
    title(i) {
        if (i === 1) {
            this.tabName = 'Product Engineering';
        }
        else if (i === 2) {
            this.tabName = 'Application Development';
        }
        else if (i === 3) {
            this.tabName = 'Data Engineering';
        }
        else if (i === 4) {
            this.tabName = 'UX/UI Development';
        }
        else if (i === 5) {
            this.tabName = 'Software Testing & QA';
        }
    }
};
ProjectengineeringComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
];
ProjectengineeringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projectengineering',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectengineering.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projectengineering/projectengineering.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectengineering.component.scss */ "./src/app/projectengineering/projectengineering.component.scss")).default]
    })
], ProjectengineeringComponent);



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SharedService = class SharedService {
    constructor() {
        this.urlID = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ Id: '1', name: 'title' });
        this.sharedMessage = this.urlID.asObservable();
    }
    nextMessage(Id, name) {
        this.urlID.next({ Id, name });
        window.scrollTo(0, 0);
    }
};
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SharedService);



/***/ }),

/***/ "./src/app/sitemap/sitemap.component.scss":
/*!************************************************!*\
  !*** ./src/app/sitemap/sitemap.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpdGVtYXAvc2l0ZW1hcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/sitemap/sitemap.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sitemap/sitemap.component.ts ***!
  \**********************************************/
/*! exports provided: SitemapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemapComponent", function() { return SitemapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SitemapComponent = class SitemapComponent {
    constructor() { }
    ngOnInit() {
    }
};
SitemapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sitemap',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sitemap.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sitemap/sitemap.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sitemap.component.scss */ "./src/app/sitemap/sitemap.component.scss")).default]
    })
], SitemapComponent);



/***/ }),

/***/ "./src/app/space.pipe.module.ts":
/*!**************************************!*\
  !*** ./src/app/space.pipe.module.ts ***!
  \**************************************/
/*! exports provided: CreateSpacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSpacePipe", function() { return CreateSpacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _space_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space.pipe */ "./src/app/space.pipe.ts");




let CreateSpacePipe = class CreateSpacePipe {
};
CreateSpacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_space_pipe__WEBPACK_IMPORTED_MODULE_3__["CreateSpace"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_space_pipe__WEBPACK_IMPORTED_MODULE_3__["CreateSpace"]] // <---
    })
], CreateSpacePipe);



/***/ }),

/***/ "./src/app/space.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/space.pipe.ts ***!
  \*******************************/
/*! exports provided: CreateSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSpace", function() { return CreateSpace; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateSpace = class CreateSpace {
    transform(value) {
        let newStr = value;
        newStr = newStr.replace(/([A-Z])/g, ' $1').trim();
        return newStr;
    }
};
CreateSpace = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'createSpace' })
], CreateSpace);



/***/ }),

/***/ "./src/app/staffing/staffing.component.scss":
/*!**************************************************!*\
  !*** ./src/app/staffing/staffing.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blue {\n  color: #0070c0;\n}\n\n.red {\n  color: #ff0000;\n}\n\n.green {\n  color: #70ad47;\n}\n\n.section-staffing {\n  padding: 0 0 70px;\n}\n\n.section-staffing p {\n  margin: 0;\n  padding: 0;\n}\n\n.section-staffing .col-sm-12:not(:first-child) {\n  padding-top: 60px;\n}\n\n.section-staffing .section-header {\n  background: #e5f0fa;\n  padding: 60px 0;\n  margin-bottom: 60px;\n  margin-top: -70px;\n}\n\n.section-staffing .panel {\n  position: relative;\n  margin-bottom: 60px;\n}\n\n.section-staffing .panel.left {\n  padding-right: 175px;\n}\n\n.section-staffing .panel.left .icon-circle {\n  right: 0;\n}\n\n.section-staffing .panel.right {\n  padding-left: 175px;\n}\n\n.section-staffing .panel.right .icon-circle {\n  left: 0;\n}\n\n.section-staffing .panel .icon-circle {\n  position: absolute;\n  top: 0;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #e5f0fa;\n}\n\n.section-staffing .panel .icon-circle i {\n  line-height: 135px;\n  margin: 0 auto;\n  display: table;\n}\n\n.section-staffing .panel .icon-circle i svg {\n  fill: #214f7a;\n}\n\nul.info-bar {\n  margin-left: 5px;\n  align-self: center;\n}\n\nul.info-bar li {\n  padding: 0 0 10px 20px;\n  list-style: none outside;\n  font-size: 16px;\n  position: relative;\n  font-weight: bold;\n}\n\nul.info-bar li::before {\n  content: \" \";\n  background: #214f7a;\n  font-weight: bold;\n  position: absolute;\n  top: 8px;\n  left: 0px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\nul.info-bar li p {\n  font-weight: normal;\n}\n\n.services-provided {\n  padding-top: 0;\n}\n\n.services-provided .panel {\n  position: relative;\n  border: 1px solid #ccc;\n  margin-top: 30px;\n}\n\n.services-provided .panel .panel-footer {\n  position: absolute;\n  bottom: 25px;\n  width: 100%;\n}\n\n.services-provided .panel .panel-footer .btn {\n  background: rgba(255, 255, 255, 0.8);\n  color: #555;\n  display: block;\n  margin: 0 auto;\n}\n\n.comp-methodology ul.info-bar li::before {\n  background: none;\n  border: 1px solid #214f7a;\n}\n\n.best-staffing, .values {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.features .info-bar {\n  margin-left: 20px;\n}\n\n.features + .features {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL3N0YWZmaW5nL3N0YWZmaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGFmZmluZy9zdGFmZmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0FDSUo7O0FESEk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0tSOztBREFJO0VBQ0ksaUJBQUE7QUNFUjs7QURDQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURDSTtFQUNJLG9CQUFBO0FDQ1I7O0FEQVM7RUFDRyxRQUFBO0FDRVo7O0FEQ0k7RUFDSSxtQkFBQTtBQ0NSOztBREFTO0VBQ0csT0FBQTtBQ0VaOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ1I7O0FEQVE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRVo7O0FERFk7RUFDSSxhQUFBO0FDR2hCOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREdJO0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRFI7O0FERVE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBWjs7QURFUTtFQUNJLG1CQUFBO0FDQVo7O0FES0E7RUFDSSxjQUFBO0FDRko7O0FER0k7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNEUjs7QURFUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBWjs7QURDWTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ2hCOztBRFNXO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ05mOztBRFlBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ1RKOztBRFlHO0VBQ0MsaUJBQUE7QUNUSjs7QURXRztFQUNJLGdCQUFBO0FDVFAiLCJmaWxlIjoic3JjL2FwcC9zdGFmZmluZy9zdGFmZmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVle1xuICAgIGNvbG9yOiMwMDcwYzA7XG59XG4ucmVke1xuICAgIGNvbG9yOiNmZjAwMDA7XG59XG4uZ3JlZW57XG4gICAgY29sb3I6ICM3MGFkNDc7XG59XG4uc2VjdGlvbi1zdGFmZmluZ3tcbiAgICBwYWRkaW5nOjAgMCA3MHB4O1xuICAgIHB7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuXG5cbi5jb2wtc20tMTJ7XG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICAgICAgcGFkZGluZy10b3A6NjBweDtcbiAgICB9ICBcbn1cbi5zZWN0aW9uLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kOiNlNWYwZmE7XG4gICAgcGFkZGluZzo2MHB4IDA7XG4gICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xuICAgIG1hcmdpbi10b3A6LTcwcHg7XG59XG5cbi5wYW5lbHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOjYwcHg7XG4gICAgJi5sZWZ0e1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OjE3NXB4O1xuICAgICAgICAgLmljb24tY2lyY2xle1xuICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLnJpZ2h0e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MTc1cHg7XG4gICAgICAgICAuaWNvbi1jaXJjbGV7XG4gICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmljb24tY2lyY2xle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDowO1xuICAgICAgICB3aWR0aDoxNTBweDtcbiAgICAgICAgaGVpZ2h0OjE1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgYmFja2dyb3VuZDojZTVmMGZhO1xuICAgICAgICBpe1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgIHN2Z3tcbiAgICAgICAgICAgICAgICBmaWxsOiMyMTRmN2E7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG59XG5cblxudWwuaW5mby1iYXJ7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbGl7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAxMHB4IDIwcHg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAmOjpiZWZvcmV7XG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgdG9wOjhweDtcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6MTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlcnZpY2VzLXByb3ZpZGVke1xuICAgIHBhZGRpbmctdG9wOjA7XG4gICAgLnBhbmVse1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xuICAgICAgICAucGFuZWwtZm9vdGVye1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAuYnRue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiM1NTU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gXG5cbn1cblxuLmNvbXAtbWV0aG9kb2xvZ3l7XG4gICAgdWwuaW5mby1iYXJ7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAmOjpiZWZvcmV7XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XG4gICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMyMTRmN2E7XG4gICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi5iZXN0LXN0YWZmaW5nLCAudmFsdWVze1xuICAgIG1hcmdpbi10b3A6NDBweDtcbiAgICBtYXJnaW4tYm90dG9tOjQwcHg7XG59XG4uZmVhdHVyZXN7XG4gICAuaW5mby1iYXJ7XG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgIH1cbiAgICYrIC5mZWF0dXJlc3tcbiAgICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICB9XG59XG5cblxuIiwiLmJsdWUge1xuICBjb2xvcjogIzAwNzBjMDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjZmYwMDAwO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogIzcwYWQ0Nztcbn1cblxuLnNlY3Rpb24tc3RhZmZpbmcge1xuICBwYWRkaW5nOiAwIDAgNzBweDtcbn1cbi5zZWN0aW9uLXN0YWZmaW5nIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2VjdGlvbi1zdGFmZmluZyAuY29sLXNtLTEyOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG4uc2VjdGlvbi1zdGFmZmluZyAuc2VjdGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVmMGZhO1xuICBwYWRkaW5nOiA2MHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIG1hcmdpbi10b3A6IC03MHB4O1xufVxuLnNlY3Rpb24tc3RhZmZpbmcgLnBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuLnNlY3Rpb24tc3RhZmZpbmcgLnBhbmVsLmxlZnQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNzVweDtcbn1cbi5zZWN0aW9uLXN0YWZmaW5nIC5wYW5lbC5sZWZ0IC5pY29uLWNpcmNsZSB7XG4gIHJpZ2h0OiAwO1xufVxuLnNlY3Rpb24tc3RhZmZpbmcgLnBhbmVsLnJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNzVweDtcbn1cbi5zZWN0aW9uLXN0YWZmaW5nIC5wYW5lbC5yaWdodCAuaWNvbi1jaXJjbGUge1xuICBsZWZ0OiAwO1xufVxuLnNlY3Rpb24tc3RhZmZpbmcgLnBhbmVsIC5pY29uLWNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2U1ZjBmYTtcbn1cbi5zZWN0aW9uLXN0YWZmaW5nIC5wYW5lbCAuaWNvbi1jaXJjbGUgaSB7XG4gIGxpbmUtaGVpZ2h0OiAxMzVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnNlY3Rpb24tc3RhZmZpbmcgLnBhbmVsIC5pY29uLWNpcmNsZSBpIHN2ZyB7XG4gIGZpbGw6ICMyMTRmN2E7XG59XG5cbnVsLmluZm8tYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxudWwuaW5mby1iYXIgbGkge1xuICBwYWRkaW5nOiAwIDAgMTBweCAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnVsLmluZm8tYmFyIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogIzIxNGY3YTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG51bC5pbmZvLWJhciBsaSBwIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnNlcnZpY2VzLXByb3ZpZGVkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uc2VydmljZXMtcHJvdmlkZWQgLnBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnNlcnZpY2VzLXByb3ZpZGVkIC5wYW5lbCAucGFuZWwtZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlcnZpY2VzLXByb3ZpZGVkIC5wYW5lbCAucGFuZWwtZm9vdGVyIC5idG4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGNvbG9yOiAjNTU1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jb21wLW1ldGhvZG9sb2d5IHVsLmluZm8tYmFyIGxpOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjE0ZjdhO1xufVxuXG4uYmVzdC1zdGFmZmluZywgLnZhbHVlcyB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5mZWF0dXJlcyAuaW5mby1iYXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5mZWF0dXJlcyArIC5mZWF0dXJlcyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/staffing/staffing.component.ts":
/*!************************************************!*\
  !*** ./src/app/staffing/staffing.component.ts ***!
  \************************************************/
/*! exports provided: StaffingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffingComponent", function() { return StaffingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _space_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../space.pipe */ "./src/app/space.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");





let StaffingComponent = class StaffingComponent {
    constructor(sharedservice, config, modalService) {
        this.sharedservice = sharedservice;
        this.modalService = modalService;
        this.closeResult = '';
        this.ourProcess = [
            {
                title: 'Quality Employee',
                // tslint:disable-next-line: max-line-length
                desc: 'We take the time to listen and understand your business. Our industry-specific recruiters and account teams, combined with our access to the best talent, ensure that we locate, screen and place only the most qualified employees.',
            },
            {
                title: 'Quality Relationship',
                // tslint:disable-next-line: max-line-length
                desc: 'But we don’t stop there. We stay connected with you to ensure our employees are meeting your expectations and we are delivering on our promises.',
            },
            {
                title: 'Strategic Partnership',
                // tslint:disable-next-line: max-line-length
                desc: 'Working together, we develop a strategic partnership to provide workforce consultation to make your staffing process more effective and evolve your business.',
            }
        ];
        this.training = [
            {
                position: 'right',
                icon: '#icon_project',
                title: 'Project Preparatory Program',
                // tslint:disable-next-line: max-line-length
                desc: `In today's world, there is absolutely no dearth of technological projects to bank one's business on. However, with advancing techs, the demands from IT professionals are also increasing manifold times. It is never possible for one individual to have a complete grasp of every tool and technology. In case the next project of the company requires a certain skillset or proficiency in a particular type of assignment, Arkedge would happily provide a crash course to enable your employees so that they have the relevant skill for the project.`,
            },
            {
                position: 'left',
                icon: '#icon_certificate',
                title: 'Certification Program',
                // tslint:disable-next-line: max-line-length
                desc: `The certification programs offered by Arkedge aims to further hone the skills and aptitudes of your employees and IT professionals so that they can serve your business better. Keeping in mind the growing trends of the digital domain, we impart adequate training in branches lie Artificial Intelligence, Machine Learning, Virtual and Augmented Reality, cloud computing, blockchain and Internet of Things (IoT).`,
            },
            {
                position: 'right',
                icon: '#icon_recruitment',
                title: 'Post-recruitment Orientation Program',
                // tslint:disable-next-line: max-line-length
                desc: `It is the duty of every company to conduct an introductory orientation course for the new recruits to allow them to acclimatize with the kind of work they will be dealing with in their new workplace. While this post-recruitment training program is a necessity for efficiency and work-readiness of the new recruits, it can quite a hassle for your company to arrange for at a constant basis. Arkedge extends its services to cover the program in minute details and turn your fresh members into highly productive resources.`,
            },
            {
                position: 'left',
                icon: '#icon_skillset',
                title: 'Skill Updating Program',
                // tslint:disable-next-line: max-line-length
                desc: `Technology is progressing at an exponential rate and it is required that the manual workforce handling them should also be trained properly to keep up with the speed. Arkedge's skill updating program helps you bridge the gap between what you know and what you are being expected to know. It covers the many nuances of the market-popular, specific technologies, new versions or updates or software and so on.`,
            }
        ];
        this.keyDiff = [
            {
                title: 'Single Point of Contact with dedicated recruiting team',
            },
            {
                title: 'Tailored Client Engagement Strategy with process standardization, resource optimization and SLA management',
            },
            {
                title: 'Established Talent Retention Program that outlines the candidate’s commitment, key deliverables and expectations to ensure continuous consultant engagement at all phases of project needs',
            },
            {
                title: 'Large, Screened and Qualified Consultant Database that Goes Beyond Job Boards',
            },
            {
                title: 'National Coverage with Presence in 25 cities across 10 States',
            },
        ];
        this.clients = [
            {
                title: 'Spend their time interviewing the right candidate instead of reviewing resumes.',
            },
            {
                title: 'Save 30% in critical time in their hiring process.',
            },
            {
                title: 'Find the consultants we present, exceed their expectations.',
            },
        ];
        this.whyTraining = [
            {
                title: 'Flexible Pricing Options',
                // tslint:disable-next-line: max-line-length
                desc: `Working with us for corporate IT training is highly cost-effective. We provide our clients with flexible pricing options which will suit their business requirements and budget.`,
            },
            {
                title: 'Single Point of Contact',
                // tslint:disable-next-line: max-line-length
                desc: `When you choose to outsource corporate IT training services to us, we will assign a dedicated project manager. This manager will be the single point of contact for all your needs and resolve any issues that you may have.`,
            },
            {
                title: '24/7 Support',
                // tslint:disable-next-line: max-line-length
                desc: `We provide our clients with round the clock support. All our team members including the sales team, marketing team, call center executives, and project management team are available at all times to answer your queries via phone or email.`,
            },
            {
                title: 'Customization of training programs',
                // tslint:disable-next-line: max-line-length
                desc: `At Outsource2india, we understand the nature of corporate IT training programs - they are precise and heavily objective-driven. Our training modules are thus up for preferred customization and they come tailor-made as per your requirements.`,
            },
            {
                title: 'Experienced and certified trainers',
                // tslint:disable-next-line: max-line-length
                desc: `Our team of trainers for corporate IT training services comes from experienced backgrounds and hold certification in their respective fields. With the proper guidance of our panel of trainers, your employees, whether new or old, will have a horizon of opportunities opened up for them.`,
            },
            {
                title: 'Comprehensive methodology',
                // tslint:disable-next-line: max-line-length
                desc: `Owing to the extensive nature of corporate IT training syllabus and beyond, a systematic yet flexible training methodology should be in place. The course segmentation for the said purpose is determined based on certain aspects -`,
                list: [
                    { title: 'Experience level of the trainee' },
                    { title: 'Timing of the training' },
                    { title: 'Skill level of the training program' },
                    { title: 'Duration of the program' },
                    { title: 'Assessment of the training' }
                ]
            },
            {
                title: 'Hands-on and practical training',
                // tslint:disable-next-line: max-line-length
                desc: `Unlike academic pursuits or most other courses, this training program has a more immediate and realistic goal at its end. So the nature of the training program should also be in accordance to that. Our courses include interactive sessions, engaging case studies and result-orientated preparation styles.`,
            },
            {
                title: 'Post-training support',
                // tslint:disable-next-line: max-line-length
                desc: `Employees might still need assistance with IT operations after their program duration is over. Outsource2india does not leave you stranded in the middle post-training and continues to offer support and assistance to the employees.`,
            }
        ];
        this.servicesProvided = [
            { title: 'EXECUTIVE SEARCH',
                desc: `For an organisation to achieve its objectives, it needs high-calibre and committed leaders. For many years, we have successfully placed a large number of senior individuals, including chief executives, divisional heads and functional heads across a broad range of sectors.

We understand that our recruitment services play a crucial role in the development and success of our clients. We therefore place the utmost importance on understanding the needs of the organisation and the requirements of the situation.

Each assignment is unique and we offer a bespoke service based on our client’s needs. Working in specialist teams, we are able to utilise our complementary skills and knowledge base to the full. We use structured processes throughout the whole project, adopting a pragmatic approach. This continues even after the assignment has been completed, with a follow-up review and on-going dialogue with both the candidate and the client to ensure that the placement is a success.

Our executive recruitment offering is personally led by our senior management team who have rich, diverse backgrounds with direct industry experience across various geographical markets. We are therefore able to offer clients a truly unique understanding of their needs inside and out, thus allowing us to place executives with the ideal background, attitude and approach in the most timely and effective manner. For our Executive and Leadership Search services, please reach out to us and let’s explore how we may be of help`,
            },
            { title: 'MIDDLE MANAGEMENT',
                desc: `Middle Management represents the actual backbone of a successful organisation. Get this wrong and organisations face a lifetime trying to react to market changes, thus ultimately dying out. An effective CEO, in order to maximise their or their company’s performance has to creatively, aggressively, and systematically build the capabilities of the company’s middle management team.

This is important for two reasons: First, virtually all major strategic initiatives have to be carried out by the middle managers. Their flexibility and leadership skills will determine how able they are to tailor and adapt initiatives to the company’s changing circumstances. Second, a strong middle management team will produce outstanding operational results, easing the need for top managers to oversee and intervene directly in day-to-day operations. A well-functioning middle management team also will proactively create a constant stream of new initiatives to remedy problems and seize new opportunities. Middle management excellence is the key leverage point for great performance.

Therefore if one looked carefully at the great companies of our day, like GE for example, middle management excellence is in fact one of top management’s very highest priorities. Even after GE managers leave the company, they most often have the “look and feel” of GE’s management team: a focus on systematically teaching their subordinates to analyse and improve the businesses, and on teaching them to pass this skill on to their own management teams.

Winfort has strong expertise in helping clients within our focused sectors in building this layer of strong talent. For more information on our middle management search services, please reach out to us and let’s explore how we may be of help.`, },
            { title: 'DIVERSITY HIRING',
                desc: `Diversity hiring is not just a service we’re proficient in, but one of the key factors that our team of professional search experts breathe and apply in all their exceptional talent searches.
Our experts understand the nuances of diversity across geographies, industries, and demographics. We aim to bust the myth of women not getting enough opportunities to work for certain industry sectors and hence, we inordinately support our clients with diversity and inclusion. Research also backs up inclusion of diversity in hiring as a key factor for organizations’ growth path.

Forbes Insights has identified workforce diversity and inclusion as a key driver of internal innovation and business growth. A survey found that 67% of active and passive job seekers said that diversity is an important factor when considering companies and job offers. Hence, Diversity hiring is a crucial aspect of our team culture.

Diversity is at the forefront of our leadership agenda at Winfort, as well as while working on our Client’s mandates. We believe that a more inclusive workforce and leadership team, fosters better governance and decision making and provides organizations with a sustained competitive advantage.
Team Winfort has successfully driven this agenda for over a decade with over 43% of our placements, and a significantly higher proportion of our shortlists, being diversity candidates. We have developed significant databases, particularly of female candidates in leadership roles across industries in India.
We are privileged to have clients who too recognize and support diversity hiring in various industry sectors. Our ‘Returnship Program’ acts as an enabler to mothers looking to return to a fulfilling career, post their maternity, which is appreciated and used on a regular basis by our clients looking to hire diverse talented professionals. Our “Diverse Leadership program” is focused on organizations that want to build a more inclusive team. 

‘We are proud of the fact that we are helping break the stereotype in a category like Technology, which historically has been predominantly a male bastion. As of last year alone, Winfort helped place 43% diversity candidates- an accomplishment which we,Winfortians hold close to our heart.
Hence, If you are a professional, looking for an inclusive career path or a progressive organization, looking to hire talented candidates, devoid of cultural and sexual orientation biases, reach out to us.
We promise to partner with you and help bring diversity in your organization. Let’s connect`,
            },
            { title: 'MARKET MAPPING',
                desc: `“ The secret of my success is that we have gone to exceptional lengths to hire the best in the world.” – Steve Jobs

    Information is Power and we, at Winfort understand that for every business to grow to its full potential, it needs timely, relevant information. It is particularly useful for businesses entering new markets or ramping up or are willing to hire the best.
    
    Market mapping is the art of using competitive intelligence to understand the size of the talent pool, their skills and background, demographics, salary ranges, organization structures etc.
    
    Often, companies seek to benchmark their own leadership team against the talent base available in a particular geography or industry. As the norm is, business leaders across industries, develop and engage with an external leadership pipeline on an ongoing basis. Gathering targeted market intelligence allows recruitment professionals to build a strategy to hire dynamic talent. We provide assistance through bespoke market and talent mapping, thus enabling our client partners to hire, better.
    
    And hence, corporates seeking deeper insights and analysis with regards to understanding the talent landscape (single role, job family, skillset, compensation, etc) have Winfort as their first port of call. Our team of experts indulge in extensive research on the trends, cultural fit, and competitive strengths analysis within the market landscape and validate those findings to organizations in search of such information.
    
    With over 2 decades of experience, Winfort’s team of talented professionals combines technology, business and market skills to deliver information that is crucial for organizations to build their strategic hiring plans and take advised decisions.
    
    If you are a company that believes in the power of information and market intelligence and prefers a competitive analysis prior to making a hiring decision, Winfort is the one-stop solution for you.`,
            },
            { title: 'CONTRACT STAFFING',
                desc: `Digital and Transformation – the two buzz words that define today’s business environment.  With companies evolving their strategies and processes on a regular basis, the ability of an organisation to manage it’s processes and resources flexibly becomes critical to stay competitive and succeed.

    At Winfort, we have been supporting our customers for over 20 years with flexible staffing solutions.  Leveraging our strong database and technical capability, we have provided flexible staffing and payroll solutions in diverse areas such as technology, analytics, finance, consulting, recruitment etc.  Our unique business model allows organisations to focus on running their business, while we manage their complete payroll and administration process, including all regulatory compliances.`,
            },
            { title: 'RPO',
                desc: `It is a form of knowledge process outsourcing where an employer outsources or transfers all or part of its recruitment activities to an external service provider like Winfort. The ability to pursue growth opportunities for any organisation requires skilled and motivated talent. Recruitment process outsourcing (RPO) can bring you that talent in a cost effective manner. As a specialised leader in recruitment outsourcing and consulting, Winfort leverages it’s talent hiring expertise to optimize the recruiting process. We are committed to lowering costs, increasing productivity and retention, and delivering a best-in-class hiring manager and candidate experience. We have a full suite of recruitment process outsourcing (RPO) solutions to meet your specific talent acquisition needs.`,
            }
        ];
        this.staffingSolution = [
            {
                title: ' Rapid Staffing Solutions',
                // tslint:disable-next-line: max-line-length
                desc: 'Rapid Staffing Solutions addresses large requirements from clients, particularly at junior and middle management levels. Such requirements cater to start-up organizations, new project manning, plant expansion, scale up of team sizes and geographical expansion of teams.',
                // tslint:disable-next-line: max-line-length
                desc2: 'We can mobilize our vast internal resources to process large volume responses, manage selection of required personnel, including the management of administrative details and logistics. We also help you target specific segments of professionals for specialized roles.'
            },
            {
                title: 'Turnkey Staffing',
                // tslint:disable-next-line: max-line-length
                desc: 'The entire Recruitment Process is taken up as a Turnkey Assignment, whereby we manage the entire logistics i.e. written tests, Organizing Group Discussions, Conduction Technical Tests, and Preliminary Interviews etc. The entire activity from A to Z is taken up as a turnkey project.',
                // tslint:disable-next-line: max-line-length
                desc2: ''
            },
            {
                title: 'Executive Search',
                // tslint:disable-next-line: max-line-length
                desc: 'Our Executive search division focuses on senior level positions like President, CEO, COO, Managing Director, Vice President, General Manager, Project Directors etc. We also identify candidates in key technology and niche areas, people who are specialists in their chosen field of work.',
                // tslint:disable-next-line: max-line-length
                desc2: 'Based on the requirement of the client; we map the industry for the companies and the people who would be best suitable for the job. We, then discuss with the client to chart out a list of candidates who would suit their requirements. After which, we hold discussions with the candidates before the company contacts them. Thus, we act like a catalyst throughout, facilitating the recruitment process while also maintaining strict confidentiality.'
            }
        ];
        this.industriesSolution = [
            { list: 'IT, telecom and software' },
            { list: 'Telecom' },
            { list: 'ITES - BPO & KPO' },
            { list: 'Engineering & Manufacturing' },
            { list: 'Consumer goods and retail' },
            { list: 'Banking Financial services and insurance' },
            { list: 'Health care & Pharmaceuticals' }
        ];
        // courses = [
        //   {coursetype: 'PDPC', courseDescription: 'Post Degree Programming Course with ONE Live Project', courseDuration: '6 Months'},
        //   {coursetype: 'CC01', courseDescription: '	Object Oriented Principles and Database Fundamentals', courseDuration: '2 Days'},
        //   {coursetype: 'SC01', courseDescription: 'Getting started with.Net, C# and ASP.NET', courseDuration: '1 Day'},
        //   {coursetype: 'SC01', courseDescription: 'Getting started with.Net, C# and ASP.NET', courseDuration: '1 Day'},
        // ];
        this.courses = [
            {
                coursetype: 'Project Management Professional (PMP)',
                infoCommTech: 'Microsoft Certification Programs',
                mgdev: 'Effective Decision-Making Skills'
            },
            {
                coursetype: 'IT Infrastructure Library (ITIL V3)',
                infoCommTech: 'Java Certification Programs',
                mgdev: 'Presentation Skills'
            },
            {
                coursetype: '',
                infoCommTech: 'Database Trainings',
                mgdev: 'Negotiation Skills'
            },
            {
                coursetype: '',
                infoCommTech: 'Scripting Language',
                mgdev: 'Emotional Intelligence'
            },
            {
                coursetype: '',
                infoCommTech: 'Operating System & Server (Linux/Unix)',
                mgdev: 'Effective Marketing Skills'
            },
            {
                coursetype: '',
                infoCommTech: 'Windows Operating System & Server',
                mgdev: 'Time Management Skills'
            },
            {
                coursetype: '',
                infoCommTech: 'Data warehousing and Business Intelligence',
                mgdev: 'Professional & Business Etiquette'
            },
            {
                coursetype: '',
                infoCommTech: 'Project Management Tools',
                mgdev: 'Email Etiquette'
            },
            {
                coursetype: '',
                infoCommTech: '',
                mgdev: 'Leadership Skills'
            }
        ];
        this.programCalendar = [
            { courseTitle: 'Post Degree Programming Course with ONE Live Project', location: 'Sr. Business Analyst', targetDate: '04-Aug-23' },
            { courseTitle: 'Getting started with.Net, C# and ASP.NET', location: 'Mumbai, India', targetDate: '04-Jul-23' },
            { courseTitle: 'Architecture (Design Patterns and UML)', location: 'Mumbai, India', targetDate: '28-Jun-23' },
            { courseTitle: 'Load and Performance Testing (by using Load runner)	', location: 'Mumbai, India', targetDate: '	28-Jul-23' },
            { courseTitle: 'MS Excel 2007 for Beginners', location: 'Mumbai, India', targetDate: '20-Jul-23' },
            { courseTitle: 'Ms Excel 2007 for Experienced', location: 'Mumbai, India', targetDate: '15-Aug-23' }
        ];
    }
    open(content) {
        this.modalService.open(content, { windowClass: 'staffing-popup' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngOnInit() {
        this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
        this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
    }
    title(i) {
        if (i === 1) {
            this.tabName = 'Staffing Services';
        }
        else if (i === 2) {
            this.tabName = 'Staffing Industries';
        }
        else if (i === 3) {
            this.tabName = 'IT Training';
        }
        else if (i === 4) {
            this.tabName = 'Program Schedule';
        }
    }
};
StaffingComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
StaffingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staffing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./staffing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staffing/staffing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./staffing.component.scss */ "./src/app/staffing/staffing.component.scss")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _space_pipe__WEBPACK_IMPORTED_MODULE_3__["CreateSpace"]
        ]
    })
], StaffingComponent);



/***/ }),

/***/ "./src/app/technology/technology.component.scss":
/*!******************************************************!*\
  !*** ./src/app/technology/technology.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul li a {\n  padding: 15px;\n  margin-bottom: 15px;\n  background: #e5e5e5;\n  color: #333333;\n  display: block;\n}\nul li a.active {\n  background: #214f7a;\n  color: #fff;\n}\nsection:nth-child(3) {\n  background: #e5f0fa;\n}\nsection:nth-child(3) ul {\n  margin-left: 20px;\n}\nsection:nth-child(3) ul li {\n  font-size: 18px;\n  list-style-type: disc;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL3RlY2hub2xvZ3kvdGVjaG5vbG9neS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVjaG5vbG9neS90ZWNobm9sb2d5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RaO0FERVk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNBaEI7QURPSTtFQUNJLG1CQUFBO0FDSlI7QURLUTtFQUNJLGlCQUFBO0FDSFo7QURJWTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDRmhCIiwiZmlsZSI6InNyYy9hcHAvdGVjaG5vbG9neS90ZWNobm9sb2d5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWx7XG4gICAgbGl7XG4gICAgICAgIGF7XG4gICAgICAgICAgICBwYWRkaW5nOjE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNlNWU1ZTU7XG4gICAgICAgICAgICBjb2xvcjojMzMzMzMzO1xuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICYuYWN0aXZle1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzIxNGY3YTtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICB9XG59XG5cbnNlY3Rpb257XG4gICAgJjpudGgtY2hpbGQoMyl7XG4gICAgICAgIGJhY2tncm91bmQ6I2U1ZjBmYTtcbiAgICAgICAgdWx7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsInVsIGxpIGEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZGlzcGxheTogYmxvY2s7XG59XG51bCBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyMTRmN2E7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5zZWN0aW9uOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQ6ICNlNWYwZmE7XG59XG5zZWN0aW9uOm50aC1jaGlsZCgzKSB1bCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuc2VjdGlvbjpudGgtY2hpbGQoMykgdWwgbGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/technology/technology.component.ts":
/*!****************************************************!*\
  !*** ./src/app/technology/technology.component.ts ***!
  \****************************************************/
/*! exports provided: TechnologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function() { return TechnologyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TechnologyComponent = class TechnologyComponent {
    constructor() { }
    ngOnInit() {
    }
};
TechnologyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-technology',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./technology.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/technology/technology.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./technology.component.scss */ "./src/app/technology/technology.component.scss")).default]
    })
], TechnologyComponent);



/***/ }),

/***/ "./src/app/testimonials/testimonials.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.div-1 {\n  background-color: #c3d04e;\n}\n.div-2 {\n  background-color: #8778d9;\n}\n.div-3 {\n  background-color: #ffab00;\n}\n.div-4 {\n  background-color: #ff5630;\n}\n.div-5 {\n  background-color: #02b8d9;\n}\n.div-6 {\n  background-color: #5391ee;\n}\nsection {\n  padding: 70px 0 55px;\n}\n.testimonials-info {\n  padding: 0;\n}\n.testimonials-info .col-sm-12 {\n  border-top: 1px dotted #af9090;\n  padding-bottom: 40px;\n}\n.testimonials-info .col-sm-12:nth-child(even) .span {\n  float: right;\n  margin: 0 0 0 40px;\n}\n.testimonials-info p {\n  padding: 40px 50px 0;\n  font-family: \"Poppins\", sans-serif;\n}\n.testimonials-info p a {\n  color: #214f7a;\n  font-weight: bold;\n}\n.testimonials-info p .span {\n  float: left;\n  margin: 0 40px 0 0;\n}\n.testimonials-info p img {\n  width: 50%;\n  border-radius: 50%;\n  display: block;\n  margin: 0 auto 30px;\n}\n.testimonials-info p .title-name {\n  font-size: 25px;\n  font-weight: bold;\n  text-align: center;\n  display: block;\n}\n.testimonials-info p .title-info {\n  font-size: 16px;\n  color: #5C5C5C;\n  text-align: center;\n  display: block;\n}\n.testimonials-info p .v-text-align {\n  height: 100%;\n  display: flex;\n}\n.testimonials-info p .v-text-align p {\n  align-self: center;\n}\n.testimonials-info .btn {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 12px;\n}\n.testimonials-info blockquote {\n  border: none;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  margin-bottom: -30px;\n  position: relative;\n  margin: 0 auto;\n  padding-left: 0.4em;\n}\n.testimonials-info blockquote p:before {\n  content: \"“\";\n  font-weight: bold;\n  font-size: 100px;\n  color: #eab119;\n  position: absolute;\n  top: 50px;\n  left: 0px;\n  font-family: \"Georgia\";\n}\n.testimonials-info blockquote p:after {\n  content: \"”\";\n  font-weight: bold;\n  font-size: 100px;\n  color: #eab119;\n  position: absolute;\n  bottom: -25px;\n  right: 0px;\n  font-family: \"Georgia\";\n}\n@media (max-width: 576px) {\n  .testimonials-info .col-sm-12 .span {\n    width: 100%;\n    margin: 0;\n    float: none;\n  }\n  .testimonials-info .col-sm-12 .span img {\n    margin: 0 auto 30px;\n  }\n  .testimonials-info .col-sm-12 .v-text-align {\n    height: auto;\n    display: block;\n  }\n  .testimonials-info .col-sm-12 .v-text-align p {\n    align-self: center;\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyIsIi93b3Jrc3BhY2UvYXJrZWRnZS9zcmMvYXBwL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR2Y7RUFDQyx5QkFBQTtBRERGO0FDQUM7RUFDQyx5QkFBQTtBREdGO0FDSkM7RUFDQyx5QkFBQTtBRE9GO0FDUkM7RUFDQyx5QkFBQTtBRFdGO0FDWkM7RUFDQyx5QkFBQTtBRGVGO0FDaEJDO0VBQ0MseUJBQUE7QURtQkY7QUNmQTtFQUNJLG9CQUFBO0FEa0JKO0FDZkE7RUFDQyxVQUFBO0FEa0JEO0FDaEJDO0VBQ0MsOEJBQUE7RUFDQSxvQkFBQTtBRGtCRjtBQ2hCRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtBRGtCSDtBQ2RBO0VBQ0Msb0JBQUE7RUFDQSxrQ0FBQTtBRGdCRDtBQ2ZDO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0FEaUJGO0FDZkM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7QURpQkY7QUNkQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRGdCRDtBQ1pBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEY0Q7QUNaQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEY0Q7QUNYQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FEYUQ7QUNaQztFQUNDLGtCQUFBO0FEY0Y7QUNUQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURXRDtBQ1JBO0VBQ0MsWUFBQTtFQUNBLHFEQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRFVEO0FDUEM7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QURTRjtBQ1BDO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FEU0Y7QUNKQTtFQUdJO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VES0Y7RUNKRTtJQUNDLG1CQUFBO0VETUg7RUNIQztJQUNDLFlBQUE7SUFDQSxjQUFBO0VES0Y7RUNKRTtJQUNDLGtCQUFBO0lBQ0EsV0FBQTtFRE1IO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmRpdi0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzZDA0ZTtcbn1cblxuLmRpdi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3NzhkOTtcbn1cblxuLmRpdi0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWIwMDtcbn1cblxuLmRpdi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTYzMDtcbn1cblxuLmRpdi01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYjhkOTtcbn1cblxuLmRpdi02IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzOTFlZTtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcwcHggMCA1NXB4O1xufVxuXG4udGVzdGltb25pYWxzLWluZm8ge1xuICBwYWRkaW5nOiAwO1xufVxuLnRlc3RpbW9uaWFscy1pbmZvIC5jb2wtc20tMTIge1xuICBib3JkZXItdG9wOiAxcHggZG90dGVkICNhZjkwOTA7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuLnRlc3RpbW9uaWFscy1pbmZvIC5jb2wtc20tMTI6bnRoLWNoaWxkKGV2ZW4pIC5zcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDAgMCAwIDQwcHg7XG59XG4udGVzdGltb25pYWxzLWluZm8gcCB7XG4gIHBhZGRpbmc6IDQwcHggNTBweCAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG4udGVzdGltb25pYWxzLWluZm8gcCBhIHtcbiAgY29sb3I6ICMyMTRmN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRlc3RpbW9uaWFscy1pbmZvIHAgLnNwYW4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDQwcHggMCAwO1xufVxuLnRlc3RpbW9uaWFscy1pbmZvIHAgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbn1cbi50ZXN0aW1vbmlhbHMtaW5mbyBwIC50aXRsZS1uYW1lIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50ZXN0aW1vbmlhbHMtaW5mbyBwIC50aXRsZS1pbmZvIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50ZXN0aW1vbmlhbHMtaW5mbyBwIC52LXRleHQtYWxpZ24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGVzdGltb25pYWxzLWluZm8gcCAudi10ZXh0LWFsaWduIHAge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4udGVzdGltb25pYWxzLWluZm8gLmJ0biB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRlc3RpbW9uaWFscy1pbmZvIGJsb2NrcXVvdGUge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IC0zMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xufVxuLnRlc3RpbW9uaWFscy1pbmZvIGJsb2NrcXVvdGUgcDpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAnFwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgY29sb3I6ICNlYWIxMTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIjtcbn1cbi50ZXN0aW1vbmlhbHMtaW5mbyBibG9ja3F1b3RlIHA6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKAnVwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgY29sb3I6ICNlYWIxMTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjVweDtcbiAgcmlnaHQ6IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnRlc3RpbW9uaWFscy1pbmZvIC5jb2wtc20tMTIgLnNwYW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAudGVzdGltb25pYWxzLWluZm8gLmNvbC1zbS0xMiAuc3BhbiBpbWcge1xuICAgIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gIH1cbiAgLnRlc3RpbW9uaWFscy1pbmZvIC5jb2wtc20tMTIgLnYtdGV4dC1hbGlnbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC50ZXN0aW1vbmlhbHMtaW5mbyAuY29sLXNtLTEyIC52LXRleHQtYWxpZ24gcCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59IiwiJHJhbmRvbUJnOiNjM2QwNGUsICM4Nzc4ZDksICNmZmFiMDAsICNmZjU2MzAsICMwMmI4ZDksICM1MzkxZWU7XG5cbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRyYW5kb21CZykge1xuXHQuZGl2LSN7JGl9IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBudGgoJHJhbmRvbUJnLCAkaSk7XG5cdH1cbn1cblxuc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNzBweCAwIDU1cHg7XG59XG5cbi50ZXN0aW1vbmlhbHMtaW5mb3tcblx0cGFkZGluZzowO1x0XG5cblx0LmNvbC1zbS0xMntcblx0XHRib3JkZXItdG9wOjFweCBkb3R0ZWQgI2FmOTA5MDtcblx0XHRwYWRkaW5nLWJvdHRvbTo0MHB4O1xuXHQmOm50aC1jaGlsZChldmVuKXtcblx0XHQuc3Bhbntcblx0XHRcdGZsb2F0OnJpZ2h0O1xuXHRcdFx0bWFyZ2luOjAgMCAwIDQwcHg7XG5cdFx0fVxuXHR9fVxuXG5we1xuXHRwYWRkaW5nOjQwcHggNTBweCAwO1xuXHRmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG5cdGF7XG5cdFx0Y29sb3I6IzIxNGY3YTtcblx0XHRmb250LXdlaWdodDpib2xkO1xuXHR9XG5cdC5zcGFue1xuXHRcdGZsb2F0OmxlZnQ7XG5cdFx0bWFyZ2luOiAwIDQwcHggMCAwO1xuXHR9XG5cbmltZ3tcblx0d2lkdGg6NTAlO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGRpc3BsYXk6YmxvY2s7XG5cdG1hcmdpbjowIGF1dG8gMzBweDtcblxufVxuXG4udGl0bGUtbmFtZXtcblx0Zm9udC1zaXplOjI1cHg7XG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0ZGlzcGxheTpibG9jaztcbn1cbi50aXRsZS1pbmZve1xuXHRmb250LXNpemU6MTZweDtcblx0Y29sb3I6IzVDNUM1Qztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRkaXNwbGF5OmJsb2NrO1xufVxuXG4udi10ZXh0LWFsaWdue1xuXHRoZWlnaHQ6MTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0cHtcblx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdH1cbn1cblxufVxuLmJ0bntcblx0cGFkZGluZzoxMHB4O1xuXHRib3JkZXItcmFkaXVzOjVweDtcblx0Zm9udC1zaXplOjEycHg7XG59XG5cbmJsb2NrcXVvdGUge1xuXHRib3JkZXI6bm9uZTtcblx0Zm9udC1mYW1pbHk6R2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuXHRtYXJnaW4tYm90dG9tOi0zMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7IFxuXHRtYXJnaW46IDAgYXV0bzsgXG5cdHBhZGRpbmctbGVmdDogMC40ZW07IFxuXHR9XG5cdFxuXHRibG9ja3F1b3RlIHA6YmVmb3JlIHsgXG5cdFx0Y29udGVudDogXCJcXDIwMUNcIjtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRmb250LXNpemU6MTAwcHg7XG5cdFx0Y29sb3I6I2VhYjExOTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7IFxuXHRcdHRvcDogNTBweDtcblx0XHRsZWZ0OiAwcHg7IFxuXHRcdGZvbnQtZmFtaWx5OiAnR2VvcmdpYSc7IFxuXHR9IFxuXHRibG9ja3F1b3RlIHA6YWZ0ZXIgeyBcblx0XHRjb250ZW50OiBcIlxcMjAxRFwiO1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGZvbnQtc2l6ZToxMDBweDtcblx0XHRjb2xvcjojZWFiMTE5O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG5cdFx0Ym90dG9tOi0yNXB4O1xuXHRcdHJpZ2h0OiAwcHg7IFxuXHRcdGZvbnQtZmFtaWx5OiAnR2VvcmdpYSc7IFxuXHR9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcblx0LnRlc3RpbW9uaWFscy1pbmZve1xuXHRcdC5jb2wtc20tMTJ7XG5cdFx0ICAuc3Bhbntcblx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRmbG9hdDpub25lO1xuXHRcdFx0XHRpbWd7XG5cdFx0XHRcdFx0bWFyZ2luOjAgYXV0byAzMHB4XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC52LXRleHQtYWxpZ257XG5cdFx0XHRcdGhlaWdodDphdXRvO1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0cHtcblx0XHRcdFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdFx0XHRcdFx0ZmxvYXQ6bGVmdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59Il19 */");

/***/ }),

/***/ "./src/app/testimonials/testimonials.component.ts":
/*!********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestimonialsComponent = class TestimonialsComponent {
    constructor() {
        this.testimonials = [
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            },
            { name: 'Same Martinez',
                info: 'Chief Executive Officer & Co-Founder',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor sit amet.'
            }
        ];
    }
    ngOnInit() {
    }
};
TestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testimonials',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./testimonials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/testimonials/testimonials.component.scss")).default]
    })
], TestimonialsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspace/arkedge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
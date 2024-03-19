"use strict";
exports.id = 947;
exports.ids = [947];
exports.modules = {

/***/ 1413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Pricing)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/data/sections/pricing.json
const pricing_namespaceObject = JSON.parse('{"T":"Price","e":[{"name":"Hourly payment","price":{"value":"$17","after":"/ho"},"list":[{"active":1,"value":"Dolorum sed doloribus"},{"active":1,"value":"Consectetur adipisicing elit"},{"active":1,"value":"Maxime libero"},{"active":0,"value":"Atque esse odit"},{"active":0,"value":"Laboriosam corporis"}],"button":{"label":"Visit website","link":"/contact"}},{"name":"Monthly payment","price":{"value":"$2900","after":"/mo"},"list":[{"active":1,"value":"Dolorum sed doloribus"},{"active":1,"value":"Consectetur adipisicing elit"},{"active":1,"value":"Maxime libero"},{"active":1,"value":"Atque esse odit"},{"active":1,"value":"Laboriosam corporis"}],"button":{"label":"Visit website","link":"/contact"}}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Pricing.jsx




const PricingSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-section-title mil-up",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-divider"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        children: pricing_namespaceObject.T
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "mil-p-90-60",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: pricing_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-price-card mil-up mil-mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "mil-upper mil-accent mil-up mil-mb-30",
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mil-price-number mil-up mil-mb-30",
                                        children: [
                                            item.price.value,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: item.price.after
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-divider mil-up mil-mb-30"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        className: "mil-mb-60",
                                        children: item.list.map((element, key2)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_default()).Fragment, {
                                                children: [
                                                    element.active == 1 && /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "mil-up",
                                                        children: element.value
                                                    }),
                                                    element.active != 1 && /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "mil-up mil-empty",
                                                        children: element.value
                                                    })
                                                ]
                                            }, `pricing-item-${key}-list-${key2}`))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: item.button.link,
                                        className: "mil-link mil-up",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: item.button.label
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "feather feather-arrow-right",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("line", {
                                                        x1: "5",
                                                        y1: "12",
                                                        x2: "19",
                                                        y2: "12"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("polyline", {
                                                        points: "12 5 19 12 12 19"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, `pricing-item-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const Pricing = (PricingSection);


/***/ }),

/***/ 8654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M9": () => (/* binding */ getSortedServicesData),
/* harmony export */   "QC": () => (/* binding */ getAllServicesIds),
/* harmony export */   "Y_": () => (/* binding */ getServiceData)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);
([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const servicesDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/data/services");
function getSortedServicesData() {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(servicesDirectory);
    const allData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(servicesDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allData.sort((a, b)=>{
        if (a.id > b.id) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getAllServicesIds() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(servicesDirectory);
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
}
async function getServiceData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(servicesDirectory, `${id}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__["default"]).process(matterResult.content);
    const contentHtml = processedContent.toString();
    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
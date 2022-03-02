import DailyReturnIndex from "../../views/Metrics/Components/DailyReturnIndex";
import ReturnsMonthly from "@/views/Metrics/Components/ReturnsMonthly";
import ReturnsQuarterly from "@/views/Metrics/Components/ReturnsQuarterly";
import ReturnsAnnually from "@/views/Metrics/Components/ReturnsAnnually";
import VolatilityMonthly from "@/views/Metrics/Components/VolatilityMonthly";
import VolatilityAnnually from "@/views/Metrics/Components/VolatilityAnnually";
import SharpeMonthly from "@/views/Metrics/Components/SharpeMonthly";
import SharpeAnnually from "@/views/Metrics/Components/SharpeAnnually";
import SharpeMonthlyAnnualised from "@/views/Metrics/Components/SharpeMonthlyAnnualised";
import MaxDrawDownMonthly from "@/views/Metrics/Components/MaxDrawDownMonthly";
import MaxDrawDownQuarterly from "@/views/Metrics/Components/MaxDrawDownQuarterly";
import MaxDrawDownAnnually from "@/views/Metrics/Components/MaxDrawDownAnnually";
import SectorContributionComparison from "@/views/Metrics/Components/SectorContributionComparison";
import SectorExposureComparisonMonthly from "@/views/Metrics/Components/SectorExposureComparisonMonthly";
import SectorExposureComparisonDaily from "@/views/Metrics/Components/SectorExposureComparisonDaily";
import SectorAttributionMonthly from "@/views/Metrics/Components/SectorAttributionMonthly";
import SequentialHoldingsOverlapWeekly from "@/views/Metrics/Components/SequentialHoldingsOverlapWeekly";

// PopupResources defines all of the potential
// popups that can be generated.
//
// Each object inside PopupResources follows the
// convention shown by the example:
// //Name of the popup which must be globally unique.
// ruanPopup: {
//     //POPUP CONFIGURATION
//     //  Various elements used to drive
//     //  the generation of the popup.
//
//     //Title of the popup.
//     title: "Example popup",
//     //Subtitle of the popup.
//     //This may be omitted.
//     subTitle: "This is something we generated",
//     //Component which will be rendered
//     //inside the popup. Ensure that the
//     //component is imported.
//     component: RuanTest,
//
//     //Required starting width and height in grid column and -row units
//     height: 4,
//     width: 4,
//
//     //INSIGHTS OPTION LIST CONFIGURATION
//     //  Various elements used to drive
//     //  the generation of the list that
//     //  opens up the popups.
//
//     //Title used in the list.
//     listItemTitle: "Example list title",
//     //Description used in list.
//     listItemDescription: "This is a longer description of what the chart displays.",
//
//     //Tags that can be given to configs. You could use this to categorise metric Components. For example give each line chart component a tag "line chart". Or assign a tag that can be used as an additional keyword match when searching for a metric.
//     tags: ["line chart", "example"],
// },
export const PopupResources = {
    DailyReturnIndex: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Daily Return Index",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares daily return indices for selected branches.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: DailyReturnIndex,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Daily Return Index",
        //Description used in list.
        listItemDescription: "Chart compares daily return indices for selected branches.",

        tags: ["return index", "test1"],
    },
    MonthlyReturns: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Monthly Returns",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares monthly returns for selected branches.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: ReturnsMonthly,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Monthly Returns",
        //Description used in list.
        listItemDescription: "Chart compares monthly returns of selected branches.",

        tags: ["monthlytest", "test2"],
    },
    ReturnsQuarterly: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Quarterly Returns",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares quarterly returns for selected branches.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: ReturnsQuarterly,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Quarterly Returns",
        //Description used in list.
        listItemDescription: "Chart compares quarterly returns of selected branches.",
    },
    ReturnsAnnually: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Annual Returns",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares annual returns for selected branches.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: ReturnsAnnually,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Annual Returns",
        //Description used in list.
        listItemDescription: "Chart compares annual returns of selected branches.",
    },
    VolatilityMonthly: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Monthly Volatility",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares monthly volatility for selected branches. The volatility is calculated by taking the " +
            "standard deviation of daily returns within each month.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: VolatilityMonthly,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Monthly Volatility",
        //Description used in list.
        listItemDescription: "Chart compares monthly volatility of selected branches.",
    },
    VolatilityAnnually: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Annual Volatility",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares annual volatility for selected branches. The volatility is calculated by taking the " +
            "standard deviation of daily returns within each calendar year.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: VolatilityAnnually,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Annual Volatility",
        //Description used in list.
        listItemDescription: "Chart compares annual volatility of selected branches.",
    },
    SharpeMonthly: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Monthly Sharpe Ratio",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares monthly Sharpe ratios for selected branches. The calculation involves taking " +
            "the ratio of each calendar month's return to the standard deviation of the daily returns within that month.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: SharpeMonthly,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Monthly Sharpe Ratios",
        //Description used in list.
        listItemDescription: "Chart compares monthly Sharpe ratios of selected branches.",
    },
    SharpeAnnually: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Annual Sharpe Ratio",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares annual Sharpe ratios for selected branches. The calculation involves taking " +
            "the ratio of each calendar year's return to the standard deviation of the daily returns within that year.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: SharpeAnnually,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Annual Sharpe Ratios",
        //Description used in list.
        listItemDescription: "Chart compares annual Sharpe ratios of selected branches.",
    },
    SharpeMonthlyAnnualised: {
    //POPUP CONFIGURATION
    //  Various elements used to drive
    //  the generation of the popup.

    //Title of the popup.
    title: "Annualised Monthly Sharpe Ratio",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares annualised monthly Sharpe ratios for selected branches. The calculation involves taking " +
            "the ratio of each calendar month's return to the standard deviation of the daily returns within that month, " +
            "and then annualising the ratio.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: SharpeMonthlyAnnualised,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Annualised Monthly Sharpe Ratios",
        //Description used in list.
        listItemDescription: "Chart compares annualised monthly Sharpe ratios of selected branches.",
    },
    MaxDrawDownMonthly: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Monthly Max Draw-down",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares monthly max draw-down for selected branches.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: MaxDrawDownMonthly,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Monthly Max Draw-down",
        //Description used in list.
        listItemDescription: "Chart compares monthly max draw-down of selected branches.",
    },
    MaxDrawDownQuarterly: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Quarterly Max Draw-down",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares quarterly max draw-down for selected branches.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: MaxDrawDownQuarterly,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Quarterly Max Draw-down",
        //Description used in list.
        listItemDescription: "Chart compares quarterly max draw-down of selected branches.",
    },
    MaxDrawDownAnnually: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Annual Max Draw-down",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares annual max draw-down for selected branches.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: MaxDrawDownAnnually,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Annual Max Draw-down",
        //Description used in list.
        listItemDescription: "Chart compares annual max draw-down of selected branches.",
    },
    // SectorExposureComparisonDaily: {
    //     //POPUP CONFIGURATION
    //     //  Various elements used to drive
    //     //  the generation of the popup.
    //
    //     //Title of the popup.
    //     title: "Daily Sector Exposure Comparison",
    //     //Subtitle of the popup.
    //     //This may be omitted.
    //     subTitle: "Chart compares sector exposure indices for selected branches, for each day.",
    //     //Component which will be rendered
    //     //inside the popup. Ensure that the
    //     //component is imported.
    //     component: SectorExposureComparisonDaily,
    //
    //     //Optional custom sizing parameters.
    //     height: 6,
    //     width: 6,
    //
    //     //LIST CONFIGURATION
    //     //  Various elements used to drive
    //     //  the generation of the list that
    //     //  open up the popups.
    //
    //     //Title used in the list.
    //     listItemTitle: "Daily Sector Exposure Comparison",
    //     //Description used in list.
    //     listItemDescription: "Chart compares sector exposure indices for selected branches, for each day.",
    //
    //     tags: ["AAF"],
    // },
    SectorExposureComparisonMonthly: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Monthly Sector Exposure Comparison",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares sector exposure indices for selected branches, for each month. The calculation " +
            "involves calculating the weekly sector exposures for each portfolio, and then averaging " +
            "exposures for each calendar month.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: SectorExposureComparisonMonthly,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Monthly Sector Exposure Comparison",
        //Description used in list.
        listItemDescription: "Chart compares sector exposure indices for selected branches, for each month.",

        tags: ["AAF"],
    },
    SectorContributionComparison: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Monthly Sector Contribution Comparison",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Chart compares sector contribution indices for selected branches, for each month. The calculation " +
            "involves finding the holding period return for each portfolio, within each calendar month, and breaking " +
            "down that return into the sector contributions.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: SectorContributionComparison,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Monthly Sector Contribution Comparison",
        //Description used in list.
        listItemDescription: "Chart compares sector contribution indices for selected branches, for each month.",

        tags: ["AAF"],
    },
    SectorAttribution: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Monthly Sector Attribution",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Attribution analysis by sector per month for a single branch. The calculation involves decomposing " +
            "the excess return of the branch relative to the branch's benchmark, into allocation and selection " +
            "Components, per sector. The analysis is performed for each calendar month.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: SectorAttributionMonthly,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Monthly Sector Attribution",
        //Description used in list.
        listItemDescription: "Attribution analysis by sector for a single branch per month.",

        tags: ["AAG"],
    },
    SequentialHoldingsOverlapWeekly: {
        //POPUP CONFIGURATION
        //  Various elements used to drive
        //  the generation of the popup.

        //Title of the popup.
        title: "Weekly Holdings Overlap",
        //Subtitle of the popup.
        //This may be omitted.
        subTitle: "Computes the percentage holdings overlap, week-to-week, for each of the selected branches.",
        //Component which will be rendered
        //inside the popup. Ensure that the
        //component is imported.
        component: SequentialHoldingsOverlapWeekly,

        //Optional custom sizing parameters.
        height: 6,
        width: 6,

        //LIST CONFIGURATION
        //  Various elements used to drive
        //  the generation of the list that
        //  open up the popups.

        //Title used in the list.
        listItemTitle: "Weekly Holdings Overlap",
        //Description used in list.
        listItemDescription: "Computes the percentage holdings overlap, week-to-week, for each of the selected branches.",
    },
};

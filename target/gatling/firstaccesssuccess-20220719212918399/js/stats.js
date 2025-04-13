var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60",
        "ok": "51",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "549",
        "ok": "792",
        "ko": "549"
    },
    "maxResponseTime": {
        "total": "1844",
        "ok": "1844",
        "ko": "1232"
    },
    "meanResponseTime": {
        "total": "979",
        "ok": "1019",
        "ko": "751"
    },
    "standardDeviation": {
        "total": "245",
        "ok": "218",
        "ko": "267"
    },
    "percentiles1": {
        "total": "913",
        "ok": "915",
        "ko": "573"
    },
    "percentiles2": {
        "total": "1059",
        "ok": "1065",
        "ko": "995"
    },
    "percentiles3": {
        "total": "1461",
        "ok": "1466",
        "ko": "1193"
    },
    "percentiles4": {
        "total": "1757",
        "ok": "1770",
        "ko": "1224"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 43,
    "percentage": 72
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.85",
        "ko": "0.15"
    }
},
contents: {
"req_first-access----f01c3": {
        type: "REQUEST",
        name: "First Access - Successo All",
path: "First Access - Successo All",
pathFormatted: "req_first-access----f01c3",
stats: {
    "name": "First Access - Successo All",
    "numberOfRequests": {
        "total": "60",
        "ok": "51",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "549",
        "ok": "792",
        "ko": "549"
    },
    "maxResponseTime": {
        "total": "1844",
        "ok": "1844",
        "ko": "1232"
    },
    "meanResponseTime": {
        "total": "979",
        "ok": "1019",
        "ko": "751"
    },
    "standardDeviation": {
        "total": "245",
        "ok": "218",
        "ko": "267"
    },
    "percentiles1": {
        "total": "913",
        "ok": "915",
        "ko": "573"
    },
    "percentiles2": {
        "total": "1059",
        "ok": "1065",
        "ko": "995"
    },
    "percentiles3": {
        "total": "1461",
        "ok": "1466",
        "ko": "1193"
    },
    "percentiles4": {
        "total": "1757",
        "ok": "1770",
        "ko": "1224"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 43,
    "percentage": 72
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.85",
        "ko": "0.15"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60",
        "ok": "0",
        "ko": "60"
    },
    "minResponseTime": {
        "total": "524",
        "ok": "-",
        "ko": "524"
    },
    "maxResponseTime": {
        "total": "2182",
        "ok": "-",
        "ko": "2182"
    },
    "meanResponseTime": {
        "total": "659",
        "ok": "-",
        "ko": "659"
    },
    "standardDeviation": {
        "total": "285",
        "ok": "-",
        "ko": "285"
    },
    "percentiles1": {
        "total": "536",
        "ok": "-",
        "ko": "536"
    },
    "percentiles2": {
        "total": "640",
        "ok": "-",
        "ko": "640"
    },
    "percentiles3": {
        "total": "1237",
        "ok": "-",
        "ko": "1237"
    },
    "percentiles4": {
        "total": "1636",
        "ok": "-",
        "ko": "1636"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 60,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
        "ok": "0",
        "ko": "60"
    },
    "minResponseTime": {
        "total": "524",
        "ok": "-",
        "ko": "524"
    },
    "maxResponseTime": {
        "total": "2182",
        "ok": "-",
        "ko": "2182"
    },
    "meanResponseTime": {
        "total": "659",
        "ok": "-",
        "ko": "659"
    },
    "standardDeviation": {
        "total": "285",
        "ok": "-",
        "ko": "285"
    },
    "percentiles1": {
        "total": "536",
        "ok": "-",
        "ko": "536"
    },
    "percentiles2": {
        "total": "640",
        "ok": "-",
        "ko": "640"
    },
    "percentiles3": {
        "total": "1237",
        "ok": "-",
        "ko": "1237"
    },
    "percentiles4": {
        "total": "1636",
        "ok": "-",
        "ko": "1636"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 60,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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

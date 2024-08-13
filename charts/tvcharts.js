function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//var no = getParameterByName('no');
var full = getParameterByName('full');
if (full == undefined || full == '') { full = false; }
else { full = true; }
if (full) {
    if (top.location !== self.location) {
        top.location = self.location;
    }
};

var no = $('.No').text();
var mno = readCookie("MemberNo");
if (mno == undefined) { mno = '0' }
//var cid = "histock_"+ mno
//if (mno == undefined) { cid = "histock.tw" }

//TradingView.onready(function () {
function initOnReady() {
    // if (isIE) { return; };
    var widget = window.tvWidget = new TradingView.widget({
        fullscreen: full,
        width: 1020,
        height: 550,
        symbol: no,
        interval: 'D',
        //allow_symbol_change: !1,
        updateFrequency: 6e4,
        timezone: "Asia/Taipei",
        container_id: "tv_chart_container",
        datafeed: new Datafeeds.UDFCompatibleDatafeed("https://histock.tw/Stock/tv/udf.asmx"),
        library_path: "https://histock.tw/stock/tv/charting_library/",
        locale: "zh_TW",
        session: "0800-1345:234567",
        //custom_css_url: "/Stock/tv/tradingview.css",
        //supports_search: !1,
        drawings_access: { type: 'black', tools: [{ name: "Regression Trend" }] },
        disabled_features: ["header_symbol_search", "header_interval_dialog_button", "header_resolutions", "use_localstorage_for_settings", "volume_force_overlay", "link_to_tradingview", "header_interval_dialog_button", "show_dialog_on_snapshot_ready", "study_templates","header_screenshot", "use_localstorage_for_settings"],
        enabled_features: ["right_bar_stays_on_scroll", "minimalistic_logo", "narrow_chart_enabled", "header_widget_dom_node", "show_logo_on_all_charts", "header_saveload"],
        // logo: {
        //     image: "/Stock/tv/logo/HiStock48x24.png",
        //     link: "https://histock.tw"
        // },
        auto_save_delay: 1,
        hideSymbolSearch: !0,
        charts_storage_url: 'https://histock.tw',
        charts_storage_api_version: "1.1",
        client_id: "histock.tw",
        user_id: mno,
        debug: !0,
        onChartReady: null,
        onSymbolChanged: null,
        onIntervalChanged: null,
        //numeric_formatting: { decimal_sign: "." },
        //customFormatters: {
        //    timeFormatter: {
        //        format: function (date) { var _format_str = '%h:%m'; return _format_str.replace('%h', date.getUTCHours(), 2).replace('%m', date.getUTCMinutes(), 2).replace('%s', date.getUTCSeconds(), 2); }
        //    },
        //    dateFormatter: {
        //        format: function (date) { return date.getUTCFullYear() + '/' + date.getUTCMonth() + '/' + date.getUTCDate(); }
        //    }
        //},
        overrides: {

            "mainSeriesProperties.candleStyle.upColor": "#d75442",
            "mainSeriesProperties.candleStyle.downColor": "#6ba583",
            "mainSeriesProperties.candleStyle.drawWick": true,
            "mainSeriesProperties.candleStyle.drawBorder": true,
            "mainSeriesProperties.candleStyle.borderColor": "#378658",
            "mainSeriesProperties.candleStyle.borderUpColor": "#5b1a13",
            "mainSeriesProperties.candleStyle.borderDownColor": "#225437",
            "mainSeriesProperties.candleStyle.wickUpColor": 'rgba( 115, 115, 117, 1)',
            "mainSeriesProperties.candleStyle.wickDownColor": 'rgba( 115, 115, 117, 1)',
            "mainSeriesProperties.candleStyle.barColorsOnPrevClose": false,

            //hollow K styles
            "mainSeriesProperties.hollowCandleStyle.upColor": "#d75442",
            "mainSeriesProperties.hollowCandleStyle.downColor": "#6ba583",
            "mainSeriesProperties.hollowCandleStyle.drawWick": !0,
            "mainSeriesProperties.hollowCandleStyle.drawBorder": !0,
            "mainSeriesProperties.hollowCandleStyle.borderColor": "#378658",
            "mainSeriesProperties.hollowCandleStyle.borderUpColor": "#5b1a13",
            "mainSeriesProperties.hollowCandleStyle.borderDownColor": "#225437",
            "mainSeriesProperties.hollowCandleStyle.wickColor": "#737375",

            "mainSeriesProperties.barStyle.upColor": "#d75442",
            "mainSeriesProperties.barStyle.downColor": "#6ba583",
            "mainSeriesProperties.haStyle.upColor": "#d75442",
            "mainSeriesProperties.haStyle.downColor": "#6ba583",
            "mainSeriesProperties.showLastValue": !1,
            "mainSeriesProperties.showPriceLine": !1,
            "mainSeriesProperties.minTick": "100",
            "symbolWatermarkProperties.color": "rgba(0, 0, 0, 0)",
            "paneProperties.topMargin": 10,
            "paneProperties.bottomMargin": 10,
            "timeScale.rightOffset": 0,
            "paneProperties.navigationButtons": "Always Visible",
            "volumePaneSize": "medium", //large, medium, small, tiny
        },
        studies_overrides: {
            "Moving Average.median.color": "#33FF88",
            "Moving Average.Length": 5,
            "volume.volume.color.0": "#33CC33",
            "volume.volume.color.1": "#FF0066",
            //"volume.precision": 1,
        },
        //studies_access: {
        //    type: "black",
        //    tools: [
        //        {
        //            name: "Moving Average",
        //            grayed: true,
        //        },
        //        ]
        //},
        timeframe: "6m",
        time_frames: [{
            text: "1d",
            resolution: "1",
            description: "Real-time"
        }, {
            text: "120d",
            resolution: "D",
            description: "120D"
        }, {
            text: "3y",
            resolution: "W",
            description: "3Y"
        }, {
            text: "5y",
            resolution: "M",
            description: "5Y"
        }],
    });

    //widget.onChartReady(function () {
    widget.headerReady().then(function () {

        function createHeaderButton(text, title, clickHandler, options) {
            var button = widget.createButton(options);
            button.setAttribute('title', title);
            button.textContent = text;
            button.addEventListener('click', clickHandler);
        }

        createHeaderButton("Real-time", "Real-time Chart", function () {
            widget.setSymbol(no, '1');
            widget.chart().setChartType(2);
        });

        var hasMinKs = ["MTIF", "MTIF2", "STW", "TWOI", "FIMTX", "FITX", "FITF2", "FIMTX2", "STW2", "FITE2", "FITF", "FITX2", "STWA", "0000", "FITE"];
        var a = hasMinKs.indexOf(no.toUpperCase());
        if (a > -1) {
            createHeaderButton("5", "5 min", function () {
                widget.setSymbol(no, '5');
                widget.chart().setChartType(1);
            });

            createHeaderButton("15", "15 min", function () {
                widget.setSymbol(no, '15');
                widget.chart().setChartType(1);
            });

            createHeaderButton("30", "30 min", function () {
                widget.setSymbol(no, '30');
                widget.chart().setChartType(1);
            });

            createHeaderButton("60", "60 min", function () {
                widget.setSymbol(no, '60');
                widget.chart().setChartType(1);
            });

        };

        createHeaderButton("D", "D", function () {
            widget.setSymbol(no, 'D');
            widget.chart().setChartType(1);
        });



        var onlyDK = "WGB_";
        a = no.toUpperCase().indexOf(onlyDK);
        if (a < 0) {
            createHeaderButton("W", "W", function () {
                widget.setSymbol(no, 'W');
                widget.chart().setChartType(1);
            });

            createHeaderButton("M", "M", function () {
                widget.setSymbol(no, 'M');
                widget.chart().setChartType(1);
            });

        };
        
        widget.chart().createStudy('Moving Average', false, false, [20]);
        widget.chart().createStudy('Moving Average', false, false, [50]);
        widget.chart().createStudy('Moving Average', false, false, [100]);
        widget.chart().createStudy('Moving Average', false, false, [200]);

        widget.chart().onIntervalChanged().subscribe(null, function (interval, obj) {
            if (interval == "1") { obj.timeframe = "1D"; };
            if (interval == "D") { obj.timeframe = "6m"; };
            if (interval == "W") { obj.timeframe = "3y"; };
            if (interval == "M") { obj.timeframe = "3y"; };
        });
    });
};

function setStudy() {
    var widget = window.tvWidget;
    widget.chart().removeAllStudies();
    widget.chart().createStudy('Moving Average', false, false, [20]);
    widget.chart().createStudy('Moving Average', false, false, [50]);
    widget.chart().createStudy('Moving Average', false, false, [100]);
    widget.chart().createStudy('Moving Average', false, false, [200]);
    widget.chart().setChartType(TradingView.CANDLES);
};

window.addEventListener('DOMContentLoaded', initOnReady, false);

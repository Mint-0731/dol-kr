function trWeather(weather, post, sep)
{
	const weatherList = {
		"clear":{ko:"맑음",post:0},
		"overcast":{ko:"흐림",post:0},
		"rain":{ko:"비",post:1},
		"snow":{ko:"눈",post:0},
	};
    T.trResult = weatherList[weather].ko;

    if (post)
        trPost(weatherList[weather].post, post, sep);

	return T.trResult;
}
window.trWeather = trWeather;
DefineMacro("trWeather", trWeather);

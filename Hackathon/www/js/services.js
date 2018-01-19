angular.module('app.services', [])

.factory('notificationsFactory', [function(){

    return {
        scheduleNotifications: scheduleNotifications,
        calcDifference: calcDifference
    };

    function scheduleNotifications(args) {
        var daysNo = {S: 0, M: 1, T: 2, W: 3, R: 4, F: 5, SA: 6};
        if(args.time && args.days.length) {
            for (var i = 0; i < args.days.length; i++) {
                var dayNo = daysNo[args.days[i].name];
                var d = new Date();
                d.setHours(args.time.getHours(), args.time.getMinutes(), 0);
                d.setDate(d.getDate() - (dayNo + 7 - d.getDay()));
                if(args.days[i].oldId) {
                    args.$cordovaLocalNotification.cancel(args.days[i].oldId)
                }
                args.$cordovaLocalNotification.schedule({
                    id: args.days[i].id,
                    title: 'Kegel Coach',
                    text: 'Do you want to Kegel now?',
                    sound: args.selectedSound,
                    vibrate: args.vibrate,
                    trigger: { every: 'week', count: 12, firstAt: d },
                    actions: [
                        { id: 'kegel', title: 'Kegel Now', launch: true },
                        { id: 'dismiss',  title: 'Dismiss' }
                    ]
                }).then(function (result) {
                    console.log('result');
                    console.log(result, d)
                });

            }

            cordova.plugins.NativeRingtones.playRingtone(args.selectedSound);
        }
    }

    function calcDifference(notificationDate){
        var notifyDate = new Date(notificationDate);
        var temp = new Date();
        var notifyTime = temp.setHours(notifyDate.getHours(), notifyDate.getMinutes(), 0, 0);
        var a = moment(Date.now());
        var b = moment(notifyTime);
        return a.diff(b, 'minutes')
    }

}])

.service('BlankService', [function(){

}]);

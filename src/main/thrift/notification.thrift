namespace scala com.gu.notifications.model.v1

enum App {
    FaciaTool = 1
}

struct Notification {
    1: required string resourceId;

    2: required string operation;

    3: required string user;

    4: required App app;

    5: required string message;

    6: required string date;
}

namespace scala com.gu.auditing.model.v1

/** List of applications **/
enum App {
    FaciaTool = 1
    StoryPackages = 2
}

/** Basic message **/
struct Notification {
    /** Application sending the message **/
    1: required App app;

    /** action / operation happening in the tool **/
    2: required string operation;

    /** email of the person making the operation **/
    3: required string userEmail;

    /** ISO 8601 date of when the operation occurred **/
    4: required string date;

    /** Identifies a resource in the source application **/
    5: optional string resourceId;

    /** Additional data relevant to the source application **/
    6: optional string message;

}

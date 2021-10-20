

$(document).on("click", '#logout', function() {

    console.log("sdfsd");
    unsetLocalStorage(["user_id", "token"], function() {
        window.location.replace("/");
    });
});


function ajaxRequest (payload = null, options = null, callback, errocallback = null)
{
    try {
        var defaults = {
            type: "POST",
            cache: false,
            async: true,
            processData: true,
        }

        var object = {
            data: payload,
            dataType:"json",
            success: function (response) {
                if (response.error != null) {
                    if (response.error.error == "401! Unauthorized Access.") {
                        window.location.replace("/");
                    }
                }

                callback(response);
            },

            error: function (response) { 
                if (errocallback) {
                    errocallback(response);
                }
            }
        };

        var ajaxRequest = Object.assign({}, object, defaults, options);
        
        return $.ajax(ajaxRequest);

    } catch (e) {
        alert(e);
    }

    return true;
}

function setToLocalStorage($object, callback = null)
{
    for ($key in $object) {
        if (typeof localStorage.getItem($key) != "undefined") {
            localStorage.removeItem($key);
        }

        localStorage.setItem($key, $object[$key]);
    }

    if (callback != null) {
        callback();
    }

    return true;
}

function unsetLocalStorage($unsetKey, callback= null)
{
    for (var i =0; i<$unsetKey.length; i++) {
        localStorage.removeItem($unsetKey[i]);
    }

    if (callback != null) {
        callback();
    }
}

function assignAuthHeader($object = getToLocalStorage(['user_id', 'token']))
{
    var output = {
        Authorization: "no-code",
        Userid: "no-id"
    };

    for (var key in $object) {
        if (localStorage.getItem(key) == null 
            || typeof localStorage.getItem(key) == 'undefined') {
              return null;
        }

        switch(key) {
            case 'token':
                output['Authorization'] =  localStorage.getItem(key);
            break;
            case 'user_id':
                output['Userid'] =  localStorage.getItem(key);
            break;
        }
    }

    return output;
}

function getToLocalStorage($obj)
{
    var output = {};

    for (var i =0; i<$obj.length; i++) {
        if (localStorage.getItem($obj[i]) == null 
            || typeof localStorage.getItem($obj[i]) == "undefined" ) {
                return null;
        }

        output[$obj[i]] =  localStorage.getItem($obj[i]);
    }
    
    return output;
}

function genCountTemplate($elemId, $value){
    return $($elemId).empty().html($value);
}

function generateRequestTemplate($elemId, $elementValue,num)
{                       
    $($elemId).empty();

    if ($elementValue.length > 0) {

       for (var el = 0; el<$elementValue.length; el++) {

            $items = 
                ['<div class="list-group-item d-flex g-3 py-3">',
                    '<i class="material-icons pending">assignment_ind</i>',
                    '<div class="d-flex gap-2 w-100 justify-content-between">',
                        '<a href="" class="text-decoration-none text-black" aria-current="true" data-bs-toggle="modal" data-info="'+$elementValue[el].customer_id+'" data-bs-target="#request_modal-'+num+'" id="dataTarget">',
                                '<div class="endtext">',
                                    '<h6 class="mb-0" id="emp_name">' +$elementValue[el].customer_first_name+ " " + $elementValue[el].customer_last_name +' <small class="text-muted" id="created_at">'+(time_ago(new Date($elementValue[el].customer_created_at)))+'</small></h6>',
                                '</div>',
                                '<p class="mb-0 opacity-75" id="request_details_in_list">'+$elementValue[el].customer_inquiry_details+'</p>',
                        '</a>',
                        (num == 2 ? '<button type="button" id="deleteRequest" data-id="'+$elementValue[el].customer_id+'" class="btn"><small class="opacity-50 text-nowrap"><span class="material-icons">delete_outline</span></small></button>' : ''),
                    '</div>',
                '</div>'];

            $($elemId).append($items.join(""));
        }
    }
}

function generateModelTemplateDashboard($elemId, $content)
{
    for (var el = 0; el<$content.length; el++) { 
        $($elemId + " #fullName").html( $content[el].customer_first_name+ " " +  $content[el].customer_last_name);
        $($elemId + " #email").html( $content[el].customer_email);
        $($elemId + " #mobileNumber").html($content[el].customer_mobile_number);
        $($elemId + " #dateCreated").html(humanReadableDate($content[el].customer_created_at, true));
        $($elemId + " #requestDetails").html($content[el].customer_inquiry_details);
        $($elemId + " #approved").attr('data-id',$content[el].customer_id);
        $($elemId + " #turndown").attr('data-id',$content[el].customer_id);
    }
}

function copyDataApprovedRequest()
{

    var text = 'fullname: '+ $("#request_modal-1 #fullName").html() + '\r\n' +
    'Email: ' + $("#request_modal-1 #email").html() + '\r\n' +
    'Mobile Number: ' + $("#request_modal-1 #mobileNumber").html() + '\r\n' +
    'Date Created: '+ $("#request_modal-1 #dateCreated").html() + '\r\n' +
    "Request Details" + $("#request_modal-1 #requestDetails").html();
    console.log(text)
   /* const writeBtn = document.getElementById('write-btn');
    <!-- <div>
    <input type="text" class="to-copy" placeholder="Type something..." aria-label="Type something">
    <button id="write-btn">Copy to clipboard</button>
</div>

    writeBtn.addEventListener('click', () => {
        const inputValue = inputEl.value.trim();
        if (inputValue) {
          navigator.clipboard.writeText(inputValue)
            .then(() => {
              inputEl.value = '';
              if (writeBtn.innerText !== 'Copied!') {
                const originalText = writeBtn.innerText;
                writeBtn.innerText = 'Copied!';
                setTimeout(() => {
                  writeBtn.innerText = originalText;
                }, 1500);
              }
            })
            .catch(err => {
              console.log('Something went wrong', err);
            })
        }
      });*/
}

function generateTodoTemplate($elem, $content, num)
{
    if ($content.length > 0) {
        
        $($elem).empty();

        for (var el = 0; el<$content.length; el++) {
            $html = [
                '<label class="list-group-item d-flex">',
                    '<div class="flex-fill d-flex gap-3">',
                        '<input class="form-check-input checkbox mt-3" type="checkbox" value="'+$content[el].todo_id+'" style="font-size: 1.00em;" aria-label="...">',
                        '<span class="pt-1 form-checked-content">',
                            '<strong><a href="" class="text-decoration-none" data-bs-toggle="modal" data-info="'+$content[el].todo_id+'" data-bs-target="#update_todo">'+$content[el].todo_title+'</a></strong>',
                            '<small class="d-block mt-1">',
                                '<!--Due Date Observation-->',
                                '<span class="material-icons fs-5 float-start pe-2 pending">event</span> ',
                                humanReadableDate($content[el].todo_deadline) + " (" + getDayDescription($content[el].todo_deadline) + ")",                                                                                
                            '</small>',
                        '</span>',
                    '</div>',
                    (num == 0 ? '<div class="flex-fill align-items-center"><button class="btn copy float-end opacity-50 icon" id="copy-modal-clip"><i class="material-icons">library_add_check</i></button></div>' : ''),
                '</label>'
            ];
        
            $($elem).append($html.join(""));
        } 
    }

}

function getTodoModalTemplate($elem, $content, $num)
{

    $($elem).empty();

    var $html = [
        '<div class="row">',
            '<div class="col">',
                '<p>Project Name: <span class="opacity-75 ms-2">'+$content.todo_title+ '</span></p>',
            '</div>',
            '<div class="col">',
                '<p>Created At: <span class="opacity-75 ms-2">'+humanReadableDate($content.todo_created_at)+'</span></p>',
            '</div>',
            '<p>Event: <i class="material-icons float-start me-2 turndown">event</i><span class="opacity-75">'+humanReadableDate($content.todo_deadline) + " (" + getDayDescription($content.todo_deadline) + ")" + '</span></p>',
        '</div>',
        '<h6>Description:</h6>',
        '<textarea class="form-control bg-white opacity-75 textarea" id="td_description" aria-describedby="help" disabled>'+ $content.todo_description +'</textarea>'
    ];

    if ($content.todo_status == '0') {
        $buttons = [
            '<button  id="todo-update" data-info="'+$content.todo_id+'" class="btn btn-outline-success" name="update">Complete</button>',
            '<button  class="btn btn-outline-success" id="todo-done" name="update">Done</button>'
        ];
    } else {
        $buttons = [
            '<button  class="btn btn-outline-success" id="todo-done" name="update">Done</button>'
        ];
    }

    $("#todo-buttons").empty();
    $("#todo-buttons").append($buttons.join(""));
    $($elem).append($html.join(""));
}

function generateEmptyTemplate($elem)
{
    $($elem).empty();
    $html = [
        '<div class="text-center mt-2 p-5">',
            '<h1 class="material-icons opacity-25 fs-1">subtitles_off</h1>',
            '<p class="opacity-25">Empty</p>',
        '</div>'
    ];

    $($elem).html($html.join(""));
}

function getDayDescription(dateString)
{
    if (!dateString || dateString == '') {
        return new Date().getDay();
    } 
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString);
    return days[d.getDay()];
}

function humanReadableDate(dateString, hours = null)
{

    if (hours) {
        var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'};
    } else {
        var options = { year: 'numeric', month: 'long', day: 'numeric'};
    }

    var today  = new Date(dateString);

    if (!dateString || dateString == '') {
        today  = new Date();
    }

    return today.toLocaleDateString("en-US", options);

}

function generateContactMessage($elem, $content)
{
    $($elem).empty();

    for (var el =0; el<$content.length; el++) { 
        var html = [
            '<label class="list-group-item d-flex gap-3">',
                '<input class="form-check-input class="selectContacts" flex-shrink-0" type="checkbox" value="'+$content[el].emp_mobile_number+'" style="font-size: 1.375em;">',
                '<span class="pt-1 form-checked-content">',
                    '<strong>'+$content[el].emp_first_name +" " + $content[el].emp_last_name+'</strong>',
                    '<small class="d-block text-muted">',
                        $content[el].emp_mobile_number,
                    '</small>',
                '</span>',
            '</label>'
        ];

        $($elem).append(html.join(""));
    }
}

function time_ago(time) {

    var aDay = 24 * 60 * 60 * 1000;

    switch (typeof time) {
      case 'number':
        break;
      case 'string':
        time = +new Date(time);
        break;
      case 'object':
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }

    var time_formats = [
      [60, 'seconds', 1], // 60
      [120, '1 minute ago', '1 minute from now'], // 60*2
      [3600, 'minutes', 60], // 60*60, 60
      [7200, '1 hour ago', '1 hour from now'], // 60*60*2
      [86400, 'hours', 3600], // 60*60*24, 60*60
      [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
      [604800, 'days', 86400], // 60*60*24*7, 60*60*24
      [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
      [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
      [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
      [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
      [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];

    var seconds = (+new Date() - time) / 1000,
      token = 'ago',
      list_choice = 1;
  
    if (seconds == 0) {
      return 'Just now'
    }

    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = 'from now';
      list_choice = 2;
    }

    var i = 0, format;

    while (format = time_formats[i++])
      if (seconds < format[0]) {
        if (typeof format[2] == 'string')
          return format[list_choice];
        else
          return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
      }
    return time;
}

function shortDate(dateString) 
{
    var options = {month: 'short', day: 'numeric'};
    var today  = new Date(dateString);

    if (!dateString || dateString == '') {
        today  = new Date();
    }

    return today.toLocaleDateString("en-US", options);
}

function generateTemplateEmployee($elem, $content)
{
    $($elem).empty();

    for (var el =0; el<$content.length; el++) {
        
        $html = [
           '<tr>',
                '<th scope="row">'+$content[el].emp_id +'</th>',
                '<td>'+$content[el].emp_first_name +" "+ $content[el].emp_last_name +'</td>',
                '<td>'+$content[el].emp_email+'</td>',
                '<td>'+ $content[el].emp_mobile_number +'</td>',
                '<td>'+ ($content[el].emp_status == 1 ? "Active" : "Inactive") +'</td>',
                '<td>'+time_ago(new Date($content[el].emp_created_at))+'</td>',
                '<td><button class="btn btn-sm" id="deleteEmployee" data-info="'+$content[el].emp_id+'"><span class="material-icons text-muted material-icons-outlined fs-3">delete</span></button></td>',
            '</tr>'
        ];

        $($elem).append($html.join(""));
        
    }

}

function generateTemplateSentMessage($elem, $content)
{
    $($elem).empty();

    for (var el =0; el<$content.length; el++) {

        $html = [
            '<label class="list-group-item d-flex">',
                '<div class="flex-fill d-flex gap-3">',
                    '<input class="form-check-input checkbox2 mt-3" type="checkbox" value="'+$content[el].sent_message_id+'" style="font-size: 1.00em;" aria-label="...">',
                    '<span class="pt-1 form-checked-content">',
                        '<strong><a href="" class="text-decoration-none text-dark" data-bs-toggle="modal" data-info="'+$content[el].sent_message_id+'" data-bs-target="#view-message">'+ $content[el].emp_first_name + " " + $content[el].emp_last_name +' <small class="opacity-50 text-secondary">'+time_ago(new Date($content[el].sent_created_at))+'</small></a></strong>',
                        '<small class="d-block text-muted mt-1">',
                            $content[el].sent_message_message,
                        '</small>',
                    '</span>',
                '</div>', 
                '<div class="flex-fill align-items-center">',
                    '<small class="float-end opacity-50">'+shortDate($content[el].sent_created_at)+'</small>',
               '</div>',
            '</label>'
        ];

        $($elem).append($html.join(""));
    }
}

function generateTemplateMessageDetail($elem, $content)
{

    console.log($content);
    $($elem).empty();

    for (var el =0; el<$content.length; el++) {

        var html = [
            '<div class="row">',
                '<div class="col">',
                    '<p>Recipient Name: <span class="opacity-75 ms-2">'+$content[el].emp_first_name +" "+ $content[el].emp_last_name +'</span></p>',
                '</div>',
                '<div class="col">',
                    '<p>Sent At: <span class="opacity-75 ms-2">'+humanReadableDate($content[el].todo_created_at, true)+'</span></p>',
                '</div>',
            '</div>',
            '<div class="row">',
                '<div class="col">',
                    '<p>Mobile Number : <span class="opacity-75 ms-2">'+$content[el].emp_mobile_number+'</span></p>',
                '</div>',
                '<div class="col">',
                    '<p>Email : <span class="opacity-75 ms-2">'+$content[el].emp_email+'</span></p>',
                '</div>',
            '</div>',
            '<hr/>',
            '<h6>Message:</h6>',
            '<textarea class="form-control bg-white opacity-75 textarea" id="td_description" aria-describedby="help" disabled>',
                'Sample',
            '</textarea>'
        ];

        $($elem).html(html.join(""));
    }

}
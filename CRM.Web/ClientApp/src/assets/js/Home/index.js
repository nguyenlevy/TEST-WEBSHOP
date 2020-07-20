// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var Controller = "HOME", ActionResult = "GetListOfEmployees";
var pageIndex = 1;
var pageSize = Number($("select[name='kt_table_1_length']").val());

var getListEmployees = function (pageIndex, pageSize, txtSearch) {
    $("#loadMe").modal({
        backdrop: "static", //remove ability to close modal with click
        keyboard: false, //remove option to close with keyboard
        show: true //Display loader!
    });
    $.ajax
        ({
            type: 'GET',
            url: '/HOME/GetListOfEmployees',
            dataType: 'json',
            data: { pageIndex: pageIndex, pageSize: pageSize, txtSearch },
            success: function (responsedData) {
                
                console.log(responsedData);
                if (responsedData.data.employees.length == 0) {
                    window.location.href = "/Home/Index";
                    localStorage.setItem("pageSize", pageSize);
                }
                var totalItem = responsedData.data.employees.length;
                if (totalItem >= responsedData.data.total_row) {
                    totalItem = responsedData.data.total_row;
                }
                var infoPagingServer = "Hiển thị " + totalItem + " nhân viên trên tổng số " + responsedData.data.total_row;

                $(".pagination__desc").html(infoPagingServer);
                $('#tb_cauhinhhethong tbody').empty();
                var stt = 0;
                if (responsedData.data.page_index > 0) {
                    var stt = (responsedData.data.page_index + 1) * responsedData.data.employees.length;
                }
                console.log(stt);
                $.each(responsedData.data.employees, function (i, item) {
                    var rows = "<tr>";
                    rows = rows + "<td>" + (i+stt) + "</td>";
                    rows = rows + "<td>" + item.id + "</td>";
                    rows = rows + "<td>" + item.fullname + "</td>";
                    var gender = "";
                    gender = (item.gender != null) ? ((item.gender == 1) ? "Nam" : "Nữ") : "&nbsp;";
                    rows = rows + "<td>" + gender + "</td>";
                    rows = rows + "<td>" + new Date(item.birthday).toLocaleDateString("vn-VN", { year: 'numeric', month: '2-digit', day: '2-digit' }) + "</td>";
                    rows = rows + "<td>" + item.phone_number + "</td>";
                    rows = rows + "<td>" + item.address + "</td>";
                    var actions = "";
                    actions = "<a href='/Home/ViewEmployee/" + item.id + "' class='btn btn-primary'>Chi tiết</a>&nbsp;&nbsp;";
                    actions = actions + "<a href='/Home/EditEmployee/" + item.id + "' class='btn btn-success'>Sửa</a>&nbsp;&nbsp;";
                    actions = actions + "<a href='/Home/DeleteEmployee/" + item.id + "' class='btn btn-danger'>Xóa</a>";
                    rows = rows + "<td>" + actions + "</td>";
                    rows = rows + "</tr>";

                    $('#tb_cauhinhhethong tbody').append(rows);
                    if (responsedData.data.total_page == 1 && pageIndex == 1) {
                        $('.pre-page').hide();
                        $('.next-page').hide();
                    }
                    else if (pageIndex == responsedData.data.total_page) {
                        $('.next-page').hide();
                        $('.pre-page').show();
                    }
                    else if (responsedData.data.total_page == 1 && pageIndex == 1) {
                        $('.pre-page').hide();
                        $('.next-page').hide();
                    }
                    else if (pageIndex == 1) {
                        $('.pre-page').hide();
                        $('.next-page').show();
                    }
                    else {
                        $('.next-page').show();
                        $('.pre-page').show();
                    }
                });
                $("#loadMe").modal("hide");
            }
        });
}

/* Display list of employees */
$(document).ready(function () {
    if (localStorage.getItem("pageSize") != null) {
        $("select[name='kt_table_1_length']").val(localStorage.getItem("pageSize"));
    }
    pageSize = Number($("select[name='kt_table_1_length']").val());
    $("select[name='kt_table_1_length']").change(function () {
        var txtSearch = $('#SearchString').val();
        pageIndex = Number($('.page-index').text());
        pageSize = ($(this).val());
        //console.log(pageSize);
        //console.log(pageIndex
        localStorage.setItem("pageSize", pageSize);
        console.log(txtSearch);
        $('#tb_cauhinhhethong tbody').html('');;
        getListEmployees(pageIndex, pageSize, txtSearch);
    });

    getListEmployees(pageIndex, pageSize);
});
$('.next-page').click(function (event) {
    var txtSearch = $('#SearchString').val();
    event.preventDefault();
    pageIndex = Number($('.page-index').text()) + 1;
    $('.page-index').text(pageIndex);
    $('#tb_cauhinhhethong tbody').html('');
    //console.log(pageIndex);
    getListEmployees(pageIndex, pageSize, txtSearch);
})
$('.pre-page').click(function (event) {
    var txtSearch = $('#SearchString').val();
    event.preventDefault();
    pageIndex = Number($('.page-index').text()) - 1;
    $('.page-index').text(pageIndex);
    $('#tb_cauhinhhethong tbody').html('');
    //console.log(pageIndex);
    getListEmployees(pageIndex, pageSize, txtSearch);
});

$('#btnSearch').click(function () {
    var txtSearch = $('#SearchString').val();
    console.log(txtSearch);
    getListEmployees(pageIndex, pageSize, txtSearch);
});
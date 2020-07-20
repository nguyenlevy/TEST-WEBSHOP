"use strict";
var KTDatatablesAdvancedMultipleControls = function () {
    //$('#kt_table_1').empty();
	var initTable1 = function() {
		var table = $('#kt_table_1');
        //table.dataTable({
        //});
		// begin first table
        table.DataTable({
            "fnInfoCallback": function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
                return "Hiển thị "+iStart+" đến "+iEnd + " của " + iMax +" mục";
            },
            "language": {
                "lengthMenu": '<div class="dataTables_length" id="kt_table_1_length"><label>Hiển thị  '+
            '<select name = "kt_table_1_length" aria - controls="kt_table_1" class= "custom-select custom-select-sm form-control form-control-sm" > ' +
                    '<option value="10">10</option>' +
                    '<option value="20">20</option>' +
                    '<option value="30">30</option>' +
                    '<option value="40">40</option>' +
                    '<option value="50">50</option>' +
                    '<option value="-1">All</option>' +
                    '</select>  mục</label></div>'
            },
            "fnFormatNumber": function (iIn) {
                if (iIn < 1000) {
                    return iIn;
                } else {
                    var
                        s = (iIn + ""),
                        a = s.split(""), out = "",
                        iLen = s.length;

                    for (var i = 0; i < iLen; i++) {
                        if (i % 3 === 0 && i !== 0) {
                            out = "," + out;
                        }
                        out = a[iLen - i - 1] + out;
                    }
                }
                return out;
            },

            "pagingType": "full_numbers",

			// DOM Layout settings
			dom:
				"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
				"<'row'<'col-sm-12'tr>>"+ // read more: https://datatables.net/examples/basic_init/dom.html
                "<'row'<'col-sm-12 col-md-6'i><'col-sm-12 col-md-6'p>>" ,
           
			columnDefs: [
				{
					//targets: -1,
					//title: 'Actions',
					//orderable: false,
					//render: function(data, type, full, meta) {
					//	return `
     //                   <span class="dropdown">
     //                       <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">
     //                         <i class="la la-ellipsis-h"></i>
     //                       </a>
     //                       <div class="dropdown-menu dropdown-menu-right">
     //                           <a class="dropdown-item" href="/Home/ViewEmployee/"><i class="la la-edit"></i> Details</a>
     //                           <a class="dropdown-item" href="/Home/EditEmployee/"><i class="la la-leaf"></i> Update</a>
     //                           <a class="dropdown-item" href="/Home/DeleteEmployee/"><i class="la la-print"></i> Delete</a>
     //                       </div>
     //                   </span>
     //                   <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">
     //                     <i class="la la-edit"></i>
     //                   </a>`;
					//},
				},
				{
					targets: 4,
					render: function(data, type, full, meta) {
						var status = {
							1: {'title': 'Pending', 'class': 'kt-badge--brand'},
							2: {'title': 'Delivered', 'class': ' kt-badge--danger'},
							3: {'title': 'Canceled', 'class': ' kt-badge--primary'},
							4: {'title': 'Success', 'class': ' kt-badge--success'},
							5: {'title': 'Info', 'class': ' kt-badge--info'},
							6: {'title': 'Danger', 'class': ' kt-badge--danger'},
							7: {'title': 'Warning', 'class': ' kt-badge--warning'},
						};
						if (typeof status[data] === 'undefined') {
							return data;
						}
						return '<span class="kt-badge ' + status[data].class + ' kt-badge--inline kt-badge--pill">' + status[data].title + '</span>';
					},
				},
				{
					targets: 5,
					render: function(data, type, full, meta) {
						var status = {
							1: {'title': 'Online', 'state': 'danger'},
							2: {'title': 'Retail', 'state': 'primary'},
							3: {'title': 'Direct', 'state': 'success'},
						};
						if (typeof status[data] === 'undefined') {
							return data;
						}
						return '<span class="kt-badge kt-badge--' + status[data].state + ' kt-badge--dot"></span>&nbsp;' +
							'<span class="kt-font-bold kt-font-' + status[data].state + '">' + status[data].title + '</span>';
					},
				},
			],
        });
	};

	return {
		//main function to initiate the module
		init: function() {
			initTable1();
		},
	};
}();

jQuery(document).ready(function() {
	KTDatatablesAdvancedMultipleControls.init();
});
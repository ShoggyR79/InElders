import React, { Component } from 'react';
function Checklist() {
    return (
<section class="tm-section">
    <div class="container-fluid">
        <div class="page-content page-container" id="page-content">
        <div class="padding">
            <div class="row container d-flex justify-content-center">
                <div class="col-md-12">
                    <div class="card px-3">
                        <div class="card-body">
                            <h3 class="tm-gold-text">Checklist</h3>
                            <div class="list-wrapper">
                                <ul class="d-flex flex-column-reverse todo-list">
                                    <li>
                                        <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" /> Have you been able to feel happy and satisfied and see the funny sides of things?<i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                        <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"/>Did you talk to your family members and friends?<i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                       <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" />Have you found many activities and interests in your day? <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                       <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" />Have you eaten and slept well? <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                       <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" />Do you feel full of care and affection? <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                       <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" />Are you in good spirits most of the time? <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                       <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" /> Are you NOT afraid that something bad is going to happen to you?<i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                       <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" /> Do you want to go out and do new things?<i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                       <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" /> Do you have more problems with your memory than most? <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                       <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" /> Do you think it is wonderful to be alive now?<i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                       <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" /> Have you started your day full of energy?<i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                        <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" />Do you feel happy with your family today?<i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                         <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" />Do things always go with your satisfaction today?<i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                       <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" />Do you feel exhausted?<i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                    </li>
                                    <li>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input class="checkbox" type="checkbox" /> Do you think that you deserve the best?
                                                <i class="input-helper"></i>
                                            </label>
                                        </div>
                                                    
                                    </li>
                                </ul>
                                <div class="d-block text-right card-footer">
                                    <button class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
    );
}
export default Checklist;

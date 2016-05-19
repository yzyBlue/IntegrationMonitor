INSERT INTO TRANS_TYPE VALUES ('PAM','Patient Administrative','病人管理','病人管理，包括病人入出转，病人信息更新，病人换床等记录',getdate());
INSERT INTO TRANS_TYPE VALUES ('EXAM','Examination Transaction','检查事务','检查流程所有事务，包括下达申请，预约安排，检查开始，检查状态变更，检查数据生成，检查报告生成等',getdate());
INSERT INTO TRANS_TYPE VALUES ('ORDER','Order Transaction','医嘱事务','医嘱管理，包括医嘱下达，医嘱执行，医嘱状态变更等。',getdate());
INSERT INTO TRANS_TYPE VALUES ('DRUG','Drug Transaction','摆药事务','摆药流程管理，包括摆药申请下达，摆药状态返回，退药申请，退药状态返回等。',getdate());
INSERT INTO TRANS_TYPE VALUES ('PRESC','Prescription Transaction','处方事务','处方流程管理，包括处方申请下达，处方状态返回等',getdate());
INSERT INTO TRANS_TYPE VALUES ('SURGERY','Surgery Transaction','手术事务','手术事务管理，包括手术申请下达，手术状态返回，手术预约安排，手术开始，手术状态变更，手术完成，手术报告生成等。',getdate());
INSERT INTO TRANS_TYPE VALUES ('LABTEST','LabTest Transaction','检验事务','检验流程上所有事务管理，包括检验申请下达，检验采标开始，检验状态变更，检验报告生成。',getdate());
INSERT INTO TRANS_TYPE VALUES ('CONSULT','Consult Transaction','会诊事务','会诊事务管理，包括会诊申请下达，会诊安排，会诊意见等',getdate());
INSERT INTO TRANS_TYPE VALUES ('DIAGNOSE','Diagnose Transaction','诊断事务','诊断信息管理，包括诊断信息生成，诊断信息变更，诊断信息删除等操作。',getdate());
INSERT INTO TRANS_TYPE VALUES ('PHYSIGN','PhysicalSign Transaction','体征事务','体征信息管理，包括体征信息录入，体征信息变更，体征信息删除等',getdate());
INSERT INTO TRANS_TYPE VALUES ('NEWBORN','NewBorn Transaction','新生儿事务','新生儿信息管理，包括新生儿信息录入等',getdate());
INSERT INTO TRANS_TYPE VALUES ('FPMR','FirstPage Transaction','病案首页管理','病案首页更新',getdate());
INSERT INTO TRANS_TYPE VALUES ('EMR','EMR Transaction','病历管理','病历信息管理，包括病例提交，病历更新，病历删除等。',getdate());

INSERT INTO MSG_EVENT_TYPE
(MESSAGE_TYPE,EVENT_TYPE,CONTROL_CODE,TRANS_CODE,MSG_TYPE_DESC,CREATE_DATE_TIME) VALUES 
('ADT','A01','','PAM','病人入院',getdate()),
('ADT','A06','NW','PAM','病人入科',getdate()),
('ADT','A06','CA','PAM','病人取消入科',getdate()),
('ADT','A02','NW','PAM','病人转科',getdate()),
('ADT','A02','CA','PAM','病人取消转科',getdate()),
('ADT','A17','','PAM','病人换床',getdate()),
('ADT','A08','','PAM','病人信息更新',getdate()),
('ADT','A03','NW','PAM','病人出院',getdate()),
('ADT','A03','CA','PAM','病人取消出院',getdate())




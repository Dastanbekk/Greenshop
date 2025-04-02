import { Form, Input, Radio } from "antd";
import { cookieInfo } from "../../../generics/cookies";
import {
  setModalAuthorizationVisibility,
  setOrderModalVisibility,
} from "../../../redux/modal-slice";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { MakeOrderType } from "../../../@types";
import { useMakeOrderList } from "../../../hooks/useQuery/useQueryAction";
import { LoadingOutlined } from "@ant-design/icons";

const ProceedCheckoutBilling = () => {
  const { isAuthorization, getCookie } = cookieInfo();
  const user = getCookie("user");
  const dispatch = useReduxDispatch();
  const radio_style: string =
    "!border-ant-radio-wrapper !ant-radio-wrapper-checked ant-radio-wrapper-in-from-item !border !border-[#46A358] w-full !h-[40px] !flex !items-center !pl-[10px] rounded-lg !css-k7429zer";
  const { data } = useReduxSelector((state) => state.cartSlice);
  const { discount } = useReduxSelector((state) => state.couponSlice);
  const totalPrice = data.reduce((acc, val) => (acc += val.userPrice), 16);
  let total = discount
    ? totalPrice - (totalPrice * discount) / 100
    : totalPrice;
  const { mutate, isPending } = useMakeOrderList();
  const order = (e: MakeOrderType) => {
    let makeOrder = {
      shop_list: data,
      billing_address: e,
      extra_shop_info: { method: e.payment_method, total },
    };
    mutate(makeOrder);
  };

  return (
    <section>
      <Form
        onFinish={order}
        layout="vertical"
        fields={[
          { name: "name", value: user?.name },
          { name: "surname", value: user?.surname },
          { name: "country", value: user?.billing_address?.country },
          { name: "street", value: user?.billing_address?.street },
          { name: "state", value: user?.billing_address?.state },
          { name: "email", value: user?.email },
          { name: "zip", value: user?.billing_address?.zip },
          {
            name: "appartment",
            value: user?.billing_address?.additional_street_address,
          },
          { name: "town", value: user?.billing_address?.town },
          { name: "phone_number", value: user?.phone_number },
        ]}
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <div>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input placeholder="Type your first name..." />
              </Form.Item>

              <Form.Item
                name="country"
                label="Country / Region"
                rules={[{ required: true }]}
              >
                <Input placeholder="Type your first country..." />
              </Form.Item>

              <Form.Item
                name="street"
                label="Street Address"
                rules={[{ required: true }]}
              >
                <Input placeholder="Type your first street..." />
              </Form.Item>

              <Form.Item
                name="state"
                label="State"
                rules={[{ required: true }]}
              >
                <Input placeholder="Type your first state..." />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email address"
                rules={[{ required: true }]}
              >
                <Input placeholder="Type your first email..." />
              </Form.Item>

              {/* Radio Group */}
              <Form.Item name="paymentMethod">
                <Radio.Group className="!flex !flex-col !gap-3">
                  <Radio className={radio_style} value="other-payment-methods">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/1e46/0c89/ee17b2b09a69f96d2552ed3b0b04ac05?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A-ArgymEEYXi-OK-Nu55Ao6ze09Q4z53O1Wdl-RbbQ-n3VvLyV9cg2g2kvXwgFXGewo2HD-t5SWJlJIB47x4eT8CIPcT0jGOPMVEBi4HFCwzw3v1cMNnQFO3GAbMhpMgSqsM9eCdWlV2awJXMHlJS53CC1sy10dgbT6qSToKK0HI97CqNZULPs-b0iJS282aclKIAvtNfkafy~r~-NV6B0YhMNgieRs8Jeta-Bfggasq8UmtDkWlMt06X9kLjvXmAHRfaq~xEYLciE1pyUX7ch9t29Bp8RMLlMJXLc3b8CQbk~mha05XWzb0LJYlXaged9Hj8BtHP8n9U1lQAaD2yw__"
                      alt="Payment Methods"
                    />
                  </Radio>

                  <Radio className={radio_style} value="direct-bank-transfer">
                    Direct Bank Transfer
                  </Radio>

                  <Radio className={radio_style} value="cash-on-delivery">
                    Cash on Delivery
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
          <div>
            <div>
              <Form.Item
                name="surname"
                label="Last Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Type your Last name..." />
              </Form.Item>

              <Form.Item
                name="town"
                label="Town / City"
                rules={[{ required: true }]}
              >
                <Input placeholder="Type your city" />
              </Form.Item>

              <Form.Item name="appartment" rules={[{ required: true }]}>
                <Input
                  className="!mt-7.5"
                  placeholder="Appartment, suite, unit, etc. (optional)"
                />
              </Form.Item>

              <Form.Item name="zip" label="Zip" rules={[{ required: true }]}>
                <Input placeholder="Zip" />
              </Form.Item>

              <Form.Item
                name="phone_number"
                label="Phone Number"
                rules={[{ required: true }]}
              >
                <Input addonBefore="+998" />
              </Form.Item>
            </div>
          </div>
        </div>
        <div>
          <Form.Item name="comments" label="Comment">
            <Input.TextArea
              className="!resize-none"
              placeholder="Enter your comment"
              rows={10}
            ></Input.TextArea>
            <button
              onClick={() => {
                if (!isAuthorization) {
                  dispatch(setModalAuthorizationVisibility());
                  return;
                } else {
                  dispatch(setOrderModalVisibility());
                }
              }}
              className="w-full text-center py-1 active:scale-95 transition text-[18px] rounded-md bg-[#46A358] text-white  mt-3 cursor-pointer"
            >
              {isPending ? <LoadingOutlined /> : "Place order"}
            </button>
          </Form.Item>
        </div>
      </Form>
    </section>
  );
};

export default ProceedCheckoutBilling;

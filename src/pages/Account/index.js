import { Image, Text } from "@chakra-ui/react";
import { useWindowDimensions } from "../../hooks/dimensions";
import TransactionHistory from "../../components/Common/TransactionHistory";

export default function Account() {
  const { width } = useWindowDimensions();
  return (
    <div className="flex flex-row flex-wrap justify-between mt-10">
      <div className="w-2/12" style={{ minWidth: 200 }}>
        <div className="p-4 rounded-md bg-slate-700 flex items-center flex-col">
          <Image
            objectFit="cover"
            width={width / 8}
            height={width / 8}
            src="https://upload.wikimedia.org/wikipedia/commons/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg"
          />
          <Text className="text-white font-semibold mt-2">Descartes</Text>
          <Text className="text-white mt-2 text-center">
            I'm here to make money and retire on my private island
          </Text>
          <Text className="text-white font-bold mt-2">XP</Text>
          <div className="w-full bg-black mt-2" style={{ height: 5 }}>
            <div
              className="w-6/12"
              style={{ height: 5, backgroundColor: "purple" }}
            />
          </div>
          <div className="flex flex-row justify-between mt-5 w-full">
            <div>
              <Text className="text-white font-semibold text-xl text-center">
                423
              </Text>
              <Text className="text-sm text-center">FOLLOWS</Text>
            </div>
            <div>
              <Text className="text-white font-semibold text-xl text-center">
                123
              </Text>
              <Text className="text-sm text-center">FOLLOWING</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 mx-5" style={{ minWidth: 500 }}>
        <TransactionHistory />
        <div className="w-full mt-5">
          <div className="flex flex-row">
            <div className="w-6/12 rounded-md bg-slate-700 p-5 m-2">
              <Text className="text-white font-semibold text-center">
                $14,768
              </Text>
              <Text className="text-white font-semibold text-center">
                Total Value
              </Text>
            </div>
            <div className="w-6/12 rounded-md bg-slate-700 p-5 m-2">
              <Text className="text-white font-semibold text-center">142</Text>
              <Text className="text-white font-semibold text-center">
                Total NFTs
              </Text>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-6/12 rounded-md bg-slate-700 p-5 m-2">
              <Text className="text-white font-semibold text-center">
                $146,768
              </Text>
              <Text className="text-white font-semibold text-center">
                Portfolio Value
              </Text>
            </div>
            <div className="w-6/12 rounded-md bg-slate-700 p-5 m-2">
              <Text className="text-white font-semibold text-center">
                Last Purchase
              </Text>
              <Text className="text-white font-semibold text-center">
                07/09/2022
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/12" style={{ minWidth: 300 }}>
        <div style={{ width: width / 6, height: width / 6 }}>
          <Text className="text-white font-semibold mb-5">
            Most Valuable NFT in Collection
          </Text>
          <Image
            width={width / 6}
            height={width / 6}
            objectFit="cover"
            src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
          />
          <Text className="text-white font-semibold text-center mt-5">
            $5,489
          </Text>
        </div>
      </div>
    </div>
  );
}

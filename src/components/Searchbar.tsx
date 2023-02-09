import { Combobox, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useProducts } from "./swrHooks";
import { useRouter } from "next/router";
export const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { products, isLoading } = useProducts({ search: query });
  const router = useRouter();
  const openModal = () => setIsOpen(true);
  return (
    <>
      <div>
        <button
          className="flex bg-gray-100 shadow-inner shadow-gray-400 rounded-xl py-2 px-4"
          onClick={openModal}
        >
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
          <span className="text-gray-400">Search...</span>
        </button>
      </div>

      <Transition
        appear
        show={isOpen}
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog
          onClose={setIsOpen}
          open={isOpen}
          className="fixed inset-0 overflow-y-auto pt-[25vh]"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75 backdrop-blur-sm"></Dialog.Overlay>
          <Combobox
            as="div"
            className="relative mx-auto max-w-xl rounded-xl bg-gray-100 shadow-2xl ring-1 ring-black/5 divide-y divid-gray-100 overflow-hidden"
            onChange={(product: any) => {
              setIsOpen(false);
              router.push(`/produkty/produkt/${product.slug}/${product.id}`);
            }}
          >
            <div className="flex items-center px-4">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
              <Combobox.Input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                className="w-full bg-transparent border-0 focus:ring-0 text-sm text-gray-800 placeholder-gray-400 h-12 "
                placeholder="Search..."
              />
            </div>
            {isLoading ? (
              <p>Loading...</p>
            ) : query && products.length === 0 ? (
              <p>No results found {query}</p>
            ) : (
              <Combobox.Options className="max-h-96 overflow-y-auto py-4 text-sm">
                {products.map((product: any) => {
                  return (
                    <Combobox.Option value={product} key={product.id}>
                      {({ active }) => (
                        <div
                          className={`space-x-1 px-4 py-2 ${
                            active ? "bg-gray-500" : ""
                          }`}
                        >
                          {product.name}
                        </div>
                      )}
                    </Combobox.Option>
                  );
                })}
              </Combobox.Options>
            )}
          </Combobox>
        </Dialog>
      </Transition>
    </>
  );
};

import { shallowMount } from '@vue/test-utils';
import Home from '@/views/HomeView';

// jest.mock('fetch', () => Promise.resolve({ data: 'value' }))

function setupFetchStub(data) {
  return function fetchStub(_url) {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve({
          data,
        }),
      });
    });
  };
}

// mockResolvedValue({ data: 'value' })

describe('HelloWorld.vue', () => {
  // test('displays component', async () => {
  // })

  // test('reads props', async () => {
  // })

  // test('button changes name', async () => {
  // })

  // test('button loads data', async () => {
  // })

  test('displays component', async () => {
    // 3: mock external libs
    global.fetch = jest.fn().mockImplementation(setupFetchStub({ foo: 'bar' }));

    const wrapper = shallowMount(Home, {
      props: {
        id: 'Hello world',
      },
    });

    // 4: spy on calls
    const loadDataSpy = jest.spyOn(wrapper.vm, 'loadData');

    // 1: test UI
    const title = wrapper.get('[data-test="cmp-title"]');
    const button = wrapper.get('[data-test="change-name-button"]');

    // 1: test UI
    expect(wrapper.text()).toContain('Mike');
    expect(title.text()).toBe('Mike');

    // 2: access props
    expect(wrapper.vm.name).toBe('Mike');

    button.trigger('click');
    // M ---> V
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain('Alex');
    expect(title.text()).toBe('Alex');

    // 2: access props
    expect(wrapper.vm.name).toBe('Alex');

    // 4: spy on calls
    expect(loadDataSpy).toBeCalled();

    global.fetch.mockClear();
  });
});

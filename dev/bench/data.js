window.BENCHMARK_DATA = {
  "lastUpdate": 1778423422572,
  "repoUrl": "https://github.com/parthdagia05/besu",
  "entries": {
    "Besu EVM JMH Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "03495ab89c23571a4914dab7151cc26262f6664c",
          "message": "Document benchmark workflow in docs/benchmarks/README.md\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-05T00:59:44Z",
          "url": "https://github.com/parthdagia05/besu/commit/03495ab89c23571a4914dab7151cc26262f6664c"
        },
        "date": 1777944742488,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 89.62256907066242,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.793001445953518,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "03495ab89c23571a4914dab7151cc26262f6664c",
          "message": "Document benchmark workflow in docs/benchmarks/README.md\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-05T00:59:44Z",
          "url": "https://github.com/parthdagia05/besu/commit/03495ab89c23571a4914dab7151cc26262f6664c"
        },
        "date": 1777946277532,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 90.13561612589116,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.347924281606529,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "5d8ea2078737cb378345e9aac612afd5586e048c",
          "message": "Drop V2 suffix from shift-op regex for symmetric v1/v2 comparison\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-10T14:14:25Z",
          "url": "https://github.com/parthdagia05/besu/commit/5d8ea2078737cb378345e9aac612afd5586e048c"
        },
        "date": 1778423421206,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 90.58928114729122,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 88.7811205369118,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 86.93299276884535,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 86.35244626608336,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 79.24147186294853,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 104.55310319020217,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 98.86888181836036,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 70.21086727357701,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 34.40425669450893,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 25.194728065343053,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 23.723675871048723,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 78.99238450376718,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 50.21995530888048,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 89.25488166808339,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 71.40524143551036,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 45.99440559727822,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.14309310338773,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 17.594991895180428,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 71.36304731849236,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 66.04109735437513,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 88.32960409948767,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 72.42869385392824,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 35.05468386334516,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 19.31741415869818,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 16.983657204205876,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 68.44871363595266,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.14622350965571,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 6.840293761314575,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_1\"} )",
            "value": 9.671683986394369,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"ALL_BITS_SHIFT_1\"} )",
            "value": 9.556282537244005,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_1\"} )",
            "value": 8.952814630023873,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_128\"} )",
            "value": 7.836303657900278,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"NEGATIVE_SHIFT_255\"} )",
            "value": 8.214929119214833,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_128\"} )",
            "value": 7.730265542222517,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"POSITIVE_SHIFT_255\"} )",
            "value": 7.563751742303023,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.03028334699879,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 7.927317079721249,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.725489977137073,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 7.020235143476742,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 9.681014511187088,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 7.772437569237603,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 7.849607358290365,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.409549181934036,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.454551667134236,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.012773651796087,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_0\"} )",
            "value": 6.974792962689418,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_1\"} )",
            "value": 9.091643414341082,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_128\"} )",
            "value": 7.569883664897249,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"SHIFT_255\"} )",
            "value": 7.724040810696034,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_SHIFT_256\"} )",
            "value": 8.4073560778693,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"OVERFLOW_LARGE_SHIFT\"} )",
            "value": 8.48507106335445,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.25256206863467,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}